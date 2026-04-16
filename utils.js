/**
 * CAMADA DE DADOS - SISTEMA DE COBRANÇA
 * 
 * Este arquivo centraliza todos os dados mockados do sistema.
 * Para conectar ao banco de dados real, substitua as funções de cada
 * módulo pelos endpoints da sua API, mantendo a mesma estrutura de retorno.
 * 
 * Padrão sugerido de API:
 *   GET /api/cobradoras
 *   GET /api/clientes?carteira=:id&periodo=:periodo
 *   GET /api/recebimentos?mes=:mes&ano=:ano&carteira=:id
 *   GET /api/metas?mes=:mes&ano=:ano
 *   GET /api/rankings?periodo=:periodo
 *   POST /api/reguas
 *   GET /api/tarefas?cobradora=:id
 *   POST /api/tarefas
 */

const DB = (() => {

  // ── USUÁRIO LOGADO (simulado) ─────────────────────────────────────────────
  const CURRENT_USER = {
    id: 1,
    nome: 'Ana Paula',
    role: 'gerente', // 'gerente' | 'cobradora'
    carteira: null,  // null = gerente vê todas; id = cobradora vê só a sua
    avatar: 'AP'
  };

  // ── COBRADORAS ────────────────────────────────────────────────────────────
  const COBRADORAS = [
    { id: 1, nome: 'Ana Paula',    carteira: 'ATUAL',    avatar: 'AP', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 2, nome: 'Beatriz Lima', carteira: 'ATUAL',    avatar: 'BL', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 3, nome: 'Carla Souza',  carteira: 'ATUAL',    avatar: 'CS', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 4, nome: 'Daniela Reis', carteira: 'ATUAL',    avatar: 'DR', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 5, nome: 'Elaine Costa', carteira: 'ATUAL',    avatar: 'EC', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 6, nome: 'Fernanda Melo',carteira: 'ATUAL',    avatar: 'FM', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 7, nome: 'Giovana Neto', carteira: 'ATUAL',    avatar: 'GN', meta_atual: 427021, meta_atrasado: 166064 },
    { id: 8, nome: 'Helena Cruz',  carteira: 'ATRASADO', avatar: 'HC', meta_atual: 0,      meta_atrasado: 166064 },
    { id: 9, nome: 'Isabela Pinto',carteira: 'ATRASADO', avatar: 'IP', meta_atual: 0,      meta_atrasado: 166064 },
  ];

  // ── CONFIGURAÇÃO DE META (Modelo PDF) ─────────────────────────────────────
  const CONFIG_META = {
    total_mensal: 4483728.78,
    atual: {
      total: 2989152,
      n_cobradoras: 7,
      meta_por_cobradora: 427021
    },
    atrasado: {
      total: 1494576,
      n_cobradoras: 9,
      meta_por_cobradora: 166064
    },
    faixas: [
      { nome: 'Faixa 1', pct: 50,  comissao: 250  },
      { nome: 'Faixa 2', pct: 70,  comissao: 500  },
      { nome: 'Faixa 3', pct: 80,  comissao: 750  },
      { nome: 'Faixa 4 (Supermeta)', pct: 100, comissao: 1200 }
    ],
    meta_diaria_atual: 13139,
    meta_diaria_atrasado: 5109,
    bonus_diario: 25,
    bonus_semanal_minimo_dias: 3
  };

  // ── CLIENTES ──────────────────────────────────────────────────────────────
  const CLIENTES = [
    { id: 101, nome: 'Roberto Almeida',   cpf: '123.456.789-00', telefone: '(11) 99999-1111', carteira: 'ATUAL',    cobradora_id: 1, dias_atraso: 15,  valor_total: 3200,   parcelas_vencidas: 2, status: 'vencido' },
    { id: 102, nome: 'Mariana Ferreira',  cpf: '234.567.890-11', telefone: '(11) 98888-2222', carteira: 'ATUAL',    cobradora_id: 1, dias_atraso: 0,   valor_total: 1800,   parcelas_vencidas: 0, status: 'em_dia' },
    { id: 103, nome: 'Carlos Eduardo',    cpf: '345.678.901-22', telefone: '(11) 97777-3333', carteira: 'ATRASADO', cobradora_id: 8, dias_atraso: 62,  valor_total: 5400,   parcelas_vencidas: 4, status: 'vencido' },
    { id: 104, nome: 'Patrícia Nascimento',cpf: '456.789.012-33',telefone: '(11) 96666-4444', carteira: 'ATUAL',    cobradora_id: 2, dias_atraso: 8,   valor_total: 2100,   parcelas_vencidas: 1, status: 'vencido' },
    { id: 105, nome: 'Fernando Batista',  cpf: '567.890.123-44', telefone: '(11) 95555-5555', carteira: 'ATRASADO', cobradora_id: 8, dias_atraso: 90,  valor_total: 8700,   parcelas_vencidas: 6, status: 'vencido' },
    { id: 106, nome: 'Larissa Oliveira',  cpf: '678.901.234-55', telefone: '(11) 94444-6666', carteira: 'ATUAL',    cobradora_id: 3, dias_atraso: 0,   valor_total: 1200,   parcelas_vencidas: 0, status: 'em_dia' },
    { id: 107, nome: 'Thiago Moreira',    cpf: '789.012.345-66', telefone: '(11) 93333-7777', carteira: 'ATUAL',    cobradora_id: 4, dias_atraso: 22,  valor_total: 4300,   parcelas_vencidas: 3, status: 'vencido' },
    { id: 108, nome: 'Amanda Santos',     cpf: '890.123.456-77', telefone: '(11) 92222-8888', carteira: 'ATRASADO', cobradora_id: 9, dias_atraso: 48,  valor_total: 6100,   parcelas_vencidas: 5, status: 'vencido' },
    { id: 109, nome: 'Rodrigo Lima',      cpf: '901.234.567-88', telefone: '(11) 91111-9999', carteira: 'ATUAL',    cobradora_id: 5, dias_atraso: 5,   valor_total: 900,    parcelas_vencidas: 1, status: 'vencido' },
    { id: 110, nome: 'Juliana Cardoso',   cpf: '012.345.678-99', telefone: '(11) 90000-0000', carteira: 'ATUAL',    cobradora_id: 6, dias_atraso: 0,   valor_total: 2700,   parcelas_vencidas: 0, status: 'em_dia' },
  ];

  // ── RECEBIMENTOS (por dia do mês atual) ───────────────────────────────────
  function gerarRecebimentosMes(ano, mes) {
    const days = new Date(ano, mes, 0).getDate();
    const hoje = new Date();
    const recebimentos = {};
    for (let d = 1; d <= days; d++) {
      const dt = new Date(ano, mes - 1, d);
      if (dt > hoje) continue;
      if (dt.getDay() === 0 || dt.getDay() === 6) continue;
      const base = Math.floor(Math.random() * 80000) + 20000;
      recebimentos[d] = {
        total: base,
        detalhes: [
          { mes_referencia: 'Março/2025',  valor: base * 0.35 },
          { mes_referencia: 'Fevereiro/2025', valor: base * 0.25 },
          { mes_referencia: 'Abril/2025',  valor: base * 0.40 },
        ]
      };
    }
    return recebimentos;
  }

  // ── RANKINGS ──────────────────────────────────────────────────────────────
  function gerarRankings(periodo = 'mes') {
    const multiplicadores = { dia: 0.04, semana: 0.25, mes: 1 };
    const mult = multiplicadores[periodo] || 1;
    return COBRADORAS.map(c => {
      const meta = c.carteira === 'ATUAL' ? c.meta_atual : c.meta_atrasado;
      const recebido = Math.floor(meta * (0.5 + Math.random() * 0.7) * mult);
      const pct = meta > 0 ? (recebido / (meta * mult)) * 100 : 0;
      return {
        ...c,
        recebido,
        meta_periodo: Math.floor(meta * mult),
        pct_meta: Math.min(pct, 150).toFixed(1),
        dias_batidos: Math.floor(Math.random() * 20) + 3,
        acordos: Math.floor(Math.random() * 40) + 5,
        ligacoes: Math.floor(Math.random() * 200) + 50,
      };
    }).sort((a, b) => parseFloat(b.pct_meta) - parseFloat(a.pct_meta));
  }

  // ── TAREFAS ───────────────────────────────────────────────────────────────
  let TAREFAS = [
    { id: 1, titulo: 'Ligar para Roberto Almeida', descricao: 'Cliente com 15 dias de atraso, 2 parcelas vencidas', prioridade: 'alta',  status: 'pendente',    data_vencimento: '2025-04-18', cobradora_id: 1, cliente_id: 101 },
    { id: 2, titulo: 'Enviar proposta de renegociação para Thiago', descricao: 'Verificar opções de parcelamento', prioridade: 'media', status: 'em_andamento', data_vencimento: '2025-04-19', cobradora_id: 1, cliente_id: 107 },
    { id: 3, titulo: 'Verificar pagamento de Rodrigo Lima', descricao: 'Aguardando confirmação de PIX', prioridade: 'baixa', status: 'concluida', data_vencimento: '2025-04-16', cobradora_id: 1, cliente_id: 109 },
    { id: 4, titulo: 'Negativar Fernando Batista', descricao: '90 dias de atraso — ação necessária', prioridade: 'alta',  status: 'pendente',    data_vencimento: '2025-04-17', cobradora_id: 8, cliente_id: 105 },
    { id: 5, titulo: 'Follow-up Amanda Santos', descricao: 'Segunda tentativa de contato', prioridade: 'media', status: 'pendente',    data_vencimento: '2025-04-20', cobradora_id: 9, cliente_id: 108 },
  ];
  let nextTarefaId = 6;

  // ── RÉGUAS ────────────────────────────────────────────────────────────────
  let REGUAS_INTELIGENTES = [
    {
      id: 1,
      nome: 'Régua Padrão - Atraso Inicial',
      tipo: 'inteligente',
      criado_por: 'Gerência',
      ativo: true,
      passos: [
        { dia: 1,  canal: 'whatsapp', mensagem: 'Olá {nome}, identificamos que sua parcela venceu ontem. Regularize para evitar juros.' },
        { dia: 3,  canal: 'sms',      mensagem: 'Atenção {nome}: parcela em atraso. Acesse o link para pagar: {link}' },
        { dia: 7,  canal: 'ligacao',  mensagem: 'Contato telefônico — verificar situação do cliente' },
        { dia: 15, canal: 'whatsapp', mensagem: '{nome}, sua dívida está com {dias} dias. Renegocie agora e evite restrições.' },
      ]
    },
    {
      id: 2,
      nome: 'Régua Agressiva - Longa Inadimplência',
      tipo: 'inteligente',
      criado_por: 'Gerência',
      ativo: true,
      passos: [
        { dia: 30, canal: 'whatsapp', mensagem: '{nome}, sua dívida está há 30 dias em aberto. Última chance de negociar.' },
        { dia: 45, canal: 'sms',      mensagem: 'Comunicado: {nome}, seu CPF será negativado em 5 dias. Regularize: {link}' },
        { dia: 50, canal: 'negativacao', mensagem: 'Negativação no SPC/Serasa' },
        { dia: 60, canal: 'protesto', mensagem: 'Protesto em cartório' },
      ]
    }
  ];
  let REGUAS_PERSONALIZADAS = [
    {
      id: 10,
      nome: 'Minha Régua - Clientes VIP',
      tipo: 'personalizada',
      cobradora_id: 1,
      ativo: true,
      passos: [
        { dia: 2,  canal: 'whatsapp', mensagem: 'Oi {nome}! Tudo bem? Vi que sua parcela venceu, podemos resolver?' },
        { dia: 5,  canal: 'ligacao',  mensagem: 'Ligação pessoal para o cliente' },
      ]
    }
  ];
  let nextReguaId = 20;

  // ── RENEGOCIAÇÕES ─────────────────────────────────────────────────────────
  const RENEGOCIACOES = [
    { id: 1, cliente_id: 103, cliente_nome: 'Carlos Eduardo',    valor_original: 5400, valor_negociado: 4200, parcelas: 6, data: '2025-04-01', status: 'ativo',    cobradora_id: 8 },
    { id: 2, cliente_id: 105, cliente_nome: 'Fernando Batista',  valor_original: 8700, valor_negociado: 7000, parcelas: 10, data: '2025-03-15', status: 'ativo',   cobradora_id: 8 },
    { id: 3, cliente_id: 107, cliente_nome: 'Thiago Moreira',    valor_original: 4300, valor_negociado: 3500, parcelas: 4,  data: '2025-04-10', status: 'pendente', cobradora_id: 4 },
    { id: 4, cliente_id: 108, cliente_nome: 'Amanda Santos',     valor_original: 6100, valor_negociado: 5000, parcelas: 8,  data: '2025-03-28', status: 'quebrado', cobradora_id: 9 },
  ];

  // ── ATENDIMENTOS INTERNOS ─────────────────────────────────────────────────
  let ATENDIMENTOS = [
    { id: 1, titulo: 'Cliente alega não reconhecer cobrança', descricao: 'Roberto Almeida diz que a compra não foi feita por ele.', categoria: 'contestacao', status: 'aberto',    prioridade: 'alta',  data: '2025-04-15', cobradora_id: 1 },
    { id: 2, titulo: 'Solicitação de segunda via de boleto',   descricao: 'Mariana pediu segunda via para pagamento hoje.',         categoria: 'segunda_via', status: 'resolvido', prioridade: 'baixa', data: '2025-04-14', cobradora_id: 2 },
    { id: 3, titulo: 'Acordo não efetivado',                   descricao: 'Thiago combinou pagar mas não pagou no prazo.',          categoria: 'acordo',     status: 'aberto',    prioridade: 'media', data: '2025-04-13', cobradora_id: 4 },
    { id: 4, titulo: 'Pedido de prorrogação de prazo',         descricao: 'Fernando solicita 30 dias adicionais.',                  categoria: 'prorrogacao',status: 'pendente',  prioridade: 'media', data: '2025-04-12', cobradora_id: 8 },
  ];
  let nextAtendimentoId = 5;

  // ──────────────────────────────────────────────────────────────────────────
  // API PÚBLICA DO DB
  // ──────────────────────────────────────────────────────────────────────────
  return {
    // Auth
    getCurrentUser: () => ({ ...CURRENT_USER }),
    setUserRole: (role) => { CURRENT_USER.role = role; },

    // Cobradoras
    getCobradoras: () => [...COBRADORAS],
    getCobradoraById: (id) => COBRADORAS.find(c => c.id === id),

    // Meta
    getConfigMeta: () => ({ ...CONFIG_META }),

    // Clientes
    getClientes: (filtros = {}) => {
      let list = [...CLIENTES];
      if (filtros.carteira) list = list.filter(c => c.carteira === filtros.carteira);
      if (filtros.cobradora_id) list = list.filter(c => c.cobradora_id === filtros.cobradora_id);
      if (filtros.status) list = list.filter(c => c.status === filtros.status);
      return list;
    },
    getClienteById: (id) => CLIENTES.find(c => c.id === id),

    // Recebimentos
    getRecebimentos: (ano, mes) => gerarRecebimentosMes(ano, mes),
    getTotalRecebidoMes: (ano, mes) => {
      const r = gerarRecebimentosMes(ano, mes);
      return Object.values(r).reduce((s, d) => s + d.total, 0);
    },

    // Rankings
    getRankings: (periodo) => gerarRankings(periodo),

    // Tarefas
    getTarefas: (filtros = {}) => {
      let list = [...TAREFAS];
      if (filtros.cobradora_id) list = list.filter(t => t.cobradora_id === filtros.cobradora_id);
      if (filtros.status) list = list.filter(t => t.status === filtros.status);
      return list;
    },
    addTarefa: (tarefa) => {
      const nova = { ...tarefa, id: nextTarefaId++ };
      TAREFAS.push(nova);
      return nova;
    },
    updateTarefa: (id, dados) => {
      const idx = TAREFAS.findIndex(t => t.id === id);
      if (idx >= 0) { TAREFAS[idx] = { ...TAREFAS[idx], ...dados }; return TAREFAS[idx]; }
      return null;
    },
    deleteTarefa: (id) => { TAREFAS = TAREFAS.filter(t => t.id !== id); },

    // Réguas
    getReguasInteligentes: () => [...REGUAS_INTELIGENTES],
    getReguasPersonalizadas: (cobradora_id) =>
      REGUAS_PERSONALIZADAS.filter(r => !cobradora_id || r.cobradora_id === cobradora_id),
    addRegua: (regua) => {
      const nova = { ...regua, id: nextReguaId++ };
      if (regua.tipo === 'inteligente') REGUAS_INTELIGENTES.push(nova);
      else REGUAS_PERSONALIZADAS.push(nova);
      return nova;
    },
    updateRegua: (id, dados) => {
      let idx = REGUAS_INTELIGENTES.findIndex(r => r.id === id);
      if (idx >= 0) { REGUAS_INTELIGENTES[idx] = { ...REGUAS_INTELIGENTES[idx], ...dados }; return; }
      idx = REGUAS_PERSONALIZADAS.findIndex(r => r.id === id);
      if (idx >= 0) { REGUAS_PERSONALIZADAS[idx] = { ...REGUAS_PERSONALIZADAS[idx], ...dados }; }
    },
    deleteRegua: (id) => {
      REGUAS_INTELIGENTES = REGUAS_INTELIGENTES.filter(r => r.id !== id);
      REGUAS_PERSONALIZADAS = REGUAS_PERSONALIZADAS.filter(r => r.id !== id);
    },

    // Renegociações
    getRenegociacoes: (filtros = {}) => {
      let list = [...RENEGOCIACOES];
      if (filtros.cobradora_id) list = list.filter(r => r.cobradora_id === filtros.cobradora_id);
      if (filtros.status) list = list.filter(r => r.status === filtros.status);
      return list;
    },

    // Atendimentos
    getAtendimentos: (filtros = {}) => {
      let list = [...ATENDIMENTOS];
      if (filtros.cobradora_id) list = list.filter(a => a.cobradora_id === filtros.cobradora_id);
      if (filtros.status) list = list.filter(a => a.status === filtros.status);
      if (filtros.categoria) list = list.filter(a => a.categoria === filtros.categoria);
      return list;
    },
    addAtendimento: (at) => {
      const novo = { ...at, id: nextAtendimentoId++ };
      ATENDIMENTOS.push(novo);
      return novo;
    },
    updateAtendimento: (id, dados) => {
      const idx = ATENDIMENTOS.findIndex(a => a.id === id);
      if (idx >= 0) { ATENDIMENTOS[idx] = { ...ATENDIMENTOS[idx], ...dados }; return ATENDIMENTOS[idx]; }
      return null;
    },

    // Helpers
    fmt: {
      moeda: (v) => v?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ?? 'R$ 0,00',
      data: (d) => d ? new Date(d + 'T00:00:00').toLocaleDateString('pt-BR') : '',
      pct: (v) => `${parseFloat(v).toFixed(1)}%`
    }
  };
})();

// Expor globalmente
window.DB = DB;
