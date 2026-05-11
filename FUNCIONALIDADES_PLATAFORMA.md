# Sul Vinhedos - Mapeamento Completo de Funcionalidades

## Visao Geral

Plataforma e-commerce especializada em vinhos do Vale dos Vinhedos, conectando **vinicolas (Casas)** a **consumidores (Clientes)**, com um **Sommelier I.A.** integrado para recomendacoes personalizadas.

---

## 1. FUNCIONALIDADES PARA CASA (Vinicola/Produtor)

### 1.1 Painel Self-Service da Casa

A casa possui seu proprio painel de gestao com acesso restrito aos gestores vinculados.

- **Dashboard com KPIs da Casa**
  - Receita do dia (R$)
  - Pedidos pendentes
  - Estoque critico (itens com menos de 10 unidades disponiveis)
  - Total de vinhos cadastrados
  - Lista dos pedidos mais recentes
  - Vinhos mais vendidos (ranking)

- **Analytics do Sommelier I.A. por Casa**
  - Total de recomendacoes dos vinhos da casa
  - Total de visualizacoes geradas pelo Sommelier
  - Total de cliques nas recomendacoes
  - Total de vendas atribuidas ao Sommelier
  - Receita atribuida ao Sommelier (R$)
  - Taxa de conversao (recomendacao -> venda)
  - Feedback positivo vs. negativo dos clientes
  - Top vinhos mais recomendados da casa (ranking)
  - Evolucao mensal (recomendacoes, cliques, vendas, receita)

### 1.2 Gestao de Vinhos

- Listar todos os vinhos da casa (paginado)
- Cadastrar novo vinho com dados completos:
  - Nome, descricao, foto, categoria
  - Safra, pais, regiao de origem
  - Uvas utilizadas (multiplas)
  - Teor alcoolico, volume (ml)
  - Notas de degustacao
  - Harmonizacao (lista de sugestoes)
  - Corpo (leve / medio / encorpado)
  - Docura (seco / meio_seco / suave / doce)
  - Temperatura de servico (min/max)
  - Premios recebidos
- Atualizar dados do vinho
- Remover/desativar vinho
- Definir preco (com suporte a preco promocional e vigencia)
- Gerenciar imagens do vinho (adicionar, remover, definir principal, ordenar)

### 1.3 Gestao de Estoque

- Listar estoque com quantidade disponivel por vinho
- Filtrar por estoque critico (< 10 unidades)
- Ajustar quantidade em estoque
- Reserva automatica de estoque ao confirmar pedido
- Baixa automatica no estoque apos pagamento confirmado

### 1.4 Gestao de Pedidos da Casa

- Listar pedidos que contem vinhos da casa (paginado)
- Filtrar por status (AGUARDANDO_PAGAMENTO, PAGO, EM_PREPARACAO, ENVIADO, ENTREGUE, CANCELADO)
- Filtrar por periodo (data inicio / data fim)
- Detalhar pedido completo (itens, valores, historico de status, pagamento)
- Atualizar status do pedido com validacao de transicao:
  - PAGO -> EM_PREPARACAO
  - EM_PREPARACAO -> ENVIADO
  - ENVIADO -> ENTREGUE
- Historico de alteracoes de status (quem alterou, quando)

### 1.5 Perfil da Casa

- Atualizar dados publicos: nome, descricao, historia, imagens (capa, logo), cidade, estado, pais, website, email de contato, telefone comercial, cor do nome
- Atualizar dados legais (somente OWNER): CNPJ, razao social, inscricao estadual
- Slug unico para URL amigavel (ex: `/casas/miolo`)
- Ativar/desativar casa

### 1.6 Gestao de Gestores

- Listar gestores vinculados a casa
- Vincular novo usuario como gestor
- Desvincular gestor
- Controle de acesso: apenas gestores vinculados acessam o painel da casa

---

## 2. FUNCIONALIDADES PARA USUARIO (Cliente)

### 2.1 Autenticacao e Conta

- **Registro** com email e senha
- **Login** com email e senha
- **Login com Google** (OAuth2)
- **Refresh token** automatico (via cookie ou body)
- **Logout** com revogacao de refresh token e limpeza de cookies
- **Verificacao de sessao** (endpoint para middleware do frontend)
- **Completar cadastro** (primeiro acesso - define senha e dados pessoais)
- Tokens via cookies HTTP-only seguros (access: 15min, refresh: 7 dias)
- Papeis de usuario: CLIENTE, OWNER, CASA

