# SaúdeGPT Core 🧩

Shared library do ecossistema **tpiola** — componentes, serviços e lógica compartilhada entre todos os cursos EAD.

## Módulos

- 🎨 **UI Components** — Design System (Navy + Gold, glassmorphism)
- 🎮 **Gamificação** — XP, badges, streaks, níveis, leaderboard
- 🤖 **AI Tutor** — OmniRoute + Gemini
- 📊 **Analytics & BI** — Métricas e relatórios
- 🔐 **Auth** — Integração com Supabase

## Cursos que utilizam este pacote

- [saudegpt](https://github.com/tpiola/saudegpt) — Farmácia
- [saudegpt-nutricao](https://github.com/tpiola/saudegpt-nutricao) — Nutrição
- [saudegpt-fisioterapia](https://github.com/tpiola/saudegpt-fisioterapia) — Fisioterapia
- [saudegpt-psicologia](https://github.com/tpiola/saudegpt-psicologia) — Psicologia

## Como usar

```bash
pnpm add @saudegpt/core
```

```tsx
import { Button, GlassCard } from '@saudegpt/core'
import { useGamification } from '@saudegpt/core/gamification'
```

## Estrutura

```
src/
  components/   # UI components
  gamification/ # XP, badges, streaks
  ai/           # OmniRoute + Gemini integration
  analytics/    # BI metrics
  auth/         # Supabase helpers
  styles/       # Design tokens
```
