const express = require('express')

const router = express.Router();

const Post = require('../models/Post')

router.get("/",(req,res)=>{
  res.send('live in posts')
});

router.post("/", async (req,res)=>{
  console.log(req.body)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  
  })


try{
  const savePost = await post.save() 
  console.log(savePost)
  res.json(savePost);
}catch(err) {
    res.json({ message: err })
  }
});




module.exports = router;

