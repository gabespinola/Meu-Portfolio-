/* ================================================
   CABEÇALHO: sombra ao rolar a página
   ================================================ */
const header = document.querySelector('.site-header');

function atualizarHeader() {
    header.classList.toggle('rolou', window.scrollY > 8);
}
window.addEventListener('scroll', atualizarHeader, { passive: true });
atualizarHeader();


/* ================================================
   MENU MOBILE
   ================================================ */
const btnAbrir   = document.querySelector('.btn-abrir-menu');
const btnFechar  = document.querySelector('.btn-fechar');
const menuMobile = document.getElementById('menuMobile');
const menuOverlay = document.getElementById('menuOverlay');

function abrirMenu() {
    menuMobile.classList.add('open');
    menuOverlay.classList.add('active');
    menuMobile.setAttribute('aria-hidden', 'false');
    btnAbrir.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    btnFechar.focus();
}

function fecharMenu() {
    menuMobile.classList.remove('open');
    menuOverlay.classList.remove('active');
    menuMobile.setAttribute('aria-hidden', 'true');
    btnAbrir.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

btnAbrir.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
menuOverlay.addEventListener('click', fecharMenu);

menuMobile.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharMenu();
});


/* ================================================
   DADOS DOS PROJETOS
   ------------------------------------------------
   categoria: "profissional" ou "pessoal"
   img:       caminho da imagem
   fit:       "cover" (preenche) ou "contain" (mostra inteira)
   pos:       posição da imagem (ex.: "center 18%")
   bg:        cor de fundo quando fit = "contain"
   linkDemo:  deixe "" se ainda não houver demo
   ================================================ */
