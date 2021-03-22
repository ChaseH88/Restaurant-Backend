import { ScheduleDB } from '../classes';

const scheduleResolvers = {

  allSchedules: async () => (
    await new ScheduleDB().findAll()
  ),

  findSchedule: async (_: any, args: { id: string }) => (
    await new ScheduleDB().findOne(args?.id)
  ),

}

export { scheduleResolvers }
