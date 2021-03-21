import { Schema, model, Document } from "mongoose";

export interface UserInterface extends Document {
  id: string,
  username: string,
  password: string,
  createdAt: Date,
  updatedAt: Date
}

const UserSchema: Schema<UserInterface> = new Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    select: false
  },
}, { timestamps: true });

const User = model<UserInterface>('User', UserSchema);

export { User }
