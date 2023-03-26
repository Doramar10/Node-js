

const {Create,ConcatFiles} = require('./functions');

async function Main(){
    await Create(1,"hello world1");
    await Create(2,"hello world2");
    await Create(3,"hello world3");
    await Create(4,"hello world4");
    await Create(5,"hello world5");

    await ConcatFiles();
}

Main();
