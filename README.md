# Portal Psicológico — Beatriz Chagas

Site profissional da psicóloga **Beatriz Chagas Silva** (CRP 02/31234), com duas páginas:

- **`/`** — site completo, baseado no currículo: apresentação, quem ela atende, modalidades (presencial e online), psicanálise, como funciona, formação e experiência, dúvidas frequentes e contato com mapa
- **`/links`** — o "link na bio" original (WhatsApp, Instagram e como chegar), para usar no Instagram

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

- **Contatos** (WhatsApp, Instagram, Maps, telefone, e-mail): [src/contato.js](src/contato.js), usados pelas duas páginas
- **Textos do site**: [src/App.jsx](src/App.jsx) — listas `PUBLICOS`, `PASSOS`, `FORMACAO`, `EXPERIENCIA` e `DUVIDAS` no topo; demais textos dentro de cada seção
- **Página de links**: [src/Links.jsx](src/Links.jsx) (endereço no bloco `<address>`)
- **Endereço do consultório**: aparece em `App.jsx` (seções Atendimento e Contato) e em `Links.jsx`
- **Imagens**: substituir `src/assets/perfil.jpg` ou `src/assets/logo.png` mantendo os nomes. `coruja.png` (cabeçalho) e `assinatura.png` (seção Sobre) são recortes do `logo.png`

### Divulgação ética (CFP)

O conteúdo segue o art. 20 do Código de Ética Profissional do Psicólogo: nome completo e CRP visíveis, só títulos que ela possui (as pós-graduações aparecem como "pós-graduação", não como "especialista"), sem depoimentos de pacientes, sem preço como propaganda e sem promessa de resultado. Ao editar textos, manter essas regras.

### Links configurados

- **WhatsApp:** wa.me com mensagem pré-preenchida (extraído do PDF original)
- **Instagram:** [@psi_beatrizchagassilva](https://www.instagram.com/psi_beatrizchagassilva)
- **Endereço:** Rua Barão de São Borja, 62 — Sala 105, Ed. Sigma Center, Boa Vista, Recife ([Google Maps](https://maps.app.goo.gl/WVTNaf5tJ3aDy8jp6))

## Identidade visual

Derivada do logotipo (coruja + lua crescente sobre caramelo):

- **Paleta:** caramelo `#8B6946`, champanhe `#EAD2A8`, creme `#F6ECDC`, cacau `#3E2E1D`
- **Tipografia:** Cormorant Garamond (nome) + Jost (botões e legendas)
- **Fundos do site:** papel `#FBF6EE` nas seções claras; cacau nas seções "noturnas" (topo e contato)
- **Detalhes:** no site, a foto fica dentro de uma lua crescente que se desenha ao carregar (como a coruja no logo) e os públicos atendidos usam fases da lua; na página de links, arco crescente com estrelas ao redor da foto. Grão sutil no fundo, `prefers-reduced-motion` respeitado
