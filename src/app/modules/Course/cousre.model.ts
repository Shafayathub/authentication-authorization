import { Schema, model } from 'mongoose';
import { TCourse, TDetails, TTags } from './course.interface';

const tagsSchema = new Schema<TTags>(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    _id: false,
  },
);

const detailsSchema = new Schema<TDetails>(
  {
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    description: { type: String, required: true },
  },
  {
    _id: false,
  },
);

const courseSchema = new Schema<TCourse>(
  {
    title: { type: String, required: true, unique: true },
    instructor: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    tags: { type: [tagsSchema] },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    language: { type: String, required: true },
    provider: { type: String, required: true },
    durationInWeeks: { type: Number },
    details: { type: detailsSchema, required: true },
  },
  {
    timestamps: true,
  },
);

export const Course = model<TCourse>('Course', courseSchema);