const todosProjetos = [
    /* ---------- PROFISSIONAIS ---------- */
    {
        categoria: "profissional",
        titulo: "Dr. Kaique Almeida, Oncologia",
        tag: "Landing page",
        resumo: "Site institucional para médico oncologista, com agendamento e contato por WhatsApp.",
        descricao: "Landing Page institucional para médico oncologista, com foco em transmitir confiança e humanização no cuidado ao paciente. Conta com seções de especialidades, apresentação profissional, botões de agendamento de consulta e contato rápido via WhatsApp, além de design responsivo e visual clean alinhado à identidade da marca.",
        techs: ["HTML", "CSS", "JavaScript"],
        img: "imagens/drKaique.png",
        fit: "cover",
        pos: "center 18%",
        linkDemo: "https://www.drkaiqueoncologista.com/",
        linkGithub: "https://github.com/gabespinola/Landding-Page_DrKaiqueAlmeida"
    },
    {
        categoria: "profissional",
        titulo: "Dr. Germano Segundo, Cirurgia Vascular",
        tag: "Landing page",
        resumo: "Site institucional para cirurgião vascular, com layout elegante e foco em agendamento.",
        descricao: "Landing Page institucional para médico especialista em cirurgia vascular e endovascular, com layout elegante e tipografia sofisticada. Estrutura com seções de sobre, áreas de atuação e contato, além de botões de call-to-action para agendamento de consulta, com design responsivo para desktop e mobile.",
        techs: ["HTML", "CSS", "JavaScript"],
        img: "imagens/drGermano.png",
        fit: "cover",
        pos: "center 22%",
        linkDemo: "https://drgermanovascular.com/",
        linkGithub: "https://github.com/gabespinola/Landding-Page_DrGermanoSegundo"
    },
    {
        categoria: "profissional",
        titulo: "Landing Page, Clínica de Fisioterapia",
        tag: "Landing page",
        resumo: "Página para fisioterapeuta com foco em captação de pacientes.",
        descricao: "Landing Page desenvolvida para uma fisioterapeuta, com foco em apresentação profissional e captação de pacientes. O projeto conta com design responsivo, navegação intuitiva, integração com WhatsApp e e-mail, formulário de contato via Formspree, menu mobile, seções de benefícios, serviços e contato, além de layout moderno e otimizado para proporcionar uma boa experiência em dispositivos móveis e desktop. Desenvolvida utilizando HTML, CSS e JavaScript, com foco em desempenho, acessibilidade e usabilidade.",
        techs: ["HTML", "CSS", "JavaScript", "Formspree"],
        img: "imagens/fisioterapia-port.jpeg",
        fit: "cover",
        pos: "center top",
        linkDemo: "https://willowy-puffpuff-1fde3b.netlify.app/",
        linkGithub: "https://github.com/gabespinola/Landding-page-"
    },

    /* ---------- PESSOAIS ---------- */
    {
        categoria: "pessoal",
        titulo: "Clinicflow",
        tag: "Full stack",
        resumo: "Sistema de gestão de clínica com Angular no front-end e Spring Boot no back-end.",
        descricao: "Sistema de gerenciamento de clínica desenvolvido com Angular no front-end e Java com Spring Boot no back-end. A aplicação permite o cadastro e gerenciamento de pacientes, médicos e consultas, com integração entre front-end e API REST, formulários validados e interface desenvolvida com Angular Material.",
        techs: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Angular Material", "REST API"],
        img: "imagens/clinicflow.png",
        fit: "contain",
        pos: "center",
        bg: "#f5f6f8",
        linkDemo: "",
        linkGithub: "https://github.com/gabespinola/Clinicflow"
    },
    {
        categoria: "pessoal",
        titulo: "Sistema Financeiro",
        tag: "Full stack",
        resumo: "Controle de finanças pessoais com dashboard e gráficos de acompanhamento.",
        descricao: "Controle de finanças pessoais com registro de receitas e despesas, dashboard com resumo financeiro e gráficos de acompanhamento.",
        techs: ["HTML", "CSS", "JavaScript", "Node.js", "Chart.js"],
        img: "imagens/financeiro-port.png",
        fit: "cover",
        pos: "center top",
        linkDemo: "",
        linkGithub: "https://github.com/gabespinola/Sistema-de-controle-financeiro-Fullstack"
    },
    {
        categoria: "pessoal",
        titulo: "Biblioteca Java API",
        tag: "Java e API",
        resumo: "Gerenciamento de acervo com integração a uma API externa de livros.",
        descricao: "Sistema de gerenciamento de biblioteca que integra com API externa para buscar informações sobre livros, cadastrar e gerenciar o acervo.",
        techs: ["Java", "Spring Boot", "REST API", "MySQL"],
        img: "imagens/Captura de tela 2026-06-15 150606.png",
        fit: "cover",
        pos: "center top",
        linkDemo: "",
        linkGithub: "https://github.com/gabespinola/Biblioteca-API-Projeto-em-Java-com-Spring-Boot"
    },
    {
        categoria: "pessoal",
        titulo: "Weather App",
        tag: "Front-end",
        resumo: "Previsão do tempo em tempo real consumindo a API OpenWeatherMap.",
        descricao: "Aplicação de clima em tempo real que consome a API OpenWeatherMap. O usuário digita uma cidade e visualiza temperatura atual, umidade, velocidade do vento e condição do tempo.",
        techs: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        img: "imagens/Captura de tela 2026-06-09 095603.png",
        fit: "cover",
        pos: "center top",
        linkDemo: "",
        linkGithub: "https://github.com/gabespinola/weather-app"
    },
    {
        categoria: "pessoal",
        titulo: "Tela de Login em React",
        tag: "React",
        resumo: "Tela de login simples construída com React.",
        descricao: "Projeto simples de uma tela de login utilizando React.",
        techs: ["React"],
        img: "imagens/react.png",
        fit: "contain",
        pos: "center",
        bg: "#f5f6f8",
        linkDemo: "",
        linkGithub: "https://github.com/gabespinola/pagina-de-login-"
    }
];

const grupos = {
    profissional: todosProjetos.filter(p => p.categoria === 'profissional'),
    pessoal:      todosProjetos.filter(p => p.categoria === 'pessoal')
};

let projetos = grupos.profissional;


/* ================================================
   VITRINE DE PROJETOS
   ================================================ */
const lista     = document.getElementById('vitrineLista');
const painel    = document.getElementById('vitrinePainel');
const vitImg    = document.getElementById('vitrineImg');
const vitTag    = document.getElementById('vitrineTag');
const vitTitulo = document.getElementById('vitrineTitulo');
const vitDesc   = document.getElementById('vitrineDesc');
const vitTechs  = document.getElementById('vitrineTechs');
const vitLinks  = document.getElementById('vitrineLinks');

const abas = [];
let atual = -1;

