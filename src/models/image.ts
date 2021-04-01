import { Document, Schema, model } from "mongoose";

export interface ImageInterface extends Document {
  id: string,
  name: string,
  description: string,
  path: string,
  owner: string,
  createdAt: Date,
  updatedAt: Date
}

const ImageSchema: Schema<ImageInterface> = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name.']
  },
  description: {
    type: String,
    required: [true, 'Please enter a description.']
  },
  path: {
    type: String,
    required: [true, 'Please enter a path.']
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

const Image = model<ImageInterface>('Image', ImageSchema);

export { Image }
