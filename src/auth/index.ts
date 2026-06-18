// Auth — Supabase integration

export interface UserProfile {
  id: string
  email: string
  name: string
  courseId: string
  role: 'student' | 'instructor' | 'admin'
  avatar?: string
  createdAt: Date
}

export interface CourseAccess {
  userId: string
  courseId: string
  enrolledAt: Date
  expiresAt?: Date
  status: 'active' | 'expired' | 'suspended'
}
