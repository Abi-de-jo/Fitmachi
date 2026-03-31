// ─── USER ────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  role: 'user' | 'trainer' | 'admin';
  profile: UserProfile;
  createdAt: string;
}

export interface UserProfile {
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number;       // cm
  weight: number;       // kg
  targetWeight: number;
  bodyType: 'ectomorph' | 'mesomorph' | 'endomorph';
  goal: 'lose_fat' | 'build_muscle' | 'maintain' | 'athletic';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  bmr?: number;
  tdee?: number;
  bodyFat?: number;
  bodyAge?: number;
}

// ─── FOOD ────────────────────────────────────────
export interface FoodItem {
  id: string;
  name: string;
  nameTamil?: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  servingSize: number;   // grams
  servingUnit: string;   // 'piece', 'cup', 'bowl'
  category: FoodCategory;
  isHomeMade: boolean;
  image?: string;
}

export type FoodCategory =
  | 'breakfast'
  | 'rice_dishes'
  | 'curries'
  | 'snacks'
  | 'sweets'
  | 'beverages'
  | 'street_food'
  | 'festival_food'
  | 'proteins';

export interface FoodLog {
  id: string;
  userId: string;
  foodItem: FoodItem;
  quantity: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  loggedAt: string;
  calories: number;
}

// ─── WORKOUT ─────────────────────────────────────
export interface Exercise {
  id: string;
  name: string;
  nameTamil?: string;
  muscleGroup: string;
  equipment: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  videoUrl?: string;
  instructions: string;
  instructionsTamil?: string;
}

export interface WorkoutSet {
  reps: number;
  weight: number;
  completed: boolean;
}

export interface WorkoutLog {
  id: string;
  userId: string;
  exerciseId: string;
  sets: WorkoutSet[];
  notes?: string;
  loggedAt: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  trainerId?: string;
  days: WorkoutDay[];
  goal: string;
  durationWeeks: number;
}

export interface WorkoutDay {
  day: number;
  name: string;
  exercises: PlanExercise[];
  isRestDay: boolean;
}

export interface PlanExercise {
  exercise: Exercise;
  sets: number;
  reps: string;   // '8-12' or '10'
  restSeconds: number;
}

// ─── TRAINER ─────────────────────────────────────
export interface Trainer {
  id: string;
  userId: string;
  bio: string;
  specialization: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  clientCount: number;
  monthlyFee: number;
  isVerified: boolean;
  trustScore: number;
}

// ─── API ─────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// ─── NAVIGATION ──────────────────────────────────
export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
  FoodDetail: { foodId: string };
  WorkoutDetail: { workoutId: string };
  TrainerProfile: { trainerId: string };
  ExerciseDetail: { exerciseId: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Food: undefined;
  Workout: undefined;
  Community: undefined;
  Profile: undefined;
};