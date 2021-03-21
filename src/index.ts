import server from './server';
import { Database } from './database';

const db = new Database();
db.start();

server.start(() =>
  console.log('Server is running on http://localhost:4000/')
);
