import  confg  from "./core/conf.js";
import  express  from "express";
import userRouter from "./entities/user/router.js";
import bookingsRouter from "./entities/bookings/router.js";
import circuitRouter from "./entities/circuit/router.js";
import mongoose, { ConnectOptions } from "mongoose";


const mongooseConnection = mongoose.connect(confg.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  
  mongooseConnection
    .then(() => console.log("Mongoose connection ✔"))
    .catch((err) => {
      console.log("Not working ✘", err);
    });


const app=express()
app.use(express.json())
app.use('/user',userRouter)
app.use('/bookings',bookingsRouter)
app.use('/circuit',circuitRouter)

app.listen(confg.PORT,()=>console.log(`server up on port ${confg.PORT} ✔`))