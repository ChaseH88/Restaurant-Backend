import { Document, Schema, model } from "mongoose";

export interface LocationInterface extends Document {
  id: string,
  street1: string,
  street2: string,
  unit: string,
  city: string,
  state: string,
  zip: string,
  country: string,
  coordinates: string,
  createdAt: Date,
  updatedAt: Date
}

const LocationSchema: Schema<LocationInterface> = new Schema({
  street1: {
    type: String,
    required: [true, 'Please enter a street.']
  },
  street2: {
    type: String
  },
  unit: {
    type: String
  },
  city: {
    type: String,
    required: [true, 'Please enter a city.']
  },
  state: {
    type: String,
    required: [true, 'Please enter a state.']
  },
  zip: {
    type: String,
    required: [true, 'Please enter a zip code.']
  },
  country: {
    type: String,
    required: [true, 'Please enter a country.']
  },
  coordinates: {
    type: String
  }
}, { timestamps: true });

const Location = model<LocationInterface>('Location', LocationSchema);

export { Location }
