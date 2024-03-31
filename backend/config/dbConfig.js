const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const connection=mongoose.connection;

connection.on("error",()=>{
    console.log("Error occured while connecting to database");
})

connection.on("connected",()=>{
    console.log("Database connected successfully");
})

module.exports=connection;