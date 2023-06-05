import { error } from "console";
import User from "./model.js";
import bcrypt from "bcrypt"
import config from "../../core/conf.js";

export const createUser= async (data)=>{
    if(!data.password|| data.password.lengh<5)
    throw new Error("INVALID PASSWORD");
    data.password= await bcrypt.hash(data.password, config.SALT_ROUND);
    data.creted_at= new Date()
    return User.create(data)
}