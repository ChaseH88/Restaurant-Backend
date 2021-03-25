import { Model } from 'mongoose';

interface DatabaseHelpersInterface {
  removeArray(mode: any, timeSlots: any[]): Promise<any>
}

class DatabaseHelpers implements DatabaseHelpersInterface {

  /**
   * Handles the removal of documents by an array of IDs
   * @param model
   * @param arrOfIds
   */
  public removeArray = async (model: Model<any, any>, arrOfIds: string[]) => (
    await model.deleteMany({
      '_id': {
        '$in': arrOfIds
      }
    })
  );

}

export { DatabaseHelpers }
