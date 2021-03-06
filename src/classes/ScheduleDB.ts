import {
  Schedule,
  ScheduleInterface,
  TimeSlot,
  User
} from '../models';

// classes
import { TimeSlotsDB, Logger } from './';

interface ScheduleDBInterface {
  findAll(): Promise<ScheduleInterface[]>,
  findOne(id: string): Promise<ScheduleInterface | null>
  updateOne(args: { [key: string]: any }): Promise<String>
  deleteOne(id: string): Promise<String>
}

class ScheduleDB implements ScheduleDBInterface {

  private timeSlotsDB = new TimeSlotsDB();
  private log = new Logger();

  /**
   * Finds all schedules
   */
  public findAll = async () => {
    const data = await Schedule.find().populate(
      [
        {
          path: 'timeSlots',
          model: TimeSlot,
          populate: {
            path: 'employees',
            model: User
          }
        },
        {
          path: 'owner',
          model: User
        }
      ]
    )
    this.log.write(JSON.stringify(data));
    return data
  }

  /**
   * Finds one schedule by ID
   */
  public findOne = async (id: string) => (
    await Schedule.findById(id).populate(
      [
        {
          path: 'timeSlots',
          model: TimeSlot,
          populate: {
            path: 'employees',
            model: User
          }
        },
        {
          path: 'owner',
          model: User
        }
      ]
    )
  )

  /**
   * Updates one schedule by ID with given parameters
   */
  public updateOne = async (args: { [key: string]: any }) => {

    const schedule = await Schedule.findByIdAndUpdate(args.id, args, {
      new: true,
      runValidators: true
    });

    if(!schedule){
      return 'No schedule found for given ID.'
    }
    return 'The schedule has been successfully updated.'

  }

  /**
   * Deletes one schedule by ID
   * Also utilizes TimeSlotsDB class to remove existing timeslots
   */
  public deleteOne = async (id: string) => {

    const schedule = await Schedule.findByIdAndDelete(id);

    if(!schedule){
      return 'No schedule found for given ID.'
    }

    if(schedule?.timeSlots){
      this.timeSlotsDB.removeTimeSlots(schedule!.timeSlots)
    }

    return 'The schedule has been successfully deleted.'

  }
}

export { ScheduleDB }
