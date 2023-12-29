import express from 'express';
import { CategoryControllers } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidations } from './catagory.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../User/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.admin),
  validateRequest(categoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory,
);
router.get(
  '/',
  auth(UserRole.admin, UserRole.user),
  CategoryControllers.getAllCategories,
);

export const CategoryRoutes = router;
