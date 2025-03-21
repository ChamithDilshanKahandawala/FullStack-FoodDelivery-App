import express from "express"
import { addFood } from "../Controller/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

//Image StorageEngine

const storage = multer.diskStorage({
    destination:"Uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})

const Uploads =multer({storage:storage})

foodRouter.post("/add",addFood)





export default foodRouter;

