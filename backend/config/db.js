import mongoose from "mongoose";


export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://dilshankmc91:Kmcd2344316@cluster0.pdmk9.mongodb.net/Food_Del').then(()=>console.log("DB Connected"));


}