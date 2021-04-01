import { Document, Schema, model } from "mongoose";

export interface ScheduleInterface extends Document {
  id: string,
  name: string,
  description: string,
  timeSlots: string[],
  owner: string,
  createdAt: Date,
  updatedAt: Date
}

const ScheduleSchema: Schema<ScheduleInterface> = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  timeSlots: [{
    type: 'ObjectId',
    ref: "TimeSlot"
  }],
  owner: {
    type: 'ObjectId',
    ref: "User"
  }
}, { timestamps: true });

const Schedule = model<ScheduleInterface>('Schedule', ScheduleSchema);

export { Schedule }
