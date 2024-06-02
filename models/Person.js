const mongoose=require("mongoose");

//Define the Person Schema
 
const personSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum:['chef','owner','manager'],
            required:true
        }
        ,
        mobile:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        adress:{
            type:String,
        },
        salary:{
            type:Number,
            required:true
        }
    }
);
const Person=mongoose.model('Person',personSchema,"people");
module.exports=Person;
// const ArpitaModel = mongoose.model('Arpita', ArpitaSchema, 'ArpitaCollection');

// module.exports = ArpitaModel;