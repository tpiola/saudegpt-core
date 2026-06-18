// Gamification Engine — shared across all courses

export interface XPTransaction {
  userId: string
  amount: number
  reason: 'lesson_complete' | 'quiz_pass' | 'streak_day' | 'badge_earned' | 'login'
  courseId: string
  timestamp: Date
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  requiredXP?: number
}

export interface Streak {
  current: number
  longest: number
  lastActive: Date
}

export interface LeaderboardEntry {
  userId: string
  displayName: string
  xp: number
  level: number
  badges: number
}

export function calculateLevel(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1
}

export function xpToNextLevel(xp: number): number {
  const level = calculateLevel(xp)
  return (level * 100) - xp
}

export const DEFAULT_BADGES: Badge[] = [
  { id: 'first_lesson', name: 'Primeira Aula', description: 'Completou sua primeira aula', icon: '🎓', requiredXP: 0 },
  { id: 'streak_7', name: 'Dedicação', description: '7 dias consecutivos de estudo', icon: '🔥', requiredXP: 0 },
  { id: 'streak_30', name: 'Mestre da Consistência', description: '30 dias consecutivos de estudo', icon: '💎', requiredXP: 0 },
  { id: 'xp_1000', name: 'Centurião', description: 'Acumulou 1.000 XP', icon: '⚡', requiredXP: 1000 },
  { id: 'xp_5000', name: 'Lendário', description: 'Acumulou 5.000 XP', icon: '🏆', requiredXP: 5000 },
]
