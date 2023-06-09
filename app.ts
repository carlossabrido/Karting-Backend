import  confg  from "./core/conf.js";
import  express  from "express";
import userRouter from "./entities/user/router.js";
import bookingsRouter from "./entities/bookings/router.js";
import circuitRouter from "./entities/circuit/router.js";
import mongoose, { ConnectOptions } from "mongoose";
import cors from 'cors'


const mongooseConnection = mongoose.connect(confg.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  
  mongooseConnection
    .then(() => console.log("Mongoose connection ✔"))
    .catch((err) => {
      console.log("Not working ✘", err);
    });

    let corsOptions = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        preflightContinue: false,
        // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
        optionsSuccessStatus: 204
    };


const app=express()
app.use(express.json())
app.use(cors(corsOptions))
app.use('/user',userRouter)
app.use('/bookings',bookingsRouter)
app.use('/circuit',circuitRouter)

app.listen(confg.PORT,()=>console.log(`server up on port ${confg.PORT} ✔`))