import mongoose, { Schema, Document } from "mongoose";

export interface IntUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IntUser> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
  },
},{
    timestamps:true
});

const User = mongoose.model<IntUser>("Users",userSchema);
export default User;