import { config } from "dotenv-safe";
import  express  from "express";
import userRouter from "./entities/user/router.js";
import bookingsRouter from "./entities/bookings/router.js";
import circuitRouter from "./entities/circuit/router.js";



const app=express()
app.use(express.json())
app.use('/user',userRouter)
app.use('/bookings',bookingsRouter)
app.use('/circuit',circuitRouter)

app.listen(7000,()=>console.log('server up on port ✔' ,7000))