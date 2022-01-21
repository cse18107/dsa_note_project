const Item = require('../models/itemModel');

exports.getAllItems = async (req,res,next) => {
    try{
        const items = await Item.find();
        res.status(200).json({
            status:'success',
            message:{
                items
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:{
                err
            }
        })
    }
};

exports.getItem = async(req,res,next) => {
    try{
        const id = req.params.id;
        console.log(id);
        const item = await Item.findById(id);
        res.status(200).json({
            status:'success',
            message:{
                item
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:{
                err
            }
        });
    }
}

exports.putItem = async(req,res,next) =>{
    try{
        const body = req.body;
        const item = await Item.create(body);
        console.log(body);
        res.status(200).json({
            status:'success',
            message:{
                body
            }
        });
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:{
                err
            }
        })
    }
}

exports.editItem = async (req,res,next) =>{
    try{
        const item = await Item.findByIdAndUpdate(req,params.id,req.body);
        res.status(200).json({
            status:'success',
            message:{
                item
            }
        });
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:{
                err
            }
        })
    }
};

exports.deleteItem = async (req,res,next) =>{
    try{
        const item = await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"success",
            message:{
                item
            }
        })
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:{
                err
            }
        })
    }
};