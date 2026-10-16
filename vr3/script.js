const inputToggle = document.getElementById('mode');

inputToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

const canvas = document.getElementById("grid");
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouse = { x: -9999, y: -9999 };
    const squareSize = 80;
    const grid = [];

    function initGrid() {
      grid.length = 0;
      for (let x = 0; x < width; x += squareSize) {
        for (let y = 0; y < height; y += squareSize) {
          grid.push({
            x,
            y,
            alpha: 0,
            fading: false,
            lastTouched: 0,
          });
        }
      }
    }

    function getCellAt(x, y) {
      return grid.find(cell =>
        x >= cell.x && x < cell.x + squareSize &&
        y >= cell.y && y < cell.y + squareSize
      );
    }

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const cell = getCellAt(mouse.x, mouse.y);
      if (cell && cell.alpha === 0) {
        cell.alpha = 1;
        cell.lastTouched = Date.now();
        cell.fading = false;
      }
    });

    function drawGrid() {
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();

      for (let i = 0; i < grid.length; i++) {
        const cell = grid[i];

        if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 500) {
          cell.fading = true;
        }

        if (cell.fading) {
          cell.alpha -= 0.02;
          if (cell.alpha <= 0) {
            cell.alpha = 0;
            cell.fading = false;
          }
        }

        if (cell.alpha > 0) {
          const centerX = cell.x + squareSize / 2;
          const centerY = cell.y + squareSize / 2;

          const gradient = ctx.createRadialGradient(
            centerX, centerY, 5,
            centerX, centerY, squareSize
          );
          gradient.addColorStop(0, `rgba(0, 255, 204, ${cell.alpha})`);
          gradient.addColorStop(1, `rgba(0, 255, 204, 0)`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.3;
          ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, squareSize - 1, squareSize - 1);
        }
      }

      requestAnimationFrame(drawGrid);
    }

    initGrid();
    drawGrid();



const telefoneInput = document.getElementById('telefone');

if (telefoneInput) {
  telefoneInput.addEventListener('input', function (e) {
    let numeros = e.target.value.replace(/\D/g, '');

    numeros = numeros.slice(0, 13);

    let textoFormatado = '+';
    if (numeros.length > 0) textoFormatado += numeros.slice(0, 2);
    if (numeros.length > 2) textoFormatado += ' ' + numeros.slice(2, 4);
    if (numeros.length > 4) textoFormatado += ' ' + numeros.slice(4, 9);
    if (numeros.length > 9) textoFormatado += '-' + numeros.slice(9, 13);

    e.target.value = textoFormatado;
  });

  telefoneInput.addEventListener('keydown', function (e) {
    const apagando = e.key === 'Backspace' || e.key === 'Delete';
    if (apagando && e.target.selectionStart <= 1 && e.target.selectionEnd <= 1) {
      e.preventDefault();
    }
  });
}


/* ===== Idioma (PT / EN) ===== */

