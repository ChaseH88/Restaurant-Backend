import { Query } from './query';
import { Mutation } from './mutation';
import { ScheduleDB } from '../../classes';

export const schedule = new ScheduleDB();

export default {
  Query,
  Mutation
}
