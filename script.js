
const CONFIG = {
  nome: "Marcos Vinícius",
  titulo: "Desenvolvedor Web",
  bio: "Apaixonado por criar soluções digitais com código limpo e interfaces bonitas.",

  github: "https://github.com/marcosestumano",      
  linkedin: "https://www.linkedin.com/in/marcosviniicius/",   
  email: "marcosviniciiusz77@gmail.com",
};

const PROJECTS = [
  {
    titulo: "Calculadora de IMC",
    descricao: "Ferramenta web para calcular o Índice de Massa Corporal. O usuário informa peso e altura e recebe o IMC com a classificação correspondente (abaixo do peso, normal, sobrepeso, obesidade).",
    emoji: "⚖️",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "live",
    github: "https://github.com/MarcxS77/Calculadora-IMC",
    demo: "https://calculadora-imc-eight-kappa.vercel.app/",
  },
  {
    titulo: "Spotify Clone",
    descricao: "Recriação da interface do Spotify focada em fidelidade visual. Projeto de estudo para praticar layout com CSS Flexbox/Grid e componentização de UI.",
    emoji: "🎵",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "archived",
    github: "https://github.com/MarcxS77/Spotify-Teste",
    demo: "https://spotify-teste.vercel.app/",
  },
  {
    titulo: "Pokédex",
    descricao: "Pokédex interativa que consome a PokéAPI para exibir informações de cada Pokémon — tipos, stats e imagens. Ótimo exercício de consumo de APIs REST e renderização dinâmica.",
    emoji: "🔴",
    tags: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    status: "live",
    github: "https://github.com/MarcxS77/pokedex",
    demo: "https://pokedex-self-zeta.vercel.app/",
  },
  {
    titulo: "Landing Page PPB",
    descricao: "Landing page profissional criada e publicada na Vercel. Foco em conversão, com seções de apresentação, benefícios e chamada para ação.",
    emoji: "🚀",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "live",
    github: "https://landing-ppb.vercel.app/",
    demo: "https://landing-ppb.vercel.app/",
  },
  {
    titulo: "Verificador de Tempo",
    descricao: "App de previsão do tempo que consome uma API meteorológica para exibir condições climáticas em tempo real com base na cidade pesquisada.",
    emoji: "🌤️",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    status: "live",
    github: "https://github.com/MarcxS77/Verirficar-Tempo",
    demo: "https://verirficar-tempo.vercel.app/",
  },
  {
    titulo: "Guia de Início para Staff",
    descricao: "Guia de onboarding interativo para novos membros de equipe. Centraliza informações, processos e boas-vindas em uma interface clara e acessível.",
    emoji: "📋",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "live",
    github: "https://github.com/MarcxS77/Start-Guide-Staff-",
    demo: "https://start-guide-staff.vercel.app/",
  },
  {
    titulo: "Landing Page Simples",
    descricao: "Template de landing page clean e responsiva, construída do zero sem frameworks. Base reutilizável para futuros projetos e clientes.",
    emoji: "🖥️",
    tags: ["HTML", "CSS"],
    status: "archived",
    github: "https://github.com/MarcxS77/LANDING-PAGE-SIMPLE",
    demo: "",
  },
  {
    titulo: "Sophit",
    descricao: "Plataforma ou aplicativo voltado para fitness e bem-estar. Interface moderna para acompanhamento de treinos, hábitos ou metas físicas.",
    emoji: "💪",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "dev",
    github: "https://github.com/MarcxS77/sophit",
    demo: "https://sophit.vercel.app/login",
  },
  {
    titulo: "Lily's Finance",
    descricao: "Sistema de gestão financeira pessoal. Permite registrar receitas, despesas e acompanhar o saldo, ajudando no controle do orçamento do dia a dia.",
    emoji: "💰",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "live",
    github: "https://github.com/MarcxS77/Lily-s-finance-management",
    demo: "https://github.com/marcosestumano/Lily-s-finance-management",
  },
  {
    titulo: "CTO Finder",
    descricao: "Ferramenta para encontrar e listar perfis de CTOs de empresas. Facilita prospecção e pesquisa de lideranças técnicas no mercado.",
    emoji: "🔍",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "live",
    github: "https://github.com/MarcxS77/cto-finder",
    demo: "https://cto-finder.vercel.app/",
  },

];


