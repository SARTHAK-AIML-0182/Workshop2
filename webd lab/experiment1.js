// EXPERIMENT - 1

// 1.	Create a custom EventEmitter that triggers "greet" or "exit"                                                                                        
// 2.	Simulate DOM-like event handling in Node.js using events                                           
// 3.	Visualize the event loop using setTimeout, setImmediate, and process.nextTick


//1
const EventEmitter = require('events');
class UserSession extends EventEmitter {
  greet(name) {
    console.log(`[Action] Greeting user...`);
    this.emit('greet', name);
  }
  exit(code) {
    console.log(`[Action] User exiting...`);
    this.emit('exit', code);
  }
}
const session = new UserSession();
session.on('greet', (name) => {
  console.log(`Event 'greet': Hello, ${name}! Welcome aboard.`);
});
session.on('exit', (code) => {
  console.log(`Event 'exit': Session closed with status code ${code}.`);
});
session.greet('Sarthak');
session.exit(0);







//2


const EventEmitter = require('events');
class DOMElement extends EventEmitter {
  constructor(tagName) {
    super();
    this.tagName = tagName;
  }
  addEventListener(event, callback) {
    this.on(event, callback);
  }
  removeEventListener(event, callback) {
    this.off(event, callback);
  }

  // Method to simulate user click
  click() {
    const eventObject = {
      type: 'click',
      target: this.tagName,
      timestamp: Date.now()
    };
    this.emit('click', eventObject);
  }
}
const submitBtn = new DOMElement('BUTTON');

function handleClick(event) {
  console.log(`DOM event '${event.type}' triggered on <${event.target}> at ${event.timestamp}`);
}

submitBtn.addEventListener('click', handleClick);
submitBtn.click();
submitBtn.removeEventListener('click', handleClick);
submitBtn.click();




//3


console.log("start");

setTimeout(() => {
  console.log("timeout (after 2s)");
}, 2000);

setImmediate(() => {
  console.log("Immediate");
});

process.nextTick(() => {
  console.log("Next tick");
});

console.log("end");
















