const {existsSync} = require('node:fs');
const {mkdir, readFile , appendFile } = require('node:fs/promises');
const path = require('node:path');

async function GetRandNumber() {
    const MAX = 5, MIN = 1;
    //Math.randon() * (MAX - MIN) + MIN
    return Math.round(Math.random() * (MAX - MIN) + MIN);
}

async function Crate(n){
        if(!existsSync(path.join(__dirname,'files')))
         await mkdir(path.join(__dirname,'files'));

       await appendFile(path.join(__dirname, 'files', `file${n}.txt`), `hello world ${n}`);
       console.log(`creat${n}`);
}

async function Read(n){
    try {
        let data = await readFile(path.join(__dirname, 'files', `file${n}.txt`));
        return data.toString();
    } catch (err) {
        console.error(err);
    }
}

async function endProgram(){
    let n = GetRandNumber();

    for(let i = 1; i<= 5;i++ ){
        let text = await Read(i);
            console.log(text);
            console.log('**********');
    }
}

module.exports = {Crate,endProgram}