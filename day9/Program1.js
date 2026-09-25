const EventEmitter = require('events');
// Here EventEmitter is a predefined class that is It is provided by the Node.js runtime environment. It is used to create and handle events in Node.js applications. The EventEmitter class allows you to create custom events and listen for those events, enabling asynchronous programming and event-driven architecture in your applications.
const ud= new EventEmitter()
ud.on('greet', (name) => {
    console.log(`Hello there 2B ${name}`);
})
ud.on('exit', (num) => {
    console.log(`Thanks for visiting ${num}`);
})
ud.emit('greet', 'Sarthak');
ud.emit('exit', 2);


class Button extends EventEmitter {
    click() {
        console.log("Button was clicked");
        this.emit('click',{timestamp: Date.now()});
    }
}
const button = new Button();
button.on('click', (event) => {
    console.log(`Click event fired at ${event.timestamp}`);
});
button.click();