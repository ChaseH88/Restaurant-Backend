import server from './server';
import { Database } from './classes';

server.start(() => {
  new Database().start();
  console.log('Server is running on http://localhost:4000/')
});
