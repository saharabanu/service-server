import { Types } from "mongoose"
import { IUserProfile } from "../user/user.interface"
import { IService } from "../service/service.interface";

 
 
 export type IBooking = {
    userId: Types.ObjectId | IUserProfile;
    serviceId: Types.ObjectId | IService
    status: boolean; // true = accepted, false = rejected
    address: string;
    payment?: string;
    name:string;
    email:string;
    phonenumber: string;
    startDate: string;
    endDate: string;
 }
