import { ScheduleDB } from '../../classes';

const schedule = new ScheduleDB();

const Mutation = {

  updateSchedule: async (_: any, args: { [key: string]: any }) => (
    await schedule.updateOne(args)
  ),

  deleteSchedule: async (_: any, args: { id: string }) => (
    await schedule.deleteOne(args?.id)
  )

}

export { Mutation }
