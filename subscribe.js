const Nomad = require('nomad-stream')
const nomad = new Nomad()

nomad.subscribe(['QmcKg8YHonVbq8ZYkHsNfvdHp3hfwcJknpzv5c7FckLtUR', 'QmPMHfhr3p7fR17SNBmB5vuoVGoLWggVLj8tnYDgBCiUbU'], function(message) {
  console.log('received new message');
  console.log(message.message);
}, function(err){console.log(err)});

// nomad.prepareToPublish().catch(function(err){
//   console.log(err);
// }).then(function(n) {
//   console.log(n);
//   const nomadInstance = n;
//   // nomadInstance.publishRoot('root hi');
//   var counter = 0;
//   setInterval(function(){
//     console.log('publishing');
//     nomadInstance.publish(`hi ${counter}`);
//     counter++;
//   }, 2000);
// });


let idx = 0

const createMessage = () => {
  return `Message: ${idx++}`
}

let instance = null
nomad.prepareToPublish()
  .then((n) => {
    instance = n
    console.log('DEMO: CONNECTED!!!!')
    return instance.publishRoot('ROOT MESSAGE')
  })
  .catch(() => {
    log.err('Error publishing root message')
  })
  .then(() => {
    console.log('READY')
    console.log('DEMO: ROOT PUBLISHED!!!!')
    setInterval(() => {
      instance.publish(createMessage())
    }, 60000)
    return nomad.publish(createMessage())
  })
  .catch((err) => {
    log.err('err')
    console.log('DEMO: CONNECT ERROR!!!!', e)
    console.log(e)
    return nomad.publish('Hey there, Gavin!')
  })
  .then(() => {
    console.log('DEMO: PUBLLISHED!!!!', d)
  })
  .catch(() => {
    console.log('DEMO: PUBLISH ERROR!!!!', e)
  })
