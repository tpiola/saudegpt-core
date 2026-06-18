// AI Tutor — OmniRoute + Gemini integration

export interface TutorMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface TutorSession {
  id: string
  courseId: string
  userId: string
  messages: TutorMessage[]
  context?: Record<string, unknown>
}

export interface OmniRouteConfig {
  model: 'gemini-pro' | 'gemini-ultra'
  temperature: number
  maxTokens: number
  courseContext: string
}
