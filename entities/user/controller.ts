import { error } from "console";
import User from "./model.js";
import bcrypt from "bcrypt"
import config from "../../core/conf.js";
import jwt from "jsonwebtoken";

export const createUser= async (data)=>{
    if(!data.password|| data.password.lengh<5)
    throw new Error("INVALID PASSWORD");
    data.password= await bcrypt.hash(data.password, config.SALT_ROUND);
    data.creted_at= new Date()
    return User.create(data)
}

export const login = async (data)=>{
    const user= await User.findOne({email: data.email, deleted_at: null});
    if(!user) throw new Error ('USER_NOT_FOUND')
    if(!(await bcrypt.compare (data.password, user.password)))
    throw new Error ("USER_NOT_FOUND");
    const token= jwt.sign({ id: user._id, name: user.name, role: user.role },
        config.SECRET,
        {
          expiresIn: "24h",
        }
      );
      return { token };
}