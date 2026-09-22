# Central de Utilitários — Barreira & Associados

Site estático interno que centraliza os utilitários da Barreira & Associados (Consultoria Contábil e Jurídica): um único endereço para abrir as ferramentas web da casa e baixar os pacotes de automação, em vez de procurar em planilha ou perguntar no grupo.

## O que tem na página

- **Ferramentas web** — aplicativos publicados na Vercel, abrem em nova aba.
- **Pacotes de automação** — pastas do Google Drive com scripts e planilhas prontos para baixar.

O conteúdo das duas listas vem de `data.js`, extraído originalmente de `links_sites.xlsx` e `links_download.xlsx`.

## Rodando localmente

Projeto sem build nem dependências — HTML, CSS e JS puros. Basta um servidor estático (necessário porque o navegador bloqueia `fetch`/módulos abertos via `file://`):

```bash
python -m http.server 5510
```

Depois acesse `http://localhost:5510`. Também há um `.claude/launch.json` já configurado para abrir esse servidor pelo Browser pane do Claude Code.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | marcação e conteúdo da página |
| `style.css` | identidade visual (cores e tipografia derivadas do `logo.png`) |
| `data.js` | dados das ferramentas e automações |
| `script.js` | renderiza as listas a partir de `data.js` |
| `logo.png` | marca da empresa |
| `links_sites.xlsx`, `links_download.xlsx` | planilhas de origem — atualizar `data.js` manualmente quando mudarem |

## Atualizando o conteúdo

Para adicionar, remover ou editar um utilitário, edite os arrays `TOOLS` e `DOWNLOADS` em `data.js` — não edite a lista diretamente no HTML, ela é renderizada por `script.js`.

## Deploy

Segue o mesmo padrão dos demais utilitários da empresa: publicação na Vercel a partir deste repositório.

---

Veja também [CHANGELOG.md](CHANGELOG.md) (histórico de alterações) e [CLAUDE.md](CLAUDE.md) (notas para trabalhar no projeto com Claude Code).
