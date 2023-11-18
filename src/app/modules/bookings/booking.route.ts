import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';

const router = express.Router();

router.post(
  '/',
  BookingController.addBooking
);

router.get(
  '/',
  BookingController.getallBookings
);

router.get('/:id', BookingController.getBookingsbyId);

router.get(
  '/user/:userId',
  BookingController.getAllBookingByUserId
);

router.delete(
  '/:id',
  BookingController.deleteBooking
);

router.patch(
  '/status/:id',
  BookingController.bookingAccepts
);

export const BookingRoutes = router;
