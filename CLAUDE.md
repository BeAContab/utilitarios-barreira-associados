# utilitarios-barreira-associados

Site estático que centraliza os utilitários internos da Barreira & Associados (Consultoria Contábil e Jurídica): links para as ferramentas web da casa e para os pacotes de automação hospedados no Google Drive.

## Estrutura
- `index.html` — marcação e conteúdo da página.
- `style.css` — identidade visual (tokens de cor/tipografia derivados do `logo.png`).
- `data.js` — dados de ferramentas e automações (fonte: `links_sites.xlsx` e `links_download.xlsx`).
- `script.js` — renderiza as listas a partir de `data.js`.
- `logo.png` — marca da empresa.
- `links_sites.xlsx` / `links_download.xlsx` — planilhas de origem; atualizar `data.js` manualmente quando mudarem.
- `.claude/launch.json` — servidor estático local (`python -m http.server 5510`) para pré-visualização no Browser pane.

## Convenções deste projeto
- Sem framework/bundler: HTML/CSS/JS puros, sem dependências de build.
- Ao adicionar/remover um utilitário, editar `data.js` (não hardcode no HTML).
- Deploy segue o mesmo padrão dos outros utilitários da empresa (Vercel), listados em `links_sites.xlsx`.
- **Fluxo de git**: a partir de 2026-09-22, mudanças não vão mais direto para `main`. Para cada alteração: criar branch, commitar, abrir PR no GitHub, dar merge e só então fazer push (o merge do PR já resulta no push de `main`). Não commitar direto em `main`.

## Regras globais (herdadas de `~/.claude/CLAUDE.md`)
- Responder sempre em português (pt-BR).
- Registrar toda alteração de código no `CHANGELOG.md` (data + versionamento semântico).
- Este `CLAUDE.md` deve ser mantido atualizado junto com a estrutura do projeto.