const SKILLS = [
  {
    categoria: "Frontend",
    cor: "#6d28d9",
    itens: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    categoria: "Backend",
    cor: "#3b82f6",
    itens: ["Node.js", "Express", "REST APIs"],
  },
  {
    categoria: "Banco de Dados",
    cor: "#10b981",
    itens: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    categoria: "Ferramentas",
    cor: "#f59e0b",
    itens: ["Git", "GitHub", "VS Code", "Figma"],
  },
  // ← ADICIONE MAIS CATEGORIAS AQUI
];



const ICONS = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55V14.8c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.75H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>`,
};

const STATUS_MAP = {
  live:     { label: "Live",               cls: "status-live" },
  dev:      { label: "Em desenvolvimento", cls: "status-dev" },
  archived: { label: "Arquivado",          cls: "status-archived" },
};

function renderProjects() {
  const container = document.getElementById("projects-container");
  const countEl   = document.getElementById("proj-count");

  if (countEl) countEl.textContent = PROJECTS.length;

  if (PROJECTS.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 24px;color:var(--text-subtle);">
        <div style="font-size:48px;margin-bottom:16px;">🚀</div>
        <div style="font-size:16px;">
          Seus projetos aparecerão aqui.<br/>
          Adicione o primeiro no array <code style="color:var(--accent-2);background:rgba(109,40,217,.1);padding:2px 6px;border-radius:4px;">PROJECTS</code> em script.js!
        </div>
      </div>`;
    return;
  }

  container.innerHTML = PROJECTS.map(p => {
    const s = STATUS_MAP[p.status] || STATUS_MAP.dev;

    const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");

    const ghBtn = p.github
      ? `<a href="${p.github}" target="_blank" class="project-btn project-btn-gh">${ICONS.github} Repositório</a>`
      : `<span class="project-btn project-btn-gh project-btn-disabled">${ICONS.github} Repositório</span>`;

    const demoBtn = p.demo
      ? `<a href="${p.demo}" target="_blank" class="project-btn project-btn-demo">${ICONS.externalLink} Ver</a>`
      : `<span class="project-btn project-btn-demo project-btn-disabled">${ICONS.externalLink} Ver</span>`;

    const footer = `<div class="project-footer">${ghBtn}${demoBtn}</div>`;

    return `
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon">${p.emoji}</div>
          <div class="project-status ${s.cls}">
            <span class="status-dot"></span>${s.label}
          </div>
        </div>
        <div class="project-title">${p.titulo}</div>
        <div class="project-desc">${p.descricao}</div>
        <div class="project-tags">${tags}</div>
        ${footer}
      </div>`;
  }).join("");
}

function renderSkills() {
  const container = document.getElementById("skills-container");

  container.innerHTML = SKILLS.map(cat => `
    <div class="skill-cat">
      <div class="skill-cat-title">
        <span class="skill-cat-dot" style="background:${cat.cor};box-shadow:0 0 8px ${cat.cor}66;"></span>
        ${cat.categoria}
      </div>
      <div class="skill-list">
        ${cat.itens.map(s => `<span class="skill-pill">${s}</span>`).join("")}
      </div>
    </div>`).join("");
}

function renderContact() {
  const container = document.getElementById("contact-links");
  const links = [];

  if (CONFIG.github)   links.push(`<a href="${CONFIG.github}"        target="_blank" class="contact-link contact-link-gh">${ICONS.github}   GitHub</a>`);
  if (CONFIG.linkedin) links.push(`<a href="${CONFIG.linkedin}"      target="_blank" class="contact-link contact-link-li">${ICONS.linkedin} LinkedIn</a>`);
  if (CONFIG.email)    links.push(`<a href="mailto:${CONFIG.email}"              class="contact-link contact-link-em">${ICONS.email}   ${CONFIG.email}</a>`);

  container.innerHTML = links.join("");
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderContact();
});