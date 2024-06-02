const mongoose=require("mongoose");
//define the mongodb uri
const mongoURL='mongodb://localhost:27017/myresturant';
//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//get the default connection 
//mongoose maintance default connecion objec representing the mongodb connection
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to mongodb server");
});
db.on('error',()=>{
    console.error("mongodb connection erro",err);
})
db.on('diconnected',()=>{
    console.log("Mongodb diconnected");
});
module.exports=db;