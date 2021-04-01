import { Document, Schema, model } from "mongoose";

export interface RoleInterface extends Document {
  id: string,
  name: string,
  description: string,
  accessLevel: number,
  icon: string,
  owner: string,
  createdAt: Date,
  updatedAt: Date
}

const RoleSchema: Schema<RoleInterface> = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a role name.'],
    unique: true
  },
  description: {
    type: String
  },
  accessLevel: {
    type: Number,
    required: [true, 'Please enter an access level.'],
  },
  icon: {
    type: Schema.Types.ObjectId,
    ref: "Icon"
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

const Role = model<RoleInterface>('Role', RoleSchema);

export { Role }