const traducoes = {
  pt: {
    pageTitle: "Bernardo | Portfólio",
    langAria: "Mudar idioma para inglês",
    themeAria: "Alternar modo escuro",

    navHome: "Home",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navContact: "Contato",

    available: "Disponível para novos projetos",
    role: "Desenvolvedor",
    heroText: "Sou apaixonado por tecnologia e programação e estou sempre buscando aprender e evoluir. Gosto de transformar ideias em projetos e explorar diferentes áreas do desenvolvimento. Aqui você pode conhecer um pouco mais sobre mim, minhas habilidades e os projetos que venho desenvolvendo.",
    btnProjects: "Ver projetos",
    btnContact: "Contato",

    photoAlt: "Foto de Bernardo de Matos Campos",
    aboutTitle: "Sobre mim",
    aboutP1: "Sou estudante do Ensino Médio Técnico em Informática no Cotemig, em Belo Horizonte, com previsão de conclusão em dezembro de 2027. Ao longo da minha formação, venho desenvolvendo conhecimentos em lógica de programação, com prática em C#, HTML, CSS, JavaScript e MySQL, além de fundamentos sólidos de hardware, software e banco de dados.",
    aboutP2: "Tenho domínio do pacote Office e boa capacidade de comunicação, organização e trabalho em equipe. Sou uma pessoa curiosa, com facilidade de adaptação a novos desafios e vontade constante de aprender e evoluir.",
    aboutP3: "Atualmente, estou em busca da minha primeira oportunidade profissional na área de tecnologia. Este portfólio reúne os projetos e conhecimentos que venho construindo ao longo da minha jornada de aprendizado.",
    statYearNumber: "2º",
    statYearLabel: "ano no Cotemig",
    statTechLabel: "Tecnologias",
    techLabel: "Tecnologias",

    projectsLabel: "Meus Trabalhos",
    projectsTitle: "Projetos",
    projectsDesc: "Explore meus principais trabalhos e acompanhe minha evolução prática no desenvolvimento de sistemas e páginas web.",
    p1Alt: "Capa do projeto RPG de Texto",
    p1Title: "RPG de Texto",
    p1Desc: "Projeto de RPG de texto desenvolvido em C#, com foco em lógica de programação e Programação Orientada a Objetos (POO).",
    p2Alt: "Capa do projeto Landing Page",
    p2Title: "Landing Page",
    p2Desc: "Landing page simples feita com HTML, CSS e JavaScript, com o objetivo de aprender a criar páginas web e praticar design.",
    p3Alt: "Capa do projeto Display",
    p3Title: "Projeto Display",
    p3Desc: "Projeto feito com HTML e CSS, com o objetivo de aprender a criar páginas web e design, com foco na propriedade display do CSS (Flexbox).",

    contactTitle: "Vamos conversar?",
    contactDesc: "Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia? Envie uma mensagem e eu retornarei o mais breve possível.",
    phName: "Seu nome",
    phEmail: "Seu e-mail",
    phMessage: "Sua mensagem",
    phoneTitle: "Formato: +55 31 91234-5678",
    send: "Enviar mensagem",

    copy: "© 2026 Bernardo Matos Campos. Todos os direitos reservados."
  },

  en: {
    pageTitle: "Bernardo | Portfolio",
    langAria: "Switch language to Portuguese",
    themeAria: "Toggle dark mode",

    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    available: "Available for new projects",
    role: "Developer",
    heroText: "I'm passionate about technology and programming, and I'm always looking to learn and grow. I enjoy turning ideas into projects and exploring different areas of development. Here you can learn a bit more about me, my skills, and the projects I've been working on.",
    btnProjects: "View projects",
    btnContact: "Contact",

    photoAlt: "Photo of Bernardo de Matos Campos",
    aboutTitle: "About me",
    aboutP1: "I'm a technical high school student in Information Technology at Cotemig, in Belo Horizonte, Brazil, expected to graduate in December 2027. Throughout my studies, I've been building my knowledge of programming logic, with hands-on practice in C#, HTML, CSS, JavaScript, and MySQL, along with solid fundamentals in hardware, software, and databases.",
    aboutP2: "I'm proficient with Microsoft Office and have strong communication, organization, and teamwork skills. I'm a curious person who adapts easily to new challenges and has a constant desire to learn and grow.",
    aboutP3: "I'm currently looking for my first professional opportunity in technology. This portfolio brings together the projects and knowledge I've been building throughout my learning journey.",
    statYearNumber: "2nd",
    statYearLabel: "year at Cotemig",
    statTechLabel: "Technologies",
    techLabel: "Technologies",

    projectsLabel: "My Work",
    projectsTitle: "Projects",
    projectsDesc: "Explore my main projects and follow my hands-on progress in building systems and web pages.",
    p1Alt: "Cover of the Text RPG project",
    p1Title: "Text RPG",
    p1Desc: "A text-based RPG built in C# with a focus on programming logic and Object-Oriented Programming (OOP).",
    p2Alt: "Cover of the Landing Page project",
    p2Title: "Landing Page",
    p2Desc: "A simple landing page built with HTML, CSS, and JavaScript, created to learn how to build web pages and practice design.",
    p3Alt: "Cover of the Display project",
    p3Title: "Display Project",
    p3Desc: "A project built with HTML and CSS to learn how to create web pages and design, focusing on the CSS display property (Flexbox).",

    contactTitle: "Let's talk?",
    contactDesc: "Have a project in mind, an opportunity, or just want to chat? Send me a message and I'll get back to you as soon as possible.",
    phName: "Your name",
    phEmail: "Your email",
    phMessage: "Your message",
    phoneTitle: "Format: +55 31 91234-5678",
    send: "Send message",

    copy: "© 2026 Bernardo Matos Campos. All rights reserved."
  }
};

const botaoIdioma = document.getElementById('idioma');
let idiomaAtual = 'pt';

try {
  const salvo = localStorage.getItem('idioma');
  if (salvo === 'pt' || salvo === 'en') idiomaAtual = salvo;
} catch (e) {
  /* localStorage indisponível: segue em português */
}

function aplicarIdioma(lang) {
  const t = traducoes[lang];
  idiomaAtual = lang;

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = t.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t[el.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t[el.dataset.i18nTitle];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = t[el.dataset.i18nAlt];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t[el.dataset.i18nAria]);
  });

  document.querySelectorAll('#idioma [data-lang]').forEach(span => {
    span.classList.toggle('ativo', span.dataset.lang === lang);
  });

  try {
    localStorage.setItem('idioma', lang);
  } catch (e) {
    /* ignora */
  }
}

botaoIdioma.addEventListener('click', () => {
  aplicarIdioma(idiomaAtual === 'pt' ? 'en' : 'pt');
});

aplicarIdioma(idiomaAtual);
