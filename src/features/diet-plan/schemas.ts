// models/DietPlan.ts

import { Document } from "mongoose";

export interface Routine {
  name: string;
  sets?: number;
  reps?: number;
  duration?: string;
  description?: string;
  exercises?: string[];
}

export interface Exercise {
  days: string;
  routines: Routine[];
}

export interface WorkoutPlan {
  schedules: string[];
  exercises: Exercise[];
}

export interface Meals {
  name: string;
  food: string[];
}

export interface EatingDiet {
  dailyCalories: number;
  meals: Meals[];
}

export interface DietPlanDocument extends Document {
  userId: string;
  name: string;
  workoutplan: WorkoutPlan;
  dietPlan: EatingDiet;
}
