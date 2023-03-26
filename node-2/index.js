const {EventHandler} = require('./models/EventHandler');
const {Crate,endProgram} = require('./Functions');


function Main(){

    let myEvent = new EventHandler();

    let n = 1
    myEvent.on('Crate', () => Crate(n++));
    
    myEvent.emit('Crate');
    myEvent.emit('Crate');
    myEvent.emit('Crate');
    myEvent.emit('Crate');
    myEvent.emit('Crate');
    
    myEvent.on('end',endProgram);
    myEvent.emit('end');

}

Main();