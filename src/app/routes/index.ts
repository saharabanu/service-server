import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRoutes } from '../modules/service/service.route';
import { UserRoutes } from '../modules/user/user.route';
import { BookingRoutes } from '../modules/bookings/booking.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/services',
    routes: ServiceRoutes,
  },
  {
    path: '/booking',
    routes: BookingRoutes,
  },
];


moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;

