import mongoose from "mongoose";

export interface UserInterface extends mongoose.Document {
  id: string,
  username: string,
  password: string,
  title: string,
  role: string,
  biography: string,
  email: string,
  firstName: string,
  middleName: string,
  lastName: string,
  location: string,
  createdAt: Date,
  updatedAt: Date
}

const UserSchema: mongoose.Schema<UserInterface> = new mongoose.Schema({
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
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Title"
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
  },
  biography: {
    type: String
  },
  email: {
    type: String,
    required: [true, "Please enter an email address."],
    unique: true
  },
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location"
  },
}, { timestamps: true });

const User = mongoose.model<UserInterface>('User', UserSchema);

export { User }
