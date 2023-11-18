import { Schema, model } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema<IBooking>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },

    name:{
      type: String, 
      required: true
    },
    email:{
      type: String, 
      required: true
    },
    phonenumber:{
      type: String, 
      required: true
    },
    address:{
      type: String, 
      required: true
    },
    payment:{
      type: String
    },
    status: {
      type: Boolean,
      default: false,
    },
   
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Booking = model<IBooking>('Booking', bookingSchema);
