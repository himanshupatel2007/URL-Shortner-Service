import mongoose from "mongoose";
import { promises } from "node:dns";

export async function connectDatabase(url:string):Promise<void> {
  try {
      await mongoose.connect(url)
        console.log("MongoDB connected successfully")
    
  } catch (error) {
    if(error instanceof Error){
        console.error(error.message)
    }
    else{
        console.error("error",error)
    }
  }
}