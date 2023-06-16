import  express  from "express";
import { auth } from "../../core/middleware.js";
import { createOpinion, deleteOpinions, listOpinions } from "./controller.js";
const router=express.Router()

router.post('/',auth,async(req,res,next)=>{
    try{
        res.json(await createOpinion(req))
    }
    catch(e){
        next(e)
    }

})

router.get('/', async(req,res,next)=>{
    try{
        res.json(await listOpinions())
    }
    catch(e){
        next(e)
    }

})
router.delete("/:id", auth,async(req,res,next)=>{
    try{
        res.json(await deleteOpinions(req))
    }
    catch(e){
        next(e)
    }

})




export default router