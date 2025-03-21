import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./Routes/foodRouts.js"

//app config
const app = express()
const port = 4000

//middlerare
app.use(express.json())
app.use(cors())

//DB Connection
connectDB();

//Api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started On https://localhost:${port}`)
})
