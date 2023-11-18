import { Schema, model } from 'mongoose';
import { IService } from './service.interface';



const serviceSchema = new Schema<IService>(
  {
    title: String,
  address: String,
  country: String,
  category: String,
  price: Number,
  availability: {
    availableRooms: Number,
    checkInTime: String,
    checkOutTime: String,
  },
  contact: String,
  images: [String],
  description: [String],
  reviews: [String],
  roomFacilities: [String],
  hotelsFacilities: [String],
  ratings: {
    averageRating: Number,
    totalReviews: Number,
  },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Service = model<IService>('Service', serviceSchema);
