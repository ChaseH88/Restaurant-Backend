import { Model } from 'mongoose';

interface DatabaseHelpersInterface {
  removeArray(mode: any, timeSlots: any[]): Promise<void>
}

class DatabaseHelpers implements DatabaseHelpersInterface {

  /**
   * Handles the removal of documents by an array of IDs
   * @param timeSlots - Array of IDs to be removed
   */
  public removeArray = async (model: Model<any, any>, arrOfIds: string[]) => {
    await model.deleteMany({
      '_id': {
        '$in': arrOfIds
      }
    })
  }

}

export { DatabaseHelpers }
