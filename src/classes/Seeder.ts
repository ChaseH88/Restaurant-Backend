import fs from 'fs';

// Database
import { Database } from './';
import {
  User,
  TimeSlot
} from '../models';

/**
 * Seed your Mongo Database with this convienent class to handle it all behind the scenes.
 * Pass your sample data file name and the corresponding mongoose model to satisfy the
 * requirements.
 * @example npm run seeder
 */
class Seeder {

  private seedInput: any = [
    { jsonFileName: 'users', mongooseModel: User },
    { jsonFileName: 'time-slots', mongooseModel: TimeSlot },
  ];

  /**
   * Fetches the object data in the given sample file.
   * @param fileName
   */
  private getData = async (fileName: string): Promise<object | object[]> => (
    JSON.parse(
      await fs.readFileSync(`${__dirname}/${fileName}.json`) as any,
      'utf-8' as any
    )
  );


  /**
   * Handles the insertion of data.
   * @param fileName
   */
  public importData = async (): Promise<void> => {

    await new Database();

    this.log('Importing JSON data...');

    try {

      for await (const { jsonFileName:json, mongooseModel:model } of this.seedInput){
        const data = await this.getData(json);
        await model.create(data);
      }

      this.log('Successful!');

    }
    catch (err) {
      this.error(err)
    }
    finally {
      this.exit();
    }

  };


  /**
   * Delete all data in the database
   */
  public deleteData = async (): Promise<void> => {

    await new Database();

    try {

      for await (const { mongooseModel:model } of this.seedInput){
        await model.deleteMany({}) as any
      }
      this.log('Database has been cleared.');

    }
    catch (err) {
      this.error(err)
    }
    finally {
      this.exit();
    }
  };


  /**
   * Handles errors within the class.
   */
  private error = async (err: () => any): Promise<void> => {
    console.error(err);
    this.log('Terminating Script');
  }


  /**
   * Handles the termination of the script.
   */
  private exit = async (): Promise<void> => process.exit();


  /**
   * Handles logging
   */
  private log = (text: string): void => console.log(text);

};

(async () => {

  const seed = new Seeder();

  switch (process.argv[2]) {
    case '--add':
      await seed.importData();
      break;
    case '--delete':
      await seed.deleteData();
      break;
    default:
      break;
  }
})();