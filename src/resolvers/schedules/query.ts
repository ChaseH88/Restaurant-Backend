import { schedule } from './';

const Query = {

  allSchedules: async () => (
    await schedule.findAll()
  ),

  findSchedule: async (_: any, args: { id: string }) => (
    await schedule.findOne(args?.id)
  )

}

export { Query }
