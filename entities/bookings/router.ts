import express  from "express";
import { auth } from "../../core/middleware.js";
import { createBooking, listBookings, modifyBooking } from "./controller.js";

const router=express.Router()

router.post("/", auth, async(req, res, next) => {
    try {
        res.json(await createBooking(req))
    } catch(e) {
        next(e)
    } 
});

router.get("/", auth, async(req, res, next) => {
    try {
        res.json(await listBookings(req))
    } catch(e) {
        next(e)
    } 
});

router.put("/:id", auth,async(req,res,next)=>{
    try{
        res.json(await modifyBooking(req))
    }
    catch(e){
        next(e)
    }
})


export default router