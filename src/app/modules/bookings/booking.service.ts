import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';

const addBooking = async (data: IBooking): Promise<IBooking> => {
  const result = await Booking.create(data);

  return result;
};

const getallBookings = async (
  paginationOptions: IPaginationOptions
) => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const result = await Booking.find()
    .populate('userId')
    .populate('serviceId')
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Booking.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getAllBookingByUserId = async (
  id: string,
  paginationOptions: IPaginationOptions
) => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const result = await Booking.find({ userId: id })
    .populate('userId')
    .populate('serviceId')
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Booking.countDocuments({ userId: id });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const updateBooking = async (
  id: string,
  data: IBooking
): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, data, { new: true });

  return result;
};

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndDelete(id);

  return result;
};

const bookingAccepts = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(
    id,
    {
      $set: {
        status: true,
      },
    },
    { new: true }
  );

  return result;
};

const getBookingsbyId = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id)
    .populate('userId')
    .populate('serviceId')
    .lean();

  return result;
};

export const BookingService = {
  addBooking,
  getallBookings,
  getAllBookingByUserId,
  updateBooking,
  deleteBooking,
  bookingAccepts,
  getBookingsbyId,
};
