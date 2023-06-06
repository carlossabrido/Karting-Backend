import express from "express";
import { createCircuit, deleteCircuit, listCircuit } from "./controller.js";
import { auth } from "../../core/middleware.js";

const router=express.Router()

router.get('/',async(req,res,next)=>{
    try{
        res.json(listCircuit())
    }
    catch(e){
        next(e)
    }
})

router.post('/', auth , async(req,res, next)=>{
        try{
            res.json(createCircuit(req))
        }
        catch(e){
            next(e)
        }

})

router.delete("/:id", auth,  async (req, res, next) => {
    try {
      res.json(await deleteCircuit(req));
    } catch (e) {
      next(e);
    }
  });




export default router