const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

// const myEmitter = new EventEmitter();
// myEmitter.on('WaterFall', ()=> {
//     console.log('an event occurred');
// });
// myEmitter.emit('WaterFall');
const myEmitter = new MyEmitter();
myEmitter.on('GAS',()=>{
    console.log("The food is being cooked");;
    setTimeout(()=>{
        console.log("Turn off the stove, the food is ready")
    },3000);
})
myEmitter.emit('GAS');
console.log("The food will be ready in 3 seconds");
myEmitter.emit('GAS') ;