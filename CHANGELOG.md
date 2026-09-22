# Changelog

Todas as alterações notáveis deste projeto são documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/) e versionamento semântico.

## [1.0.1] - 2026-09-22

### Alterado
- Links de "Ferramentas web" agora abrem em uma nova janela do navegador (`window.open` com dimensões fixas) em vez de nova aba; pacotes de automação continuam abrindo em nova aba.

## [1.0.0] - 2026-09-22

### Adicionado
- Site estático (`index.html`, `style.css`, `script.js`, `data.js`) para a Central de Utilitários da Barreira & Associados.
- Identidade visual derivada do logo da empresa (paleta azul-acinzentado/âmbar, tipografia Space Grotesk + IBM Plex Serif/Mono + Caveat).
- Índice em formato "ledger" com duas colunas: Ferramentas Web (5 itens, extraídos de `links_sites.xlsx`) e Pacotes de Automação (4 itens, extraídos de `links_download.xlsx`).
- Elemento de assinatura visual: divisor de triângulos intercalados (navy/âmbar) ecoando a marca do logo.
- Layout responsivo (desktop → colunas lado a lado; mobile → empilhado), foco de teclado visível e `prefers-reduced-motion` respeitado.
- `.claude/launch.json` com servidor estático local (`python -m http.server`) para pré-visualização em desenvolvimento.
