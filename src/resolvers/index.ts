import { scheduleResolvers } from './schedules';

export default {
  Query: {
    ...scheduleResolvers
  }
}
