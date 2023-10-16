import { Types } from 'mongoose';
import { IUserProfile } from '../user/user.interface';

export type IService = {
  title: string;
  address: string;
  country: string;
  category: string;
  price: number;
  availability: {
    availableRooms: number;
    checkInTime: string;
    checkOutTime: string;
  };
  contact: string;
  images: string[];
  description: string[];
  reviews: string[];
  roomFacilities: string[];
  hotelsFacilities: string[];
  ratings: {
    averageRating: number;
    totalReviews: number;
  };
};

export type IWeeklySchedule = {
  days: (
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
  )[];
  seats: number;
  enrolled: number;
  isAvailable: boolean;
  classtime: string;
};

export type IServiceFilters = {
  searchTerm?: string;
  rating?: number;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
}
