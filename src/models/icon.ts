import { Document, Schema, model } from "mongoose";

export interface IconInterface extends Document {
  id: string,
  name: string,
  description: string,
  path: string,
  owner: string,
  createdAt: Date,
  updatedAt: Date
}

const IconSchema: Schema<IconInterface> = new Schema({
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

const Icon = model<IconInterface>('Icon', IconSchema);

export { Icon }
