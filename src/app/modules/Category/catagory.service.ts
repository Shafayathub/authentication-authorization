import { JwtPayload } from 'jsonwebtoken';
import { Category } from './catagory.model';
import { TCategory } from './category.interface';

const createCategoryIntoDB = async (user: JwtPayload, payload: TCategory) => {
  const { _id } = user;
  const newCategory = { createdBy: _id, ...payload };
  const result = await Category.create(newCategory);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const result = await Category.find().populate('createdBy');
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
