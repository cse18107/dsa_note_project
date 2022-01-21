const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is working"
    })
});

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})