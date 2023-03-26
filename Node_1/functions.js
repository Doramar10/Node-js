const Big = (a,b,c) => {return Math.max(a,b,c)}

const count = (n,str) => {for(let i =0; i< n; i++)
console.log(str);}

const asroni = (num) => {if (Math.floor(num) === num) return 0;
    return num.toString().split(".")[1].length || 0;}


module.exports = { Big , count , asroni }