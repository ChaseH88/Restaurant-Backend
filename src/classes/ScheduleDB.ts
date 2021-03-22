import {
  Schedule,
  ScheduleInterface,
  TimeSlot,
  User
} from '../models';

interface ScheduleDBInterface {
  findAll(): Promise<ScheduleInterface[]>,
  findOne(id: string): Promise<ScheduleInterface | null>
}

class ScheduleDB implements ScheduleDBInterface {

  /**
   * Finds all schedules
   */
  public findAll = async () => (
    await Schedule.find().populate(
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
}

export { ScheduleDB }