### 2.2 Perfil do Usuario

- Visualizar perfil completo
- Atualizar dados do perfil (nome, etc.)
- Alterar senha (com validacao de senha atual)

### 2.3 Catalogo de Vinhos

- Listar vinhos com paginacao
- Filtrar por:
  - Categoria (slug)
  - Pais de origem
  - Faixa de safra (min/max)
  - Faixa de preco (min/max)
  - Busca textual
- Ordenacao customizavel (campo + direcao)
- Detalhe do vinho por slug (URL amigavel)
  - Todas as informacoes do vinho
  - Galeria de imagens
  - Preco atual e preco promocional
  - Uvas, notas de degustacao, harmonizacao
  - Temperatura de servico

### 2.4 Catalogo de Casas

- Listar casas (paginado, com filtros)
  - Filtrar por pais
  - Filtrar por estado
  - Busca textual
- Detalhe da casa por slug
  - Nome, descricao, historia
  - Imagens (capa, logo)
  - Localizacao (cidade, estado, pais)
  - Website, contato

### 2.5 Categorias e Uvas

- Listar categorias de vinhos (tinto, branco, rose, espumante, etc.)
- Listar uvas disponiveis (com nome, descricao, tipo)
- Informacoes educativas sobre uvas

### 2.6 Carrinho de Compras

- Visualizar carrinho atual
- Adicionar vinho ao carrinho
- Atualizar quantidade de item
- Remover item do carrinho
- Aplicar cupom de desconto
- Remover cupom
- Calculo automatico de subtotal, desconto e total

### 2.7 Cupons de Desconto

- Aplicar cupom por codigo
- Tipos de desconto: percentual ou valor fixo
- Validacao de valor minimo do pedido
- Controle de usos maximos
- Validade por data

### 2.8 Pedidos

- Criar pedido a partir do carrinho
- Listar meus pedidos (paginado)
- Detalhar pedido (itens, valores, status, pagamento, historico)
- Cancelar pedido
- Fluxo de status: AGUARDANDO_PAGAMENTO -> PAGO -> EM_PREPARACAO -> ENVIADO -> ENTREGUE
- Historico completo de status com timestamps

### 2.9 Pagamento (PIX via AbacatePay)

- Geracao de cobranca PIX automatica
- QR Code para pagamento
- Webhook para confirmacao automatica de pagamento
- Processamento automatico de estorno
- Registro de tentativas de pagamento
- Status: PENDENTE, APROVADO, ESTORNADO

### 2.10 Enderecos

- Listar enderecos cadastrados
- Cadastrar novo endereco
- Atualizar endereco existente
- Remover endereco

### 2.11 Avaliacoes

- Avaliar vinhos (nota 1-5, titulo, comentario)
- Verificar se pode avaliar (precisa ter comprado o vinho)
- Listar avaliacoes de um vinho (paginado)
- Listar minhas avaliacoes
- Excluir propria avaliacao

### 2.12 Preferencias de Vinho

- Salvar preferencias pessoais:
  - Categorias preferidas (ate 4)
  - Corpo preferido (leve / medio / encorpado)
  - Docura preferida (seco / meio_seco / suave / doce)
  - Uvas favoritas (ate 10)
  - Faixa de preco (min/max)
  - Paises preferidos (ate 10)
  - Regioes preferidas (ate 10)
  - Harmonizacoes preferidas (ate 10)
  - Nivel de conhecimento (iniciante / intermediario / avancado)
- Buscar preferencias atuais
- Resetar preferencias

### 2.13 Sommelier I.A.

- **Chat com Sommelier Virtual** inteligente
  - Sessao de chat persistente por usuario
  - Salvar/recuperar historico de conversa
  - Limpar sessao
- **Busca inteligente de vinhos** baseada em criterios:
  - Categoria, uvas, corpo, docura
  - Harmonizacao, faixa de preco
  - Pais, regiao
  - Limite configuravel de resultados (ate 20)
- Recomendacoes personalizadas com base nas preferencias do usuario
- Preco real exibido (com promocional quando aplicavel)
- Link direto para pagina do produto

### 2.14 Tracking e Feedback do Sommelier

- Registrar interacoes com recomendacoes (visualizou, clicou)
- Enviar feedback sobre recomendacoes (positivo/negativo)
- Atribuicao de vendas ao Sommelier (rastreabilidade)

---

## 3. KPIs E METRICAS DA PLATAFORMA

### 3.1 KPIs do Dashboard Admin (Global)

