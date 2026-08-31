export interface TrainingCategory {
  id: string;
  title: string;
  iconName: string;
  emoji: string;
  description: string;
  topicsSample: string[];
}

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type CourseStatus = 'Available' | 'Coming Soon' | 'In Development' | 'Planned';
export type LearningFormat = 
  | 'Online Interactive' 
  | 'Blended Learning' 
  | 'Practical / Shore-Based' 
  | 'Classroom / Simulator' 
  | 'Theory & Scenario Training';

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  description?: string;
  lessons: string[];
}

export interface Course {
  id: string; // Standardized internal ID e.g. MM-JET-001, MM-YM-200
  title: string;
  shortDescription: string;
  description: string; // alias for compatibility
  fullDescription: string;
  category: string;
  categoryId: string;
  subCategory?: string;
  level: CourseLevel;
  status: CourseStatus;
  modulesCount?: number;
  learningFormat: LearningFormat | string;
  image: string;
  learningObjectives: string[];
  prerequisites: string;
  assessmentInfo?: string;
  relatedCourseIds?: string[];
  instructor?: string;
  enrolmentStatus?: string;
  keywords?: string[];
  courseType?: string;
  modules: CourseModule[];
  whatToExpect?: string[];
  targetAudience?: string;
  duration?: string; // Placeholder "Information to be confirmed"
  fee?: string; // Placeholder "Information to be confirmed"
  certification?: string; // Placeholder "Information to be confirmed"
  isFeatured?: boolean;
  isSample?: boolean;
  createdDate?: string;
  sampleOutline?: string[]; // for backward compatibility
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EcosystemStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface RoadmapStage {
  stage: string;
  title: string;
  status: 'Current' | 'Planned' | 'Future';
  description: string;
  iconName: string;
}

export interface FutureFeatureModalState {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  stageName: string;
  description: string;
  plannedHighlights: string[];
}
