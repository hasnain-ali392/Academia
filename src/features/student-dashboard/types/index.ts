export type PriorityLevel = 'high' | 'medium' | 'low';

export interface Task {
  id: string;
  title: string;
  priority: PriorityLevel;
  dueText: string;
  isCompleted: boolean;
}

export interface StudentPerformance {
  cumulativeGpa: number;
  deanListStatus: boolean;
  topPercentile: number;
  courses: CourseProgress[];
}

export interface CourseProgress {
  id: string;
  name: string;
  grade: string;
  percentage: number;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export interface StudentDashboardData {
  performance: StudentPerformance;
  tasks: Task[];
  chatHistory: ChatMessage[];
}