| KPI | Descricao |
|-----|-----------|
| Receita Hoje | Total vendido no dia atual (R$) |
| Pedidos Pendentes | Quantidade de pedidos aguardando pagamento |
| Estoque Critico | Quantidade de vinhos com menos de 10 unidades disponiveis |
| Total de Clientes | Numero de clientes ativos cadastrados |
| Pedidos Recentes | Ultimos 10 pedidos com status e valores |
| Vinhos Mais Vendidos | Top 5 vinhos por quantidade vendida |

### 3.2 KPIs do Dashboard da Casa

| KPI | Descricao |
|-----|-----------|
| Receita Hoje | Total vendido pela casa no dia atual (R$) |
| Pedidos Pendentes | Pedidos da casa aguardando pagamento |
| Estoque Critico | Vinhos da casa com estoque critico |
| Total de Vinhos | Vinhos cadastrados pela casa |
| Pedidos Recentes | Ultimos pedidos da casa |
| Vinhos Mais Vendidos | Ranking de vendas da casa |

### 3.3 KPIs do Sommelier I.A. (Global e por Casa)

| KPI | Descricao |
|-----|-----------|
| Total de Recomendacoes | Quantidade de vinhos recomendados pelo Sommelier |
| Total de Visualizacoes | Vezes que uma recomendacao foi visualizada |
| Total de Cliques | Cliques em vinhos recomendados |
| Vendas Atribuidas | Pedidos concretizados a partir de recomendacoes |
| Receita Atribuida | Valor (R$) gerado por vendas via Sommelier |
| Taxa de Conversao | % de recomendacoes que geraram vendas |
| Feedback Positivo | Quantidade de feedbacks positivos |
| Feedback Negativo | Quantidade de feedbacks negativos |
| Top Vinhos Recomendados | Ranking de vinhos mais recomendados (com cliques, vendas, receita por vinho) |
| Evolucao Mensal | Grafico mensal: recomendacoes, cliques, vendas e receita (ultimos 6 meses) |

---

## 4. FUNCIONALIDADES ADMINISTRATIVAS (OWNER)

### 4.1 Gestao de Vinhos (Admin)

- CRUD completo de vinhos
- Ativar/desativar vinhos
- Gerenciar imagens e precos
- Gerenciar categorias (CRUD + ativar/desativar)
- Gerenciar uvas (CRUD + ativar/desativar)

### 4.2 Gestao de Pedidos (Admin)

- Listar todos os pedidos com filtros (status, data, busca)
- Detalhar qualquer pedido
- Atualizar status com validacao de fluxo

### 4.3 Gestao de Cupons (Admin)

- Listar todos os cupons
- Criar cupom (codigo, tipo desconto, valor, minimo pedido, max usos, validade)
- Atualizar cupom
- Desativar cupom

### 4.4 Gestao de Estoque (Admin)

- Visao global do estoque
- Filtrar por estoque critico
- Ajustar quantidades

### 4.5 Gestao de Usuarios (Admin)

- Listar usuarios do tipo CASA (com filtro de busca)
- Criar usuario para casa (gera senha temporaria, primeiro acesso obrigatorio)
- Ativar/desativar usuarios

### 4.6 Gestao de Casas (Admin)

- CRUD completo de casas
- Ativar/desativar casas
- Gerenciar gestores (vincular/desvincular)

### 4.7 Analytics Global

- Dashboard com visao global da plataforma
- Analytics do Sommelier I.A. (todas as casas)

---

## 5. DIFERENCIAIS TECNICOS

| Diferencial | Descricao |
|-------------|-----------|
| Sommelier I.A. | Recomendacao inteligente de vinhos por chat, com tracking completo de conversao |
| Multi-tenant por Casa | Cada vinicola gerencia seus proprios vinhos, pedidos e estoque |
| Precos com vigencia | Sistema de precos temporais com suporte a promocoes |
| Rastreabilidade completa | Historico de status de pedidos, tentativas de pagamento, atribuicao de vendas |
| PIX integrado | Pagamento instantaneo via AbacatePay com confirmacao por webhook |
| Autenticacao segura | JWT com cookies HTTP-only, refresh token, login Google OAuth2 |
| Preferencias personalizadas | Perfil de gosto do cliente para recomendacoes mais precisas |
| Slug-friendly URLs | URLs amigaveis para vinhos e casas (SEO) |
| Controle de acesso granular | OWNER > CASA (gestor) > CLIENTE, com verificacao por casa |
