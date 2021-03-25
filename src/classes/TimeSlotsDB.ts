import {
  TimeSlot,
  // TimeSlotInterface
} from '../models';
import { DatabaseHelpers } from './DatabaseHelpers';

interface TimeSlotsDBInterface {
  removeTimeSlots(timeSlots: string[]): Promise<void>
}

class TimeSlotsDB extends DatabaseHelpers implements TimeSlotsDBInterface {

  /**
   * Handles the removal of timeslots.
   * Mainly used by the ScheduleDB class when a schedule is removed.
   * @param timeSlots - Array of IDs to be removed
   */
  public removeTimeSlots = async (timeSlots: string[]) => {
    await this.removeArray(TimeSlot, timeSlots);
  }

}

export { TimeSlotsDB }
