# LANDING-PAGE — Guia de Criação: Apresentação do Sistema Vinery

> **Propósito:** Este documento serve como guia completo para a construção de uma landing page estática de apresentação do sistema Vinery para vinícolas. A página não possui funcionalidades de e-commerce — é um material de apresentação visual e institucional para demonstrar as capacidades do sistema durante visitas presenciais às vinícolas parceiras.

---

## Sumário

1. [Identidade Visual](#identidade-visual)
2. [Tipografia](#tipografia)
3. [Componentes Visuais Sugeridos](#componentes-visuais-sugeridos)
4. [Estrutura da Landing Page](#estrutura-da-landing-page)
5. [Funcionalidades do Sistema a Apresentar](#funcionalidades-do-sistema-a-apresentar)
6. [Copy / Texto Sugerido por Seção](#copy--texto-sugerido-por-seção)
7. [Assets Disponíveis](#assets-disponíveis)
8. [Tecnologias Recomendadas](#tecnologias-recomendadas)
9. [Checklist de Entrega](#checklist-de-entrega)

---

## 1. Identidade Visual

### Paleta de Cores Principal

| Nome | Hex | Uso Recomendado |
|------|-----|-----------------|
| **vinery-wine** | `#64132F` | Cor primária da marca — CTAs, headers, destaques |
| **vinery-wine-dark** | `#450B1F` | Fundo escuro do footer, overlays, hover states |
| **vinery-cream** | `#FFEEE0` | Fundo de seções claras, texto sobre fundos escuros |
| **vinery-sage** | `#AAC885` | Badges, acentos, ícones de funcionalidade |
| **vinery-sage-dark** | `#41562B` | Texto sobre fundo sage, variação escura |
| **vinery-mauve** | `#85485E` | Acentos secundários, separadores, micro-detalhes |

### Cores Neutras e de Sistema

| Nome | Valor | Uso |
|------|-------|-----|
| Background claro | `#FFFFFF` | Fundo padrão |
| Texto principal | `#1a1a1a` (quase preto) | Parágrafos, corpo de texto |
| Borda sutil | `#e8e8e8` | Separadores, bordas de card |
| Sombra padrão | `rgba(0,0,0,0.08)` | Elevação de cards |

### Gradientes Sugeridos

```css
/* Overlay hero (como no site original) */
background: linear-gradient(to bottom, rgba(69, 11, 31, 0.75), rgba(69, 11, 31, 0.55));

/* Gradiente de seção */
background: linear-gradient(135deg, #64132F 0%, #85485E 100%);

/* Gradiente suave de separação */
background: linear-gradient(to bottom, #FFFFFF 0%, #FFEEE0 100%);
```

### Raio de Borda

- Padrão: `10px` (0.625rem)
- Cards grandes: `16px` (1rem)
- Botões: `8px` (0.5rem)
- Badges: `999px` (arredondado completo)

---

## 2. Tipografia

### Fontes

| Fonte | Tipo | Uso | Google Fonts |
|-------|------|-----|-------------|
| **Playfair Display** | Serif | Títulos, headings, display | `family=Playfair+Display:wght@400;500;600;700` |
| **Inter** | Sans-serif | Corpo, UI, labels, botões | `family=Inter:wght@400;500;600;700` |

### Import Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Hierarquia Tipográfica

```css
/* Display / Hero */
h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #FFEEE0; /* sobre fundos escuros */
}

/* Títulos de Seção */
h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
  color: #64132F;
}

/* Subtítulos de Card */
h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
}

/* Corpo de Texto */
p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.65;
  color: #4a4a4a;
}

/* Labels e UI */
.label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Eyebrow (texto acima do título) */
.eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #AAC885;
}
```

---

## 3. Componentes Visuais Sugeridos

### Botões

```css
/* Botão Primário */
.btn-primary {
  background: #64132F;
  color: #FFEEE0;
  padding: 14px 32px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background 0.2s ease;
}
.btn-primary:hover { background: #450B1F; }

/* Botão Outline (sobre fundo escuro) */
.btn-outline {
  background: transparent;
  color: #FFEEE0;
  padding: 14px 32px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  border: 2px solid #FFEEE0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-outline:hover {
  background: rgba(255, 238, 224, 0.12);
}

/* Botão Sage (para CTAs secundários) */
.btn-sage {
  background: #AAC885;
  color: #41562B;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s ease;
}
.btn-sage:hover { background: #95b670; }
```

### Cards de Funcionalidade

```css
.feature-card {
  background: #FFFFFF;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(100, 19, 47, 0.12);
}

.feature-card .icon {
  width: 56px;
  height: 56px;
  background: rgba(100, 19, 47, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-card .icon svg {
  color: #64132F;
  width: 28px;
  height: 28px;
}
```

### Badge / Tag

```css
.badge {
  display: inline-block;
  background: rgba(170, 200, 133, 0.2);
  color: #41562B;
  border: 1px solid rgba(170, 200, 133, 0.5);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.04em;
}
```

### Seção com Fundo Wine

```css
.section-wine {
  background: #64132F;
  color: #FFEEE0;
  padding: 80px 0;
}

.section-wine h2 {
  color: #FFEEE0;
  font-family: 'Playfair Display', serif;
}

.section-wine p {
  color: rgba(255, 238, 224, 0.8);
}
```

### Divisor Decorativo

```css
.divider-ornament {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 40px auto;
  max-width: 200px;
}

.divider-ornament::before,
.divider-ornament::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #64132F;
  opacity: 0.3;
}

.divider-ornament .ornament {
  width: 8px;
  height: 8px;
  background: #64132F;
  border-radius: 50%;
  opacity: 0.5;
}
```

---

## 4. Estrutura da Landing Page

### Layout Geral

```
┌─────────────────────────────────────────┐
│  NAVBAR (logo + âncoras de navegação)   │
├─────────────────────────────────────────┤
│  HERO — Chamada principal + CTA         │
├─────────────────────────────────────────┤
│  SOBRE O SISTEMA — Intro institucional  │
├─────────────────────────────────────────┤
│  PARA VINÍCOLAS — Proposta de valor     │
├─────────────────────────────────────────┤
│  FUNCIONALIDADES — Cards com features   │
├─────────────────────────────────────────┤
│  PAINEL ADMIN — Mockup/screenshot       │
├─────────────────────────────────────────┤
│  PORTAL DA CASA — Painel da vinícola    │
├─────────────────────────────────────────┤
│  JORNADA DO CLIENTE — Fluxo visual      │
├─────────────────────────────────────────┤
│  SOMMELIER IA — Feature de destaque     │
├─────────────────────────────────────────┤
│  CTA FINAL — Contato / interesse        │
├─────────────────────────────────────────┤
│  FOOTER                                 │
└─────────────────────────────────────────┘
```

---

### Seção 1: Navbar

**Comportamento:** Fixa no topo, fundo `#450B1F`, opacidade sutil em scroll.

**Elementos:**
- Logo SVG (`logo-vinery.svg`) à esquerda
- Links de âncora à direita: `Funcionalidades`, `Para Vinícolas`, `Contato`
- Botão CTA: "Solicitar Demonstração" (btn-outline)

**Mobile:** Hamburger menu → dropdown simples

---

### Seção 2: Hero

**Layout:** Full-viewport-height, imagem de fundo com overlay escuro wine.

**Imagem sugerida:** Foto de vinhedo ou adega com qualidade alta (Unsplash: `photo-1510812431401-41d2bd2722f3`)

**Elementos:**
- Eyebrow label: "Sistema de Gestão para Vinícolas"
- Título H1 (Playfair Display): Principal chamada da marca
- Subtítulo (Inter): Breve descrição em uma linha
- Dois botões: CTA primário + CTA secundário
- Scroll indicator animado na base

---

### Seção 3: Sobre o Sistema

**Layout:** 2 colunas — texto à esquerda, números/stats à direita.

**Background:** `#FFEEE0` (cream)

**Elementos:**
- Eyebrow: "O que é o Vinery"
- Título H2 (Playfair Display)
- 2-3 parágrafos descritivos
- Stats visuais: 3 métricas com números em destaque (wine-colored)

**Stats sugeridas:**
- `3 perfis` — Administrador, Vinícola, Consumidor
- `100%` — Digital e sem papel
- `Tempo real` — Pedidos e estoque atualizados ao vivo

---

### Seção 4: Para Vinícolas — Proposta de Valor

**Layout:** Full-width, fundo `#64132F` (wine), texto cream.

**Elementos:**
- Eyebrow: "Feito para sua vinícola"
- Título H2 branco
- Grid 3 colunas com ícones + benefícios curtos
- Botão outline cream: "Ver Funcionalidades"

**Benefícios:**
1. Seu catálogo de vinhos online, com fotos e descrições
2. Acompanhamento de pedidos em tempo real
3. Painel exclusivo para gerenciar seus produtos
4. Visibilidade para consumidores de todo o Brasil

---

### Seção 5: Funcionalidades do Sistema

**Layout:** Grid de cards, 3 colunas desktop / 1 coluna mobile.

**Background:** Branco com separadores sutis.

**Elementos:**
- Eyebrow: "O que o sistema oferece"
- Título H2 wine
- 9 cards de funcionalidade (ver seção 5 deste doc)
- Cada card: ícone SVG + título + descrição curta

---

### Seção 6: Painel Administrativo

**Layout:** Split screen — texto à esquerda, mockup/screenshot à direita.

**Background:** `#FFEEE0` (cream)

**Elementos:**
- Eyebrow: "Para o Administrador"
- Título H2
- Lista de bullet points com funcionalidades admin
- Screenshot ou mockup do dashboard admin com shadow e rounded border
- Botão: "Ver Demo"

---

### Seção 7: Portal da Vinícola

**Layout:** Split screen invertido — mockup à esquerda, texto à direita.

**Background:** Branco

**Elementos:**
- Eyebrow: "Para a Vinícola Parceira"
- Título H2
- Lista de funcionalidades do painel casa
- Screenshot do painel `/casa/painel`
- Destaque visual diferente do admin

---

### Seção 8: Jornada do Consumidor

**Layout:** Timeline horizontal (desktop) / vertical (mobile) com 5 etapas.

**Background:** Gradiente suave cream → branco

**Etapas:**
1. Acessa o catálogo de vinhos
2. Descobre com o Sommelier IA
3. Adiciona ao carrinho
4. Finaliza com pagamento PIX
5. Recebe e avalia

---

### Seção 9: Sommelier IA — Destaque

**Layout:** Full-width, fundo gradiente wine → wine-dark.

**Elementos:**
- Badge: "Inteligência Artificial"
- Título H2 cream (Playfair Display)
- Descrição do Sommelier
- Mockup do chat widget flutuante
- CTA outline

---

### Seção 10: CTA Final — Contato

**Layout:** Centralizado, fundo cream.

**Elementos:**
- Título H2: Chamada de ação
- Subtítulo
- Formulário simples: Nome, E-mail da vinícola, Mensagem (pode ser `mailto:`)
- Botão primário grande

---

### Footer

**Layout:** 3 colunas — identidade, links rápidos, contato.

**Background:** `#450B1F` (wine-dark), texto cream.

**Elementos:**
- Logo branca
- Tagline da marca
- Links: Funcionalidades, Para Vinícolas, Contato
- E-mail: `parcerias@vinery.com.br`
- Aviso legal: "Venda proibida para menores de 18 anos"
- Copyright: `© 2025 Vinery. Todos os direitos reservados.`

---

## 5. Funcionalidades do Sistema a Apresentar

### Para o Administrador da Plataforma

| # | Funcionalidade | Descrição |
|---|---------------|-----------|
| 1 | **Dashboard Executivo** | Painel com KPIs em tempo real — pedidos do dia, receita, vinhos mais vendidos e visão geral do negócio |
| 2 | **Gestão de Vinhos** | Cadastro completo de vinhos com fotos, descrições, uva, safra, país de origem, preço e estoque |
| 3 | **Controle de Estoque** | Acompanhamento em tempo real da quantidade disponível de cada vinho, com alertas de baixo estoque |
| 4 | **Gerenciamento de Pedidos** | Visão completa de todos os pedidos — status, pagamento, entrega e histórico do cliente |
| 5 | **Gestão de Vinícolas** | Cadastro e gerenciamento das casas produtoras parceiras com seus respectivos portfólios |
| 6 | **Cupons e Descontos** | Criação e controle de cupons promocionais com regras de uso, validade e desconto |
| 7 | **Gestão de Usuários** | Controle de todos os clientes cadastrados na plataforma, histórico e permissões |
| 8 | **Categorias e Uvas** | Organização do catálogo por categorias (tinto, branco, rosé, espumante) e variedades de uva |

### Para a Vinícola Parceira

| # | Funcionalidade | Descrição |
|---|---------------|-----------|
| 9 | **Painel da Casa** | Dashboard exclusivo para a vinícola acompanhar seus próprios vinhos e pedidos |
| 10 | **Catálogo Próprio** | Gestão do portfólio de vinhos da casa — adicionar, editar e desativar produtos |
| 11 | **Configurações da Casa** | Edição de informações institucionais, foto e descrição da vinícola na plataforma |

### Para o Consumidor Final

| # | Funcionalidade | Descrição |
|---|---------------|-----------|
| 12 | **Catálogo Completo** | Exploração do catálogo com filtros por categoria, preço, país e ordenação |
| 13 | **Sommelier IA** | Recomendações personalizadas de vinhos por inteligência artificial baseadas nas preferências do cliente |
| 14 | **Página de Vinícolas** | Descoberta das casas produtoras com histórico e portfólio completo |
| 15 | **Carrinho de Compras** | Gerenciamento de itens, quantidades e visualização do total com persistência de sessão |
| 16 | **Checkout com PIX** | Finalização de compra segura com geração de QR Code PIX |
| 17 | **Área do Cliente** | Histórico de pedidos, endereços salvos, avaliações de vinhos e preferências pessoais |
| 18 | **Sistema de Avaliações** | Reviews e ratings de vinhos comprados — constrói confiança e ajuda outros consumidores |
| 19 | **Busca Global** | Pesquisa rápida por nome de vinho, vinícola, uva ou categoria |
| 20 | **Perfil de Preferências** | Cadastro de preferências pessoais (tipos de uva, regiões, estilos) para o Sommelier IA |

---

## 6. Copy / Texto Sugerido por Seção

### Navbar

```
Logo: Vinery
Links: Funcionalidades | Para Vinícolas | Contato
CTA: Solicitar Demonstração
```

### Hero

```
Eyebrow: Sistema de Gestão para Vinícolas
Título: Leve os seus vinhos ao mundo com tecnologia de ponta
Subtítulo: O Vinery é uma plataforma completa de e-commerce especializada 
em vinhos — desenvolvida para conectar vinícolas a consumidores apaixonados 
por toda experiência que uma boa garrafa pode oferecer.
CTA 1: Ver Funcionalidades
CTA 2: Solicitar Demo
```

### Sobre o Sistema

```
Eyebrow: O que é o Vinery
Título: Uma plataforma pensada para o universo do vinho
Parágrafo 1: O Vinery é um sistema de e-commerce especializado em vinhos, 
criado para digitalizar e ampliar o alcance de vinícolas e distribuidores. 
A plataforma oferece desde a vitrine digital dos seus produtos até o 
gerenciamento completo de pedidos, clientes e estoque — tudo em um só lugar.

Parágrafo 2: Com três perfis integrados — Administrador, Vinícola e 
Consumidor — cada parte envolvida no processo tem acesso a exatamente o 
que precisa, sem complicações.

Stats:
  20+ funcionalidades integradas
  3 perfis de acesso
  100% digital e em tempo real
```

### Para Vinícolas

```
Eyebrow: Feito para sua vinícola
Título: Sua marca merece um vitrine à altura dos seus vinhos
Benefícios:
  • Catálogo digital completo com fotos, descrições e preços
  • Painel exclusivo para gerir seus produtos e pedidos
  • Presença online para consumidores de todo o Brasil
  • Sem papelada — tudo em tempo real, de qualquer dispositivo
CTA: Ver como funciona
```

### Funcionalidades

```
Eyebrow: O que o sistema oferece
Título: Tudo que você precisa, em um sistema só
Subtítulo: Do cadastro do vinho à entrega na casa do cliente, o Vinery 
cobre cada etapa da jornada.
```

### Painel Admin

```
Eyebrow: Para o Administrador
Título: Controle total da operação em um painel intuitivo
Bullets:
  ✓ KPIs em tempo real — pedidos, receita, produtos
  ✓ Gestão de vinícolas parceiras e seus portfólios
  ✓ Controle de estoque integrado ao catálogo
  ✓ Gerenciamento de usuários e cupons promocionais
  ✓ Visão completa de pedidos com rastreamento
CTA: Ver Dashboard
```

### Portal da Vinícola

```
Eyebrow: Para a Vinícola Parceira
Título: Seu painel, suas regras, seu portfólio
Parágrafo: A vinícola tem acesso a uma área exclusiva onde pode gerenciar 
seus vinhos, acompanhar os pedidos dos seus produtos e manter as 
informações institucionais sempre atualizadas — de forma simples, 
sem depender de ninguém.
Bullets:
  ✓ Adicione e edite seus vinhos com fotos e descrições
  ✓ Acompanhe pedidos dos seus produtos em tempo real
  ✓ Mantenha o perfil da sua casa atualizado
CTA: Conhecer o Painel
```

### Jornada do Consumidor

```
Título: Como o consumidor vive a experiência
Etapas:
  1 — Acessa o catálogo   → Navega por centenas de rótulos com filtros precisos
  2 — Descobre com IA     → O Sommelier sugere vinhos perfeitos para o seu gosto
  3 — Adiciona ao carrinho → Organiza sua compra e revisa os itens
  4 — Paga com PIX        → Checkout simples com QR Code gerado na hora
  5 — Recebe e avalia     → Acompanha a entrega e deixa sua avaliação
```

### Sommelier IA

```
Badge: Inteligência Artificial
Título: Um sommelier digital para cada cliente
Parágrafo: O Vinery conta com um Sommelier IA integrado — um assistente 
virtual que conversa com o cliente, entende seus gostos e recomenda vinhos 
personalizados. Uma experiência que vai além do e-commerce comum.
CTA: Ver como funciona
```

### CTA Final

```
Título: Interessado em levar sua vinícola para o digital?
Subtítulo: Entre em contato para saber como o Vinery pode 
transformar a presença da sua marca online.
Campos: Nome | E-mail da Vinícola | Mensagem
Botão: Enviar mensagem
Ou: parcerias@vinery.com.br
```

---

## 7. Assets Disponíveis

Os seguintes arquivos de branding estão disponíveis no projeto original e podem ser copiados para a landing page:

| Asset | Caminho Original | Uso |
|-------|-----------------|-----|
| Logo principal | `/public/logo-vinery.svg` | Navbar e footer |
| Ícone | `/public/icon-vinery.svg` | Favicon (32x32) |
| Ícone claro | `/public/icon-light-32x32.png` | Favicon alternativo |
| Ícone escuro | `/public/icon-dark-32x32.png` | Favicon sobre fundo escuro |
| Apple icon | `/public/apple-icon.png` | PWA / iOS |
| Hero pattern | `/public/images/hero-pattern.jpg` | Fundo da seção hero |

**Nota sobre imagens de funcionalidades:** Para os mockups/screenshots das telas do sistema, faça capturas de tela das seguintes rotas do sistema em desenvolvimento:
- `/admin` → Dashboard administrativo
- `/casa/painel` → Painel da vinícola  
- `/vinhos` → Catálogo de vinhos
- `/sommelier` → Chat do Sommelier IA
- `/checkout` → Tela de checkout com PIX

---

## 8. Tecnologias Recomendadas

### Opção A: HTML + CSS + JS Vanilla (Mais Simples)

**Recomendada para:** Entrega rápida, sem necessidade de build tools.

```
index.html          → Página principal com todas as seções
styles/main.css     → Estilos baseados neste guia
scripts/main.js     → Navegação suave, animações leves
assets/             → Logo, imagens, ícones
```

**Vantagens:**
- Zero dependências
- Hospedagem em qualquer lugar (GitHub Pages, Netlify Drop)
- Carregamento instantâneo
- Fácil de editar

**Dependências externas (CDN):**
```html
<!-- Ícones Lucide -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- Animações on-scroll -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

---

### Opção B: Next.js Estático (Mesma Stack)

**Recomendada para:** Aproveitar componentes já existentes do projeto.

```bash
npx create-next-app@latest vinery-landing --typescript --tailwind --app
```

Copiar do projeto original:
- `tailwind.config.ts` → exatamente igual
- `app/globals.css` → manter variáveis CSS e fonts
- Componentes UI base de `/components/ui/`

Exportar como site estático:
```js
// next.config.ts
output: 'export'
```

**Vantagens:**
- Reutiliza 100% do design system
- Tailwind e variáveis CSS já configurados
- Fácil de escalar

---

### Opção C: Astro (Melhor Performance)

**Recomendada para:** Máxima performance, zero JavaScript por padrão.

```bash
npm create astro@latest vinery-landing -- --template minimal
npx astro add tailwind
```

**Vantagens:**
- 0KB de JS por padrão
- Suporte a Tailwind nativo
- HTML estático com islands de interatividade quando necessário

---

### Hospedagem Recomendada

| Plataforma | Custo | Setup |
|-----------|-------|-------|
| **Vercel** | Gratuito | `git push` → deploy automático |
| **Netlify** | Gratuito | Drag & drop da pasta `dist/` |
| **GitHub Pages** | Gratuito | Push no branch `gh-pages` |

---

## 9. Checklist de Entrega

### Design
- [ ] Paleta de cores aplicada corretamente (vinery-wine, cream, sage)
- [ ] Playfair Display nos títulos, Inter no corpo
- [ ] Logo Vinery no navbar e footer
- [ ] Hero com imagem de fundo + overlay wine-dark
- [ ] Cards com hover suave (translateY + shadow)
- [ ] Botões com estados hover definidos
- [ ] Responsivo em mobile (breakpoints 375px, 768px, 1280px)

### Conteúdo
- [ ] Todas as 10 seções presentes
- [ ] Copy em português (pt-BR)
- [ ] Mínimo 9 funcionalidades representadas nos cards
- [ ] Jornada do consumidor com 5 etapas
- [ ] Aviso legal no footer ("Venda proibida para menores de 18 anos")

### Funcional
- [ ] Navegação por âncoras funcionando (smooth scroll)
- [ ] Formulário de contato funcional (mailto: ou form handler)
- [ ] Favicon configurado
- [ ] Meta tags (title, description, og:image) configuradas
- [ ] Imagens com lazy loading
- [ ] Sem links para o sistema real (é uma página de apresentação)

### Assets
- [ ] Logo SVG copiada do projeto original
- [ ] Screenshots das telas capturados e otimizados
- [ ] Imagem hero selecionada e comprimida (max 400KB)

---

*Documento gerado em: 2026-05-06*  
*Baseado no codebase: FrontEnd-SulVinhedos (branch dev-20)*  
*Stack do projeto original: Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript*
