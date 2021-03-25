import mongoose from 'mongoose';

class Database {

  private connection: string = '';
  private username: string   = 'chase123';
  private password: string   = 'chase123';
  private collection: string = 'restaurant-backend';

  constructor(username?: string, password?: string, collection?: string){

    // Update variables if provided
    if(Array.prototype.slice.call(arguments).length){
      this.username = username!;
      this.password = password!;
      this.collection = collection!;
    }

    // Set the connection string
    this.connectionString();

    // Establish the database connection
    (async () => await this.start())();

  }

  // Format the connection string with the local variables
  private connectionString = (): void => {
    this.connection = `mongodb+srv://${this.username}:${this.password}@chaseharrison.h2q0q.mongodb.net/${this.collection}?retryWrites=true&w=majority`
  };

  // Initializes the connection with the database
  public start = async (): Promise<void> => {
    try {
      await mongoose.connect(this.connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      return console.log('Database connection successful!');
    }
    catch(err){
      return console.error(`ERROR: ${err}`)
    }
  }

}

export { Database };
