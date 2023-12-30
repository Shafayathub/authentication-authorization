import { RequestHandler } from 'express';
import { CourseServices } from './course.service';
import { JwtPayload } from 'jsonwebtoken';

const createCourse: RequestHandler = async (req, res, next) => {
  const user: JwtPayload = req.user;
  try {
    const result = await CourseServices.createCourseIntoDB(user, req.body);

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllCourses: RequestHandler = async (req, res, next) => {
  try {
    const page: number = Number(req?.query?.page || 1);
    const limit: number = Number(req?.query?.limit || 10);
    const skip: number = Number((page - 1) * limit);
    const total: number = page * limit - skip;
    const result = await CourseServices.getAllCoursesFromDB(req.query);
    res.status(200).json({
      success: true,
      message: 'Courses are retrieved successfully',
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllReviewsWithSingleCourse: RequestHandler = async (
  req,
  res,
  next,
) => {
  const { courseId } = req.params;
  try {
    const result =
      await CourseServices.getAllReviewsWithSingleCourseFromDB(courseId);

    res.status(200).json({
      success: true,
      message: 'Course and Reviews retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getTheBestCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.getTheBestCourseFromDB();

    res.status(200).json({
      success: true,
      message: 'Best course retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSingleCourse: RequestHandler = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const result = await CourseServices.updateSingleCourseIntoDB(
      courseId,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getAllReviewsWithSingleCourse,
  getTheBestCourse,
  updateSingleCourse,
};
