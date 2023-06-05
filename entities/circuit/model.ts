import mongoose from "mongoose";

const Circuit= mongoose.model('Circuit', new mongoose.Schema({

    circuit:{
        type:String,
        required: true,
    },
    created_at: Date,
    deleted_at:Date,
},
{ versionKey:false}))