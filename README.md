# Portal Psicológico — Beatriz Chagas

Landing page agregadora de links da psicóloga **Beatriz Chagas** (CRP 02/31234), no estilo "link na bio": um único endereço que reúne WhatsApp, Instagram e a localização do consultório.

## Stack

- **React 18** + **Vite 5** + **Tailwind CSS 3**
- Site 100% estático — sem backend, sem banco, sem variáveis de ambiente

## Como rodar localmente

```bash
npm install
npm run dev
# abre em http://localhost:5173
```

## Build de produção

```bash
npm run build
# saída em dist/
```

## Deploy na Vercel

1. **Add New → Project → Import** o repositório `Portal-Psicologico`
2. A Vercel detecta o Vite automaticamente (Framework Preset: **Vite**, Build: `npm run build`, Output: `dist`)
3. Clicar em **Deploy** — sem variáveis de ambiente

## Manutenção

Tudo que muda com frequência está em [src/App.jsx](src/App.jsx):

- **Objeto `LINKS`** (topo do arquivo): URLs do WhatsApp, Instagram e Google Maps
- **Bloco `<address>`**: endereço do consultório
- **Imagens**: substituir `src/assets/perfil.jpg` ou `src/assets/logo.png` mantendo os nomes

### Links configurados

- **WhatsApp:** wa.me com mensagem pré-preenchida (extraído do PDF original)
- **Instagram:** [@psi_beatrizchagassilva](https://www.instagram.com/psi_beatrizchagassilva)
- **Endereço:** Rua Barão de São Borja, 62 — Sala 105, Ed. Sigma Center, Boa Vista, Recife ([Google Maps](https://maps.app.goo.gl/WVTNaf5tJ3aDy8jp6))

## Identidade visual

Derivada do logotipo (coruja + lua crescente sobre caramelo):

- **Paleta:** caramelo `#8B6946`, champanhe `#EAD2A8`, creme `#F6ECDC`, cacau `#3E2E1D`
- **Tipografia:** Cormorant Garamond (nome) + Jost (botões e legendas)
- **Detalhes:** arco crescente com estrelas ao redor da foto, grão sutil no fundo, animação de entrada em cascata, `prefers-reduced-motion` respeitado
