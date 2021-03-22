import mongoose from "mongoose";

export interface TimeSlotInterface extends mongoose.Document {
  id: string,
  startTime: Date,
  endTime: Date,
  description: string,
  employees: any[],
  createdBy: string,
  createdAt: Date,
  updatedAt: Date
}

const TimeSlotSchema: mongoose.Schema<TimeSlotInterface> = new mongoose.Schema({
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

const TimeSlot = mongoose.model<TimeSlotInterface>('TimeSlot', TimeSlotSchema);

export { TimeSlot }
