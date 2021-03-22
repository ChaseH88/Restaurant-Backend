import { ScheduleDB } from './classes';

export default {
  Query: {

    allSchedules: async () => (
      await new ScheduleDB().findAll()
    ),

    findSchedule: async (_: any, args: { id: string }) => (
      await new ScheduleDB().findOne(args.id)
    ),

  }
}