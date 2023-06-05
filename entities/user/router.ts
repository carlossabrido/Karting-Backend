
import  express  from "express";
import { createUser } from "./controller.js";


const router=express.Router()



router.post('/', async (req,res,next)=>{
    try{
       res.json(await createUser(req.body))
    }
    catch(e){
        next(e)
    }
})

export default router