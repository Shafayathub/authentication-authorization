import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userLoginValidations } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post(
  '/login',
  validateRequest(userLoginValidations.userLoginValidationSchema),
  AuthControllers.userLogin,
);

export const AuthRoutes = router;
