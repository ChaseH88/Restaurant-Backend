import { Document, Schema, model } from "mongoose";

export interface TitleInterface extends Document {
  id: string,
  name: string,
  role: string,
  owner: string,
  createdAt: Date,
  updatedAt: Date
}

const TitleSchema: Schema<TitleInterface> = new Schema({
  name: {
    type: String
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role"
  }
}, { timestamps: true });

const Title = model<TitleInterface>('Title', TitleSchema);

export { Title }
