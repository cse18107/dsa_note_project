const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
    solved:{
        type:Boolean
    },
    docSolution_link:[
        String
    ],
    videoSolution_link:[
        String 
    ],
    solution_link:[
        String
    ]
});

const Item = mongoose.model('Item',ItemSchema);

module.exports = Item;