const express = require('express');
const router = express.Router();
const MenuItem=require('../models/MenuItem');

router.post('/',async (req,res)=>{
    try{
      let data=req.body;
      let newMenuitem=MenuItem(data);
      let response=await newMenuitem.save();
      console.log("menu item saved");
      res.status(201).json(response)
  
  
    }
    catch(err){
      console.log("eror in saving data",error);
      res.status(500).json({"error":"internal error"});
  
    }
  })
  //for taste
  router.get('/:taste',async (req,res)=>{
    try{
     const tasteType=req.params.taste;
     if(tasteType=='Sweet'|| tasteType=='Spicy' || tasteType=='Sour')
     {
        const response=await MenuItem.find({taste:tasteType});
        console.log("taste fetched");
        res.status(201).json(response);
     }
     else
     {
        console.log("no such taste present");
     }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal error"});
    }
  })
  //for getting menu items
  router.get('/',async (req,res)=>{
    try{
      const data= await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"internal error"});
    }
  })
  
  
  module.exports=router;