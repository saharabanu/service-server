"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
router.post('/', booking_controller_1.BookingController.addBooking);
router.get('/', booking_controller_1.BookingController.getallBookings);
router.get('/:id', booking_controller_1.BookingController.getBookingsbyId);
router.get('/user/:userId', booking_controller_1.BookingController.getAllBookingByUserId);
router.delete('/:id', booking_controller_1.BookingController.deleteBooking);
router.patch('/status/:id', booking_controller_1.BookingController.bookingAccepts);
exports.BookingRoutes = router;
