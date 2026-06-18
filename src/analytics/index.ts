// Analytics & BI — shared metrics layer

export interface CourseMetrics {
  totalStudents: number
  activeStudents: number
  completionRate: number
  averageGrade: number
  totalLessons: number
}

export interface StudentProgress {
  userId: string
  courseId: string
  lessonsCompleted: number
  totalLessons: number
  quizzesPassed: number
  totalQuizzes: number
  averageScore: number
  timeSpent: number
  lastActivity: Date
}
