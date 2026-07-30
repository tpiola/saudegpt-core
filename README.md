# SaúdeGPT Core — biblioteca experimental

Protótipo de componentes, tipos e serviços compartilháveis do ecossistema SaúdeGPT.

## Estado

Este repositório **não é uma aplicação de produção** e não deve ser conectado à Vercel. O SaúdeGPT oficial está em:

- [`tpiola/saudegpt`](https://github.com/tpiola/saudegpt)

O projeto principal atualmente não importa `@saudegpt/core`. Além disso, este protótipo foi iniciado com Next.js 14 e React 18, enquanto o SaúdeGPT principal utiliza uma stack mais recente.

## Conteúdo preservado

- componentes de interface experimentais;
- tipos para gamificação;
- contratos do tutor de IA;
- tipos de analytics e autenticação.

## Regra de incorporação

Antes de reutilizar qualquer módulo:

1. comparar com a implementação atual do `saudegpt`;
2. migrar somente código realmente necessário;
3. atualizar tipos e dependências;
4. adicionar testes;
5. evitar criar um segundo runtime ou um segundo deploy.

As verticais de Nutrição, Fisioterapia e Psicologia estão documentadas em `saudegpt/docs/VERTICALS.md` e devem compartilhar a aplicação principal.