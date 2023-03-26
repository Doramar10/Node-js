const os = require('node:os');

const Func = require('./functions');

function Main(){
    console.log(os.type());
    console.log(os.version());
    console.log(os.homedir());

    console.log('__dirname =', __dirname);
    console.log('__filename =', __filename);

    console.log(Func.Big(16,15,10));
    Func.count(5,"Hello")
    console.log(Func.asroni(12.3678));

}

Main();