const UserRouter = require('express').Router();

let users = [
    {
        id: 1, name: "Apple", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"
    },
    {
        id:2, name: "Banana",img:"https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg"
    },
    {
        id:3,name:"pear",img:"https://st1.foodsd.co.il/Images/Products/large/q8ksBMjU1L.jpg"
    }
]

UserRouter.get('/',async(req,res)=>{
    res.status(200).json(users);
})

UserRouter.get(`/:id`, async(req,res)=>{
    try {
        const {id} = req.params;
        let u = users.find((user) => user.id ==id)
        if(u) 
           res.status(200).json(u);
        else
           res.status(404).json({msg:'user not found'})
    } catch (error) {
        res.status(500).json({error});
    }
})

UserRouter.post('/add', async (req,res) =>{
  try{
    const{ id, name, img} = req.body;
    users.push({id,name,img});
    res.status(200).json(users);
  }catch(error){
    res.status(500).json({error});
  }

})

module.exports= UserRouter;


