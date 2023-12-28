import { Category } from './catagory.model';
import { TCategory } from './category.interface';

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const result = await Category.find();
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
