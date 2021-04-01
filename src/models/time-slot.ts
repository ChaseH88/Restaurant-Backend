import { Document, Schema, model } from "mongoose";

export interface TimeSlotInterface extends Document {
  id: string,
  startTime: Date,
  endTime: Date,
  description: string,
  employees: any[],
  createdBy: string,
  createdAt: Date,
  updatedAt: Date
}

const TimeSlotSchema: Schema<TimeSlotInterface> = new Schema({
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  description: {
    type: String
  },
  employees: [{
    type: 'ObjectId',
    ref: "User"
  }],
  createdBy: {
    type: 'ObjectId',
    ref: "User"
  }
}, { timestamps: true });

const TimeSlot = model<TimeSlotInterface>('TimeSlot', TimeSlotSchema);

export { TimeSlot }
