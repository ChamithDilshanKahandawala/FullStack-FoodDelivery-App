import express from "express"
import cors from "cors"

//app config
const app = express()
const port = 4000

//middlerare
app.use(express.json())
app.use(cors())

