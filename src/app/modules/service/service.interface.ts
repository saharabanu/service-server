import { Types } from 'mongoose';


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



export type IServiceFilters = {
  searchTerm?: string;
  price?: number;
  
}
