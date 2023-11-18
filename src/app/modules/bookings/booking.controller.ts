import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IBooking } from './booking.interface';
import { BookingService } from './booking.service';

const addBooking = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await BookingService.addBooking(data);

  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service booked successfully !',
    data: result,
  });
});

const getallBookings = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookingService.getallBookings(paginationOptions);

  sendResponse<IBooking[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const getAllBookingByUserId = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const paginationOptions = pick(req.query, paginationFields);

    const result = await BookingService.getAllBookingByUserId(
      userId,
      paginationOptions
    );

    sendResponse<IBooking[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking by user id retrieved successfully !',
      meta: result.meta,
      data: result.data,
    });
  }
);

const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookingService.deleteBooking(id);

  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking deleted successfully !',
    data: result,
  });
});

const bookingAccepts = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookingService.bookingAccepts(id);

  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking accepted successfully !',
    data: result,
  });
});

const getBookingsbyId = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookingService.getBookingsbyId(id);

  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking by id retrieved successfully !',
    data: result,
  });
});



export const BookingController = {
  addBooking,
  getallBookings,
  getAllBookingByUserId,
  deleteBooking,
  bookingAccepts,
  getBookingsbyId,
};
