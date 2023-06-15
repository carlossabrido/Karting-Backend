import mongoose from "mongoose";

const Opinion= mongoose.model('Opinion', new mongoose.Schema({
    tittle:{
        type:String,
        required: true,
        
    },

    opinion:{
        type:String,
        required: true,
        
    },

    
    created_at: Date,
    deleted_at:Date,
},
{ versionKey:false}))

export default Opinion