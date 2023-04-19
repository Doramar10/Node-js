const express= require('express');
const path = require('node:path');
const cors = require('cors');

const PORT = process.env.PORT || 5010;

const server = express();

server.use(express.json());

server.use(cors());

server.get('/',async(req,res)=>{
res.send('Home');
})

server.use('/api/users', require('./routes/users'));

server.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
