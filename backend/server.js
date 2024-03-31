const express=require('express');
const app=express();
require("dotenv").config();
const cors=require("cors");

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST","GET","PATCH","DELETE","PUT"],
      credentials: true,
    })
  );

const connection=require('./config/dbConfig');
const portfolioRoute=require('./routes/portfolioRoute');

const PORT=process.env.PORT || 5000;


app.use(express.json());
app.use('/api/portfolio',portfolioRoute);



app.listen(PORT,()=>{console.log(`Server is listening on Port ${PORT}`)});

