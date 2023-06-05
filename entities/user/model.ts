import mongoose from "mongoose";

const User=mongoose.model("User",
new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        lastname: String,
        email:{
            type:String,
            required: true,
            unique: true
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            enum:['client','admin']
        },
        phone_number:{
            type:Number,
            required:true,
            unique:true
        },
        created_at:Date,
        Updated_at:Date,
        deleted_at:Date,
    },
    {versionKey: false}
)
)

export default User