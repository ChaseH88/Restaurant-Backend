import mongoose from "mongoose";

export interface ScheduleInterface extends mongoose.Document {
  id: string,
  name: string,
  description: string,
  timeSlots: string[],
  owner: string,
  createdAt: Date,
  updatedAt: Date
}

const ScheduleSchema: mongoose.Schema<ScheduleInterface> = new mongoose.Schema({
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

ScheduleSchema.post('deleteOne', async function(next){

  // @ts-ignore
  console.log(this);

  // console.log(this?._conditions?._id);
  // await this.model('Image').deleteMany({
  //   images: this._id
  // });
});

const Schedule = mongoose.model<ScheduleInterface>('Schedule', ScheduleSchema);

export { Schedule }
