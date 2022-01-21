const express = require('express');
const cors = require('cors');
const itemRouter = require('./routers/itemRouters');
const userRouter = require('./routers/userRouters');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(cors());


const DB="mongodb+srv://cse18107:cse18107@cluster0.kgp1f.mongodb.net/dsa_notes_db?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
    console.log('database is successfully connected');
}).catch((err)=>{
    console.log(err);
})


app.use('/',itemRouter);
app.use('/',userRouter);

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})