import express from 'express';
import { CategoryControllers } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidations } from './catagory.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(categoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory,
);
router.get('/', CategoryControllers.getAllCategories);

export const CategoryRoutes = router;
