import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

//app config
const app = express()
const port = 4000

//middlerare
app.use(express.json())
app.use(cors())

//DB Connection
connectDB();

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started On https://localhost:${port}`)
})