function escapar(texto) {
    const el = document.createElement('div');
    el.textContent = texto;
    return el.innerHTML;
}

function estiloImagem(p) {
    const fit = p.fit || 'cover';
    const pos = p.pos || 'center';
    const bg  = p.bg ? `background-color:${p.bg};` : '';
    return `${bg}background-image:url('${encodeURI(p.img)}');background-size:${fit};background-position:${pos};background-repeat:no-repeat;`;
}

function selecionar(i, { animar = true, focar = false } = {}) {
    if (i === atual) {
        if (focar) abas[i].focus();
        return;
    }

    const p = projetos[i];
    atual = i;

    abas.forEach((aba, n) => {
        const ativa = n === i;
        aba.setAttribute('aria-selected', ativa);
        aba.tabIndex = ativa ? 0 : -1;
    });

    vitImg.style.cssText = estiloImagem(p);
    vitImg.setAttribute('aria-label', `Captura de tela do projeto ${p.titulo}`);
    vitTag.textContent = p.tag;
    vitTitulo.textContent = p.titulo;
    vitDesc.textContent = p.descricao;
    vitTechs.innerHTML = p.techs.map(t => `<span>${escapar(t)}</span>`).join('');

    const demo = p.linkDemo
        ? `<a href="${p.linkDemo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
               <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> Ver site
           </a>`
        : '';
    const classeGithub = p.linkDemo ? 'btn-outline' : 'btn-primary';

    vitLinks.innerHTML = `
        ${demo}
        <a href="${p.linkGithub}" class="btn ${classeGithub}" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github" aria-hidden="true"></i> Ver código no GitHub
        </a>
    `;

    painel.setAttribute('aria-labelledby', `aba-${i}`);

    if (animar) {
        painel.classList.remove('troca');
        void painel.offsetWidth;
        painel.classList.add('troca');
    }

    if (focar) abas[i].focus();
    if (animar) abas[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}

function montarLista() {
    lista.innerHTML = '';
    abas.length = 0;
    atual = -1;

    projetos.forEach((p, i) => {
        const aba = document.createElement('button');
        aba.type = 'button';
        aba.id = `aba-${i}`;
        aba.className = 'vitrine-item';
        aba.setAttribute('role', 'tab');
        aba.setAttribute('aria-controls', 'vitrinePainel');
        aba.innerHTML = `
            <span class="vitrine-item-titulo">${escapar(p.titulo)}</span>
            <span class="vitrine-item-tag">${escapar(p.tag)}</span>
        `;

        aba.addEventListener('click', () => selecionar(i));

        aba.addEventListener('keydown', e => {
            const total = projetos.length;
            let destino = null;

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') destino = (i + 1) % total;
            if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  destino = (i - 1 + total) % total;
            if (e.key === 'Home') destino = 0;
            if (e.key === 'End')  destino = total - 1;

            if (destino !== null) {
                e.preventDefault();
                selecionar(destino, { focar: true });
            }
        });

        lista.appendChild(aba);
        abas.push(aba);
    });

    selecionar(0, { animar: false });
}

const botoesCategoria = document.querySelectorAll('.categoria-btn');

function trocarCategoria(categoria) {
    projetos = grupos[categoria];

    botoesCategoria.forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.categoria === categoria);
    });

    montarLista();
}

botoesCategoria.forEach(btn => {
    btn.addEventListener('click', () => trocarCategoria(btn.dataset.categoria));
});

trocarCategoria('profissional');


/* ================================================
   FORMULÁRIO DE CONTATO (Formspree, sem recarregar)
   ================================================ */
const form   = document.getElementById('formContato');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;
    status.className = 'form-status';
    status.textContent = 'Enviando...';

    try {
        const resposta = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        });

        if (!resposta.ok) throw new Error('Falha no envio');

        form.reset();
        status.className = 'form-status ok';
        status.textContent = 'Mensagem enviada. Obrigado pelo contato!';
    } catch (erro) {
        status.className = 'form-status erro';
        status.textContent = 'Não foi possível enviar. Tente novamente ou escreva para gabrielsespinola@gmail.com.';
    } finally {
        botao.disabled = false;
    }
});


/* ================================================
   RODAPÉ: ano atual
   ================================================ */
document.getElementById('ano').textContent = new Date().getFullYear();