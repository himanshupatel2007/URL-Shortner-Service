import mongoose,{Schema,Document} from "mongoose";

export interface URL extends Document{
    originalURL:string;
    shortId:string;
    createdBy:string;
    createdAt:string;
}

const urlSchema : Schema<URL> = new Schema({
originalURL:{
    type:String,
    required:[true,"Original Url is required"],
 unique:true,   
},
shortId:{
    type:String,
    unique:true,
    required:true
},
createdBy:{
    type:String,
    required:true,
    
}
})