import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceControllers } from './service.controller';
import { ServiceValidations } from './service.validation';

const router = express.Router();

router.post(
  '/',
  // validateRequest(ServiceValidations.addServiceSchema),
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceControllers.createService
);

router.patch(
  '/:id',
  // validateRequest(ServiceValidations.updateServiceSchema),
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceControllers.updateService
);

router.get('/:id', ServiceControllers.getSingleService)

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceControllers.deleteService
);

router.get('/', ServiceControllers.getAllService);

export const ServiceRoutes = router;
