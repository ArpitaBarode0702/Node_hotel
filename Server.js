// import express from "express";
const express=require("express");
let app=express();

const db = require('./db');
require('dotenv').config();

  const bodyParser = require('body-parser');
app.use(bodyParser.json());
  
  
app.get('/',(req,res)=>{
   
    res.send("welcome to my kitchen")
})
// app.get('/panir',(req,res)=>{
   
//     res.send("ok i will get you panir anything else")
// })
// app.get('/type',(req,res)=>{
//    let panir={
//     type:"sahi panir",
//     price:230
//    }
//     res.send(panir)
// })
//yha hum data base me khuch data bhej rhe hai isliye post
//async isliy eki dtatabase me data bhejne me time lgg skta to hum tb tk data base me save nhi krege jb tk ki pura data a n jaye isliye await

  // const data=req.body;
  // const newPerson=new Person(data);
  // // newPerson.name=data.name;
  // // newPerson.age=data.age;
  // //sari schema ki field aise likh ske iske alawa app person me sidha data pass kr skte hai
  // newPerson.save((error,savedPerson)=>{
  //   if(error){
  //     console.log("error saving person data",error);
  //     res.status(500).json({eror:"internal error"})
  //   }
  //   else{
  //     console.log("data saved success");
  //     res.status(200).json(
  //       savedPerson
  //     )
  //   }
  // })



//for creating  menu items

const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuItem');
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);
app.listen(3001,(req,res)=>{
    console.log("server is live");
});
//if we want to get the info of particular worker like chef or owner so we can do that
