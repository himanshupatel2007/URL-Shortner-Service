import mongoose, { Schema, Document } from "mongoose";

interface clickData {
  date: Date;
  clicks: number;
}
export interface URL extends Document {
  originalURL: string;
  shortId: string;
  createdBy: string;
  clicks: number;
  clickHistory: clickData[];
}

const urlSchema: Schema<URL> = new Schema({
  originalURL: {
    type: String,
    required: [true, "Original Url is required"],
    unique: true,
  },
  shortId: {
    type: String,
    unique: true,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  clickHistory: [
    {
      date: {
        required: true,
        type: Date,
      },
      clicks: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const Url = mongoose.model<URL>("url", urlSchema);
export default Url;
