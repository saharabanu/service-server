import { Schema, model } from 'mongoose';
import { IService, IWeeklySchedule } from './service.interface';

const weeklyScheduleSchema = new Schema<IWeeklySchedule>({
  days: [
    {
      type: String,
      enum: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
  ],
  seats: {
    type: Number,
    default: 0,
  },
  enrolled: {
    type: Number,
    default: 0,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  classtime: {
    type: String,
    required: true,
  },
});

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
