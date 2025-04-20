import { Schema, models, model } from "mongoose";
import {
  DietPlanDocument,
  EatingDiet,
  Exercise,
  Meals,
  Routine,
  WorkoutPlan,
} from "../schemas";

const RoutineSchema = new Schema<Routine>(
  {
    name: { type: String, required: true },
    sets: { type: Number },
    reps: { type: Number },
    duration: { type: String },
    description: { type: String },
    exercises: [{ type: String }],
  },
  { _id: false }
);

const ExerciseSchema = new Schema<Exercise>(
  {
    days: { type: String, required: true },
    routines: { type: [RoutineSchema], required: true },
  },
  { _id: false }
);

const WorkoutPlanSchema = new Schema<WorkoutPlan>(
  {
    schedules: { type: [String], required: true },
    exercises: { type: [ExerciseSchema], required: true },
  },
  { _id: false }
);

const mealsSchema = new Schema<Meals>(
  {
    name: { type: String },
    food: {
      type: [String],
    },
  },
  { _id: false }
);

const EatingDietSchema = new Schema<EatingDiet>(
  {
    dailyCalories: {
      type: Number,
      required: true,
    },
    meals: {
      type: [mealsSchema],
    },
  },
  { _id: false }
);

const DietPlanSchema = new Schema<DietPlanDocument>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    workoutplan: { type: WorkoutPlanSchema, required: true },
    dietPlan: {
      type: EatingDietSchema,
      required: true,
    },
  },
  { timestamps: true }
);

export const DietPlan =
  models.DietPlan || model<DietPlanDocument>("DietPlan", DietPlanSchema);
