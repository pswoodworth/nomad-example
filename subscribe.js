const Nomad = require('nomad-stream')
const nomad = new Nomad()
console.log(nomad);


nomad.subscribe(['QmRAxkJ7165rcWpGVnrKaB2JavpdbN3AR9eT5UbsRwaf5V', 'QmPMHfhr3p7fR17SNBmB5vuoVGoLWggVLj8tnYDgBCiUbU'], function(message) {
  console.log('received new message');
  console.log(message.message);
}, function(err){console.log(err)});

nomad.prepareToPublish().catch(function(err){
  console.log(err);
}).then(function(n) {
  console.log(n);
  const nomadInstance = n;
  nomadInstance.publishRoot('root hi pie');
  var counter = 0;
  setInterval(function(){
    console.log('publishing');
    nomadInstance.publish(`hi pie ${counter}`);
    counter++;
  }, 10000);
});


// let idx = 0
// 
// const createMessage = () => {
//   return `Message: ${idx++}`
// }
// 
// let instance = null
// nomad.prepareToPublish()
//   .then((n) => {
//     instance = n
//     console.log('DEMO: CONNECTED!!!!')
//     return instance.publishRoot('ROOT MESSAGE')
//   })
//   .catch(() => {
//     log.err('Error publishing root message')
//   })
//   .then(() => {
//     console.log('READY')
//     console.log('DEMO: ROOT PUBLISHED!!!!')
//     setInterval(() => {
// 	const msg = createMessage();
// 	console.log('sending message', msg);
//       instance.publish(msg)
//     }, 60000)
//     return nomad.publish(createMessage())
//   })
//   .catch((err) => {
//     log.err('err')
//     console.log('DEMO: CONNECT ERROR!!!!', e)
//     console.log(e)
//     return nomad.publish('Hey there, Gavin!')
//   })
//   .then(() => {
//     console.log('DEMO: PUBLLISHED!!!!', d)
//   })
//   .catch(() => {
//     console.log('DEMO: PUBLISH ERROR!!!!', e)
//   })
