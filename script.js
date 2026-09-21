const btnAbrir   = document.querySelector('.btn-abrir-menu');
const btnFechar  = document.querySelector('.btn-fechar');
const menuMobile = document.querySelector('.menu-mobile');
const overlay    = document.querySelector('.menu-overlay');

function abrirMenu() {
    menuMobile.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharMenu() {
    menuMobile.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

btnAbrir.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});


/* ================================================
   DADOS DOS PROJETOS
   ================================================ */

const projetos = [

  /* ── 01 — TO DO LIST ───────────────────────── */
  {
    titulo: "To Do List",
    tag: "Frontend",
    descricao: "Lista de tarefas interativa com funcionalidades de adicionar, concluir e remover tarefas. Interface limpa com persistência local dos dados.",
    techs: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    imgStyle: "background-image: url('imagens/tarefas-port_1.png'); background-size: contain; background-repeat: no-repeat;",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/To-do-list"
  },


  /* ── 02 — WEATHER APP ──────────────────────── */
  {
    titulo: "Weather App",
    tag: "Frontend",
    descricao: "Aplicação de clima em tempo real que consome a API OpenWeatherMap. O usuário digita uma cidade e visualiza temperatura atual, umidade, velocidade do vento e condição do tempo.",
    techs: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-09 095603.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/weather-app"
  },


  /* ── 03 — CADASTRO DE FUNCIONÁRIOS ────────── */
  {
    titulo: "Cadastro de Funcionários",
    tag: "Angular",
    descricao: "Sistema de cadastro com operações de CRUD completas desenvolvido em Angular. Permite adicionar, editar e excluir registros com formulários validados.",
    techs: ["Angular", "TypeScript", "HTML", "CSS"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-15 093935.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Sistema-de-Cadastro-CRUD-"
  },


  /* ── 04 — TELA DE LOGIN REACT ──────────────── */
  {
    titulo: "Tela de Login — React",
    tag: "React",
    descricao: "Projeto simples de uma tela de login utilizando React",
    techs: ["React"],
    imgStyle: "background-image: url('imagens/react.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/pagina-de-login-"
  },


  /* ── 05 — CONVERSOR JAVA ───────────────────── */
  {
    titulo: "Conversor Java",
    tag: "Java",
    descricao: "Aplicação desktop em Java para conversão de unidades e moedas, desenvolvida para aprimorar conceitos de orientação a objetos.",
    techs: ["Java", "Swing", "OOP"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-15 104224.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Conversor-de-Temperatura--java"
  },


  /* ── 06 — BIBLIOTECA JAVA API ──────────────── */
  {
    titulo: "Biblioteca Java API",
    tag: "Java · API",
    descricao: "Sistema de gerenciamento de biblioteca que integra com API externa para buscar informações sobre livros, cadastrar e gerenciar o acervo.",
    techs: ["Java", "Spring Boot", "REST API", "MySQL"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-15 150606.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Biblioteca-API-Projeto-em-Java-com-Spring-Boot"
  },


  /* ── 07 — SISTEMA FINANCEIRO ───────────────── */
  {
    titulo: "Sistema Financeiro",
    tag: "Fullstack",
    descricao: "Controle de finanças pessoais com registro de receitas e despesas, dashboard com resumo financeiro e gráficos de acompanhamento.",
    techs: ["HTML", "CSS", "JavaScript", "Node.js", "Chart.js"],
    imgStyle: "background-image: url('imagens/financeiro-port.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Sistema-de-controle-financeiro-Fullstack"
  },


  /* ── 08 — CLÍNICA DE FISIOTERAPIA ──────────── */
  {
    titulo: "Landing Page - Clínica de Fisioterapia",
    tag: "HTML/CSS/JS",
    descricao: "Landing Page desenvolvida para uma fisioterapeuta, com foco em apresentação profissional e captação de pacientes. O projeto conta com design responsivo, navegação intuitiva, integração com WhatsApp e e-mail, formulário de contato via Formspree, menu mobile, seções de benefícios, serviços e contato, além de layout moderno e otimizado para proporcionar uma boa experiência em dispositivos móveis e desktop. Desenvolvida utilizando HTML, CSS e JavaScript, com foco em desempenho, acessibilidade e usabilidade.",
    techs: ["HTML", "CSS", "JavaScript", "Formspree"],
    imgStyle: "background-image: url('imagens/fisioterapia-port.jpeg');",
    linkDemo: "https://willowy-puffpuff-1fde3b.netlify.app/",
    linkGithub: "https://github.com/gabespinola/Landding-page-"
  },


  /* ── 09 — DR. KAIQUE ───────────────────────── */
  {
    titulo: "Dr. Kaique Almeida - Oncologia",
    tag: "Landing Page",
    descricao: "Landing Page institucional para médico oncologista, com foco em transmitir confiança e humanização no cuidado ao paciente. Conta com seções de especialidades, apresentação profissional, botões de agendamento de consulta e contato rápido via WhatsApp, além de design responsivo e visual clean alinhado à identidade da marca.",
    techs: ["HTML", "CSS", "JavaScript"],
    imgStyle: "background-image: url('imagens/drKaique.png');",
    modalClass: "modal-img-kaique",
    linkDemo: "https://www.drkaiqueoncologista.com/",
    linkGithub: "https://github.com/gabespinola/Landding-Page_DrKaiqueAlmeida"
  },


  /* ── 10 — DR. GERMANO ──────────────────────── */
  {
    titulo: "Dr. Germano Segundo - Cirurgia Vascular",
    tag: "Landing Page",
    descricao: "Landing Page institucional para médico especialista em cirurgia vascular e endovascular, com layout elegante e tipografia sofisticada. Estrutura com seções de sobre, áreas de atuação e contato, além de botões de call-to-action para agendamento de consulta, com design responsivo para desktop e mobile.",
    techs: ["HTML", "CSS", "JavaScript"],
    imgStyle: "background-image: url('imagens/drGermano.png');",
    modalClass: "modal-img-germano",
    linkDemo: "https://drgermanovascular.com/",
    linkGithub: "https://github.com/gabespinola/Landding-Page_DrGermanoSegundo"
  },


 /* ── 11 — CLINICFLOW ───────────────────────── */
{
  titulo: "Clinicflow",
  tag: "Fullstack",
  descricao: "Sistema de gerenciamento de clínica desenvolvido com Angular no front-end e Java com Spring Boot no back-end. A aplicação permite o cadastro e gerenciamento de pacientes, médicos e consultas, com integração entre front-end e API REST, formulários validados e interface desenvolvida com Angular Material.",
  techs: [
    "Angular",
    "TypeScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Angular Material",
    "REST API"
  ],
  imgStyle: "background-image: url('imagens/clinicflow.png'); background-size: contain; background-position: center; background-repeat: no-repeat;",
  modalClass: "modal-img-clinicflow",
  linkDemo: "#",
  linkGithub: "https://github.com/gabespinola/Clinicflow"
}

];


/* ================================================
   ABRIR MODAL
   ================================================ */

function abrirModal(index) {

  const p = projetos[index];
  const overlay = document.getElementById('modalOverlay');

  const modalImgEl = document.getElementById('modalImg');

  modalImgEl.style.cssText = p.imgStyle;

  modalImgEl.className =
    'modal-img' + (p.modalClass ? ' ' + p.modalClass : '');

  document.getElementById('modalTag').textContent = p.tag;

  document.getElementById('modalTitulo').textContent = p.titulo;

  document.getElementById('modalDesc').textContent = p.descricao;


  /* ── TECNOLOGIAS ─────────────────────────── */

  const techsEl = document.getElementById('modalTechs');

  techsEl.innerHTML = p.techs
    .map(t => `<span>${t}</span>`)
    .join('');


  /* ── LINKS ───────────────────────────────── */

  const linksEl = document.getElementById('modalLinks');

  linksEl.innerHTML = `
    <a href="${p.linkDemo}" class="btn-primary" target="_blank">
      <i class="bi bi-eye"></i> Ver Demo
    </a>

    <a href="${p.linkGithub}" class="btn-outline" target="_blank">
      <i class="bi bi-github"></i> GitHub
    </a>
  `;


  overlay.classList.add('open');

  document.body.style.overflow = 'hidden';
}


/* ================================================
   FECHAR MODAL
   ================================================ */

function fecharModal() {

  document
    .getElementById('modalOverlay')
    .classList.remove('open');

  document.body.style.overflow = '';
}


/* ================================================
   FECHAR MODAL COM ESC
   ================================================ */

document.addEventListener('keydown', e => {

  if (e.key === 'Escape') {
    fecharModal();
  }

});


/* ================================================
   ANIMAÇÃO DE ENTRADA
   ================================================ */

const tlItems = document.querySelectorAll('.tl-item');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.15
});


tlItems.forEach(item => observer.observe(item));