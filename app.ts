import { config } from "dotenv-safe";
import  express  from "express";


const app=express()
app.use(express.json())

app.listen(7000,()=>console.log('server up on port ✔' ,7000))