// 🎨 SISTEMA DE TEMAS APROFUNDADOS - SOC Concursos v2.0
// Cada tema tem identidade visual COMPLETA (cores, gradientes, glow, superfícies)

export const TEMAS = {

  // ═══════════════════════════════════════════════════════════════
  'roxo-noturno': {
    nome: 'Roxo Noturno',
    icone: '🌌',
    descricao: 'Elegância cósmica e mistério',
    personalidade: 'Sofisticado • Foco Profundo • Noturno',
    modoPreferido: 'escuro',
    cores: {
      primary: '#8b5cf6',
      secondary: '#a855f7',
      accent: '#ec4899',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#06b6d4',
    },
    superficies: {
      escuro: {
        bgPrimary: '#0a0a1a',
        bgSecondary: '#111128',
        bgCard: '#16163a',
        bgCardHover: '#1e1e4a',
        textPrimary: '#f0f0ff',
        textSecondary: '#a5a5d1',
        textMuted: '#6b6b99',
        borderColor: '#2a2a5a',
      },
      claro: {
        bgPrimary: '#faf5ff',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#f3e8ff',
        textPrimary: '#1e1b4b',
        textSecondary: '#4c1d95',
        textMuted: '#7c3aed',
        borderColor: '#e9d5ff',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%)',
      subtle: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.05))',
    },
    efeitos: {
      glow: '0 0 40px rgba(139, 92, 246, 0.4)',
      glowHover: '0 0 60px rgba(236, 72, 153, 0.5)',
      shadowCard: '0 8px 32px rgba(139, 92, 246, 0.15)',
      blur: '20px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'azul-oceano': {
    nome: 'Oceano Profundo',
    icone: '🌊',
    descricao: 'Calma fluida e concentração',
    personalidade: 'Tranquilo • Fluido • Contemplativo',
    modoPreferido: 'escuro',
    cores: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#8b5cf6',
    },
    superficies: {
      escuro: {
        bgPrimary: '#031927',
        bgSecondary: '#052e3d',
        bgCard: '#0a3a4d',
        bgCardHover: '#0f4a63',
        textPrimary: '#e0f2fe',
        textSecondary: '#7dd3fc',
        textMuted: '#0369a1',
        borderColor: '#0c4a6e',
      },
      claro: {
        bgPrimary: '#f0f9ff',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#e0f2fe',
        textPrimary: '#0c4a6e',
        textSecondary: '#0369a1',
        textMuted: '#0284c7',
        borderColor: '#bae6fd',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)',
      subtle: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(6,182,212,0.05))',
    },
    efeitos: {
      glow: '0 0 40px rgba(14, 165, 233, 0.35)',
      glowHover: '0 0 60px rgba(6, 182, 212, 0.45)',
      shadowCard: '0 8px 32px rgba(14, 165, 233, 0.12)',
      blur: '24px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'verde-esmeralda': {
    nome: 'Floresta Zen',
    icone: '🌿',
    descricao: 'Equilíbrio natural e bem-estar',
    personalidade: 'Orgânico • Equilibrado • Renovador',
    modoPreferido: 'escuro',
    cores: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#84cc16',
      success: '#22c55e',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#06b6d4',
    },
    superficies: {
      escuro: {
        bgPrimary: '#0a1f1a',
        bgSecondary: '#0f2e26',
        bgCard: '#143d33',
        bgCardHover: '#1a4d40',
        textPrimary: '#d1fae5',
        textSecondary: '#6ee7b7',
        textMuted: '#047857',
        borderColor: '#065f46',
      },
      claro: {
        bgPrimary: '#f0fdf4',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#dcfce7',
        textPrimary: '#14532d',
        textSecondary: '#166534',
        textMuted: '#16a34a',
        borderColor: '#bbf7d0',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #84cc16 100%)',
      subtle: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(132,204,22,0.05))',
    },
    efeitos: {
      glow: '0 0 40px rgba(16, 185, 129, 0.35)',
      glowHover: '0 0 60px rgba(132, 204, 22, 0.45)',
      shadowCard: '0 8px 32px rgba(16, 185, 129, 0.12)',
      blur: '16px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'laranja-fogo': {
    nome: 'Pôr do Sol',
    icone: '🔥',
    descricao: 'Energia quente e motivação',
    personalidade: 'Intenso • Motivador • Ambicioso',
    modoPreferido: 'escuro',
    cores: {
      primary: '#f97316',
      secondary: '#ef4444',
      accent: '#f59e0b',
      success: '#10b981',
      warning: '#eab308',
      danger: '#dc2626',
      info: '#06b6d4',
    },
    superficies: {
      escuro: {
        bgPrimary: '#1a0a05',
        bgSecondary: '#2a1208',
        bgCard: '#3d1a0c',
        bgCardHover: '#4d2210',
        textPrimary: '#fff7ed',
        textSecondary: '#fdba74',
        textMuted: '#c2410c',
        borderColor: '#7c2d12',
      },
      claro: {
        bgPrimary: '#fff7ed',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#ffedd5',
        textPrimary: '#7c2d12',
        textSecondary: '#9a3412',
        textMuted: '#ea580c',
        borderColor: '#fed7aa',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #ec4899 100%)',
      subtle: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(239,68,68,0.06))',
    },
    efeitos: {
      glow: '0 0 40px rgba(249, 115, 22, 0.45)',
      glowHover: '0 0 60px rgba(239, 68, 68, 0.55)',
      shadowCard: '0 8px 32px rgba(249, 115, 22, 0.18)',
      blur: '18px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'rosa-cyberpunk': {
    nome: 'Cyberpunk Neon',
    icone: '⚡',
    descricao: 'Futurista, vibrante e ousado',
    personalidade: 'Elétrico • Rebelde • Alta Energia',
    modoPreferido: 'escuro',
    cores: {
      primary: '#ec4899',
      secondary: '#a855f7',
      accent: '#06b6d4',
      success: '#22c55e',
      warning: '#eab308',
      danger: '#ef4444',
      info: '#3b82f6',
    },
    superficies: {
      escuro: {
        bgPrimary: '#0a0014',
        bgSecondary: '#12001f',
        bgCard: '#1a002e',
        bgCardHover: '#26003d',
        textPrimary: '#fce7f3',
        textSecondary: '#f0abfc',
        textMuted: '#a855f7',
        borderColor: '#701a75',
      },
      claro: {
        bgPrimary: '#fdf4ff',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#fae8ff',
        textPrimary: '#701a75',
        textSecondary: '#86198f',
        textMuted: '#a21caf',
        borderColor: '#f5d0fe',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #06b6d4 100%)',
      subtle: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(6,182,212,0.08))',
    },
    efeitos: {
      glow: '0 0 50px rgba(236, 72, 153, 0.5)',
      glowHover: '0 0 70px rgba(6, 182, 212, 0.6)',
      shadowCard: '0 8px 32px rgba(236, 72, 153, 0.25), 0 0 20px rgba(6,182,212,0.15)',
      blur: '12px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'grafite': {
    nome: 'Grafite Profissional',
    icone: '⚫',
    descricao: 'Minimalismo sério e corporativo',
    personalidade: 'Sóbrio • Profissional • Atemporal',
    modoPreferido: 'escuro',
    cores: {
      primary: '#64748b',
      secondary: '#475569',
      accent: '#0ea5e9',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#06b6d4',
    },
    superficies: {
      escuro: {
        bgPrimary: '#0f172a',
        bgSecondary: '#1e293b',
        bgCard: '#293548',
        bgCardHover: '#334155',
        textPrimary: '#f8fafc',
        textSecondary: '#cbd5e1',
        textMuted: '#64748b',
        borderColor: '#334155',
      },
      claro: {
        bgPrimary: '#f8fafc',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#f1f5f9',
        textPrimary: '#0f172a',
        textSecondary: '#334155',
        textMuted: '#64748b',
        borderColor: '#e2e8f0',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%)',
      subtle: 'linear-gradient(135deg, rgba(100,116,139,0.08), rgba(71,85,105,0.04))',
    },
    efeitos: {
      glow: '0 0 20px rgba(100, 116, 139, 0.2)',
      glowHover: '0 0 30px rgba(14, 165, 233, 0.3)',
      shadowCard: '0 4px 20px rgba(0, 0, 0, 0.15)',
      blur: '8px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'dourado-nobre': {
    nome: 'Dourado Nobre',
    icone: '👑',
    descricao: 'Luxo, prestígio e conquista',
    personalidade: 'Premium • Exclusivo • Vencedor',
    modoPreferido: 'escuro',
    cores: {
      primary: '#eab308',
      secondary: '#ca8a04',
      accent: '#f59e0b',
      success: '#10b981',
      warning: '#f97316',
      danger: '#dc2626',
      info: '#8b5cf6',
    },
    superficies: {
      escuro: {
        bgPrimary: '#1a1400',
        bgSecondary: '#2a2100',
        bgCard: '#3d3008',
        bgCardHover: '#4d3d10',
        textPrimary: '#fef9c3',
        textSecondary: '#fde047',
        textMuted: '#a16207',
        borderColor: '#713f12',
      },
      claro: {
        bgPrimary: '#fefce8',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#fef9c3',
        textPrimary: '#713f12',
        textSecondary: '#854d0e',
        textMuted: '#a16207',
        borderColor: '#fef08a',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #eab308 0%, #f59e0b 50%, #f97316 100%)',
      subtle: 'linear-gradient(135deg, rgba(234,179,8,0.12), rgba(245,158,11,0.06))',
    },
    efeitos: {
      glow: '0 0 50px rgba(234, 179, 8, 0.4)',
      glowHover: '0 0 70px rgba(245, 158, 11, 0.5)',
      shadowCard: '0 8px 32px rgba(234, 179, 8, 0.2)',
      blur: '16px',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  'gelo-artico': {
    nome: 'Gelo Ártico',
    icone: '❄️',
    descricao: 'Frescor limpo e clareza mental',
    personalidade: 'Cristalino • Leve • Puro',
    modoPreferido: 'claro',
    cores: {
      primary: '#06b6d4',
      secondary: '#0ea5e9',
      accent: '#a855f7',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#3b82f6',
    },
    superficies: {
      escuro: {
        bgPrimary: '#020617',
        bgSecondary: '#0f172a',
        bgCard: '#1e293b',
        bgCardHover: '#293548',
        textPrimary: '#f0f9ff',
        textSecondary: '#a5f3fc',
        textMuted: '#0891b2',
        borderColor: '#164e63',
      },
      claro: {
        bgPrimary: '#f0fdff',
        bgSecondary: '#ffffff',
        bgCard: '#ffffff',
        bgCardHover: '#ecfeff',
        textPrimary: '#164e63',
        textSecondary: '#155e75',
        textMuted: '#0891b2',
        borderColor: '#a5f3fc',
      },
    },
    gradientes: {
      hero: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #a855f7 100%)',
      subtle: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(168,85,247,0.04))',
    },
    efeitos: {
      glow: '0 0 40px rgba(6, 182, 212, 0.3)',
      glowHover: '0 0 60px rgba(168, 85, 247, 0.4)',
      shadowCard: '0 8px 32px rgba(6, 182, 212, 0.1)',
      blur: '24px',
    },
  },
};

// ═══════════════════════════════════════════════════════════════════
// FONTES, TAMANHOS, ESTILOS, BACKGROUNDS
// ═══════════════════════════════════════════════════════════════════

export const FONTES = [
  { valor: 'Inter', nome: 'Inter', descricao: 'Moderna e limpa (padrão)', exemplo: 'Aa Bb Cc 123' },
  { valor: 'Roboto', nome: 'Roboto', descricao: 'Google, muito legível', exemplo: 'Aa Bb Cc 123' },
  { valor: 'Poppins', nome: 'Poppins', descricao: 'Amigável e arredondada', exemplo: 'Aa Bb Cc 123' },
  { valor: 'Ubuntu', nome: 'Ubuntu', descricao: 'Técnica e moderna', exemplo: 'Aa Bb Cc 123' },
  { valor: 'Nunito', nome: 'Nunito', descricao: 'Suave e agradável', exemplo: 'Aa Bb Cc 123' },
];

export const TAMANHOS = {
  'compacto': { nome: 'Compacto', escala: 0.9, descricao: 'Mais informação na tela' },
  'normal':   { nome: 'Normal',   escala: 1.0, descricao: 'Padrão equilibrado' },
  'grande':   { nome: 'Grande',   escala: 1.15, descricao: 'Mais confortável para leitura' },
};

export const ESTILOS_CARDS = {
  'arredondado': { nome: 'Arredondado', icone: '🔵', borderRadius: '16px' },
  'quadrado':    { nome: 'Quadrado',    icone: '⬜', borderRadius: '4px' },
  'minimalista': { nome: 'Minimalista', icone: '➖', borderRadius: '8px' },
};

export const BACKGROUND_PATTERNS = {
  'aurora': {
    nome: 'Aurora',
    icone: '🌌',
    css: (cores) => `
      radial-gradient(ellipse at 20% 50%, ${cores.primary}20 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, ${cores.secondary}20 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, ${cores.accent}15 0%, transparent 50%)
    `,
  },
  'grid': {
    nome: 'Grade',
    icone: '⚏',
    css: (cores) => `
      linear-gradient(${cores.primary}12 1px, transparent 1px),
      linear-gradient(90deg, ${cores.primary}12 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  },
  'dots': {
    nome: 'Pontos',
    icone: '⋯',
    css: (cores) => `radial-gradient(${cores.primary}25 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  },
  'waves': {
    nome: 'Ondas',
    icone: '〰️',
    css: (cores) => `
      radial-gradient(circle at 10% 20%, ${cores.primary}18 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, ${cores.secondary}18 0%, transparent 20%),
      radial-gradient(circle at 50% 50%, ${cores.accent}10 0%, transparent 30%)
    `,
  },
  'none': {
    nome: 'Nenhum',
    icone: '⚪',
    css: () => 'none',
  },
};

// ═══════════════════════════════════════════════════════════════════
// APLICADOR DE TEMA (expandido)
// ═══════════════════════════════════════════════════════════════════

export function aplicarTema(configuracoes) {
  const tema = TEMAS[configuracoes.tema] || TEMAS['roxo-noturno'];
  const cores = configuracoes.corPersonalizada || tema.cores;
  const modoTema = configuracoes.modoTema || tema.modoPreferido || 'escuro';
  const tamanho = TAMANHOS[configuracoes.tamanhoTexto] || TAMANHOS['normal'];
  const estilo = ESTILOS_CARDS[configuracoes.estiloCards] || ESTILOS_CARDS['arredondado'];
  const pattern = BACKGROUND_PATTERNS[configuracoes.backgroundPattern] || BACKGROUND_PATTERNS['aurora'];
  const fonte = configuracoes.fonte || 'Inter';

  // Modo automático
  let modoFinal = modoTema;
  if (modoTema === 'auto') {
    const hora = new Date().getHours();
    modoFinal = (hora >= 6 && hora < 18) ? 'claro' : 'escuro';
  }

  const root = document.documentElement;

  // ─── CORES ACCENT ─────────────────────────────────────
  root.style.setProperty('--accent-blue', cores.primary);
  root.style.setProperty('--accent-purple', cores.secondary);
  root.style.setProperty('--accent-pink', cores.accent);
  root.style.setProperty('--accent-green', cores.success);
  root.style.setProperty('--accent-orange', cores.warning);
  root.style.setProperty('--accent-red', cores.danger);
  root.style.setProperty('--accent-cyan', cores.info);

  // ─── GRADIENTES ─────────────────────────────────────
  root.style.setProperty('--gradient-1', `linear-gradient(135deg, ${cores.primary}, ${cores.secondary})`);
  root.style.setProperty('--gradient-2', `linear-gradient(135deg, ${cores.secondary}, ${cores.accent})`);
  root.style.setProperty('--gradient-3', `linear-gradient(135deg, ${cores.success}, ${cores.info})`);
  root.style.setProperty('--gradient-4', `linear-gradient(135deg, ${cores.warning}, ${cores.danger})`);
  root.style.setProperty('--gradient-hero', tema.gradientes?.hero || `linear-gradient(135deg, ${cores.primary}, ${cores.accent})`);
  root.style.setProperty('--gradient-subtle', tema.gradientes?.subtle || 'transparent');

  // ─── SUPERFÍCIES ─────────────────────────────────
  const superficies = tema.superficies?.[modoFinal] || (modoFinal === 'claro' ? {
    bgPrimary: '#f8fafc', bgSecondary: '#ffffff', bgCard: '#ffffff', bgCardHover: '#f1f5f9',
    textPrimary: '#0f172a', textSecondary: '#475569', textMuted: '#94a3b8', borderColor: '#e2e8f0',
  } : {
    bgPrimary: '#0a0a1a', bgSecondary: '#111128', bgCard: '#16163a', bgCardHover: '#1e1e4a',
    textPrimary: '#f0f0ff', textSecondary: '#9999cc', textMuted: '#666699', borderColor: '#2a2a5a',
  });

  root.style.setProperty('--bg-primary', superficies.bgPrimary);
  root.style.setProperty('--bg-secondary', superficies.bgSecondary);
  root.style.setProperty('--bg-card', superficies.bgCard);
  root.style.setProperty('--bg-card-hover', superficies.bgCardHover);
  root.style.setProperty('--text-primary', superficies.textPrimary);
  root.style.setProperty('--text-secondary', superficies.textSecondary);
  root.style.setProperty('--text-muted', superficies.textMuted);
  root.style.setProperty('--border-color', superficies.borderColor);

  // ─── EFEITOS ────────────────────────────────────
  const efeitos = tema.efeitos || {};
  root.style.setProperty('--shadow-card', efeitos.shadowCard || '0 4px 20px rgba(0, 0, 0, 0.2)');
  root.style.setProperty('--glow-primary', efeitos.glow || 'none');
  root.style.setProperty('--glow-hover', efeitos.glowHover || 'none');
  root.style.setProperty('--blur-strength', efeitos.blur || '16px');
  root.style.setProperty('--shadow-glow', efeitos.glow || '0 0 30px rgba(79,125,249,0.15)');

  // ─── FONTE ──────────────────────────────────────
  const fonteUrl = `https://fonts.googleapis.com/css2?family=${fonte.replace(/ /g, '+')}:wght@300;400;500;600;700;800;900&display=swap`;
  let linkExistente = document.getElementById('fonte-dinamica');
  if (!linkExistente) {
    linkExistente = document.createElement('link');
    linkExistente.id = 'fonte-dinamica';
    linkExistente.rel = 'stylesheet';
    document.head.appendChild(linkExistente);
  }
  linkExistente.href = fonteUrl;
  document.body.style.fontFamily = `'${fonte}', sans-serif`;

  // ─── TAMANHO ────────────────────────────────────
  root.style.fontSize = `${16 * tamanho.escala}px`;

  // ─── BORDER-RADIUS ──────────────────────────────
  root.style.setProperty('--card-radius', estilo.borderRadius);

  // ─── BACKGROUND PATTERN ────────────────────────
  let styleBg = document.getElementById('bg-pattern-style');
  if (!styleBg) {
    styleBg = document.createElement('style');
    styleBg.id = 'bg-pattern-style';
    document.head.appendChild(styleBg);
  }
  styleBg.innerHTML = `
    body::before {
      background: ${pattern.css(cores)} !important;
      ${pattern.backgroundSize ? `background-size: ${pattern.backgroundSize} !important;` : ''}
    }
  `;

  // ─── ANIMAÇÕES ─────────────────────────────────
  let animStyle = document.getElementById('animacoes-style');
  if (!animStyle) {
    animStyle = document.createElement('style');
    animStyle.id = 'animacoes-style';
    document.head.appendChild(animStyle);
  }
  if (!configuracoes.animacoes) {
    animStyle.innerHTML = `
      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }
    `;
  } else {
    animStyle.innerHTML = '';
  }

  // ─── TRANSIÇÃO SUAVE ENTRE TEMAS ───────────────
  let transStyle = document.getElementById('theme-transition-style');
  if (!transStyle) {
    transStyle = document.createElement('style');
    transStyle.id = 'theme-transition-style';
    transStyle.innerHTML = `
      body, .card, [class*="Card"], button, input, select, textarea {
        transition: 
          background-color 0.5s ease, 
          color 0.4s ease, 
          border-color 0.4s ease, 
          box-shadow 0.4s ease !important;
      }
    `;
    document.head.appendChild(transStyle);
  }
}