import mongoose from "mongoose";

const Opinion= mongoose.model('Opinion', new mongoose.Schema({

    opinion:{
        type:Text,
        required: true,
    },
    created_at: Date,
    deleted_at:Date,
},
{ versionKey:false}))

export default Opinion