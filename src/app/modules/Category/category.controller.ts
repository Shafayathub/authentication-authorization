import { NextFunction, RequestHandler } from 'express';
import { CategoryServices } from './catagory.service';
import { JwtPayload } from 'jsonwebtoken';

const createCategory: RequestHandler = async (req, res, next: NextFunction) => {
  const user: JwtPayload = req.user;
  try {
    const result = await CategoryServices.createCategoryIntoDB(user, req.body);

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllCategories: RequestHandler = async (
  req,
  res,
  next: NextFunction,
) => {
  try {
    const result = await CategoryServices.getAllCategoriesFromDB();

    res.status(200).json({
      success: true,
      message: 'Categories retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const CategoryControllers = {
  createCategory,
  getAllCategories,
};
