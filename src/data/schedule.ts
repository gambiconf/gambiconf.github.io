import type { SocialLink } from "../components/SocialLinks.svelte";

export type Speaker = {
  name: string;
  image: string;
  bio?: string;
  socialLinks: SocialLink[];
};

export type ScheduleEntry =
  | { kind: "day-header"; titleKey: string }
  | { kind: "break"; bodyKey?: string; bodyHtml?: string }
  | {
      kind: "talk";
      title: string;
      titleKey?: string;
      date: string;
      hours: string;
      duration: number;
      members: Speaker[];
      description?: string;
      descriptionKey?: string;
    };

const speaker = (
  name: string,
  imageFile: string,
  bio: string | undefined,
  socialLinks: SocialLink[],
): Speaker => ({
  name,
  // Relative to the static asset root; RowSchedule wraps it in `asset()`.
  image: `/speakers/${imageFile}`,
  bio,
  socialLinks,
});

const macabeus = (bioKey: string) =>
  speaker("Bruno Macabeus", "bruno-macabeus.jpeg", `__T__${bioKey}`, [
    { type: "bluesky", url: "https://bsky.app/profile/macabeus.bsky.social" },
    { type: "twitter", url: "https://twitter.com/bmacabeus" },
    { type: "github", url: "https://github.com/macabeus" },
    { type: "website", url: "http://macabeus.github.io/" },
  ]);

const mapLink = (url: string) =>
  `<a href="${url}" target="_blank" rel="noopener noreferrer">Ver Mapa ↗</a>`;

export const schedule: ScheduleEntry[] = [
  { kind: "day-header", titleKey: "schedule--first-day" },

  {
    kind: "talk",
    title: "Abertura dos portões",
    date: "2025-11-29",
    hours: "9:00",
    duration: 20,
    members: [],
    description: `Nesse dia, o evento acontecerá na TOTVS - ${mapLink("https://maps.app.goo.gl/PadW6Y4RLhYqxz796")}`,
  },

  {
    kind: "talk",
    titleKey: "schedule--presentation-opening-ceremony-first-day-title",
    title: "",
    date: "2025-11-29",
    hours: "9:20",
    duration: 25,
    members: [
      macabeus("schedule--presentation-opening-ceremony-first-day-bio"),
      speaker(
        "Ana Luiza Portello Bastos",
        "ana-bastos.jpeg",
        "Engenheira de software, formada na PUC-SP, gosto de paradigmas de computação, matematíquisses, shitpost e musica.",
        [
          { type: "github", url: "https://github.com/anabastos" },
          { type: "linkedin", url: "https://www.linkedin.com/in/anabastos8/" },
          { type: "website", url: "https://anabastos.me/" },
        ],
      ),
    ],
    descriptionKey: "schedule--presentation-opening-ceremony-first-day-description",
  },

  {
    kind: "talk",
    title: "Usando Clojure para Gerar Javascript para rodar Clojure que Executa Ruby (e Python)",
    date: "2025-11-29",
    hours: "9:50",
    duration: 30,
    members: [
      speaker(
        "Maurício Szabo",
        "mauricio-szabo.jpg",
        "Desenvolvedor poliglota, apaixonado por desenvolvimento interativo e feedback cycles minúsculos, sigo tentando mudar alguns paradigmas sobre desenvolvimento.",
        [
          { type: "gitlab", url: "https://gitlab.com/mauricioszabo" },
          { type: "bluesky", url: "https://bsky.app/profile/mauricioszabo.bsky.social" },
        ],
      ),
    ],
    description:
      "Interactive coding (estilo LISP/Smalltalk) para linguagens tipo Ruby e Python? Sim, é possível, é melhor do que você imagina, já existe, e você já pode usar!",
  },

  {
    kind: "talk",
    title: "Usando a VM do SQLite para criar uma linguagem de programação",
    date: "2025-11-29",
    hours: "10:25",
    duration: 30,
    members: [
      speaker(
        "Diego Reis",
        "diego-reis.jpg",
        'Estudante de Ciência da Computação, trabalha na <a href="https://x.com/tursodatabase">@tursodatabase</a> no desenvolvimento do Limbo, rewrite assíncrono do SQLite em Rust. Apaixonado por paçoca e usar ferramentas de forma que não foram pensadas.',
        [
          { type: "twitter", url: "https://twitter.com/el_yawd" },
          { type: "github", url: "https://github.com/el-yawd" },
          { type: "linkedin", url: "https://www.linkedin.com/in/the-diego-reis" },
        ],
      ),
    ],
    description:
      "SQLite é o banco de dados mais utilizado do mundo e, internamente, uma VM é usada para executar as queries SQL. Assim, e se usássemos essa VM para criar uma linguagem de programação?",
  },

  {
    kind: "talk",
    title: "Criando um MMO RPG com Erlang, PostgreSQL, Zig, Nix e muita gambiarra",
    date: "2025-11-29",
    hours: "11:00",
    duration: 35,
    members: [
      speaker(
        "Marcos Benevides",
        "marcos-benevides.png",
        "Programador F#/OCaml, apreciador de Haskell, maximalista de Nix/NixOS",
        [
          { type: "github", url: "https://github.com/schonfinkel" },
          { type: "linkedin", url: "https://www.linkedin.com/in/schonfinkel" },
          { type: "stackoverflow", url: "https://stackoverflow.com/users/4614840/schonfinkel" },
        ],
      ),
    ],
    description:
      "A experiência (e os perrengues) de criar um MMO RPG utilizando uma combinação pouco convencional: Erlang, PostgreSQL, Zig e Nix. Gambiarras declarativas são inevitáveis.",
  },

  {
    kind: "talk",
    title: "Sala Secreta? Como verificar as eleições por você mesmo",
    date: "2025-11-29",
    hours: "11:40",
    duration: 30,
    members: [
      speaker(
        "Leonardo Toshinobu Kimura",
        "leonardo-kimura.jpg",
        "Doutorando em Engenharia de Computação pela USP, pesquisando como deixar as eleições mais seguras e transparentes.",
        [{ type: "linkedin", url: "https://www.linkedin.com/in/leonardo-kimura/" }],
      ),
    ],
    description:
      "Muitas pessoas acreditam que o TSE manipula os votos durante a contagem. Nessa palestra, vamos ver na prática se isso é verdade.",
  },

  { kind: "break", bodyKey: "schedule--lunch" },

  {
    kind: "talk",
    title: "Games in PostScript – Play Chess Against Your Printer",
    date: "2025-11-29",
    hours: "13:40",
    duration: 30,
    members: [
      speaker(
        "Nicolas Seriot",
        "nicolas-seriot.jpg",
        "Swiss software engineering manager. Fascinated by weird stuff and broken process. Nature lover, ultra-trail runner.",
        [
          { type: "twitter", url: "https://x.com/nst021" },
          { type: "github", url: "https://github.com/nst" },
          { type: "linkedin", url: "https://www.linkedin.com/in/nseriot" },
        ],
      ),
    ],
    description:
      "Write games in PostScript, the '80s printer language. Sokoban & Tetris running on desktop, Tic-Tac-Toe & Chess on printer, printer vs human.",
  },

  {
    kind: "talk",
    title: "LEAN Fullstack: Codando no Assistente de Provas.",
    date: "2025-11-29",
    hours: "14:15",
    duration: 30,
    members: [
      speaker(
        "Sofia Rodrigues",
        "sofia-rodrigues.png",
        'Oi!! Eu sou a Sofia, uma desenvolvedora de 22 anos apaixonada por compiladores e linguagens funcionais. Vivo estudando teoria de tipos e tentando aplicar na programação "real" especialmente nas minhas linguagens favoritas: Haskell e LEAN.',
        [
          { type: "twitter", url: "https://twitter.com/algebraic_dev" },
          { type: "github", url: "https://github.com/algebraic-dev" },
        ],
      ),
    ],
    description:
      "Nessa talk, vamos ver os avanços recentes da Std da linguagem LEAN e como esses avanços a tornam não só um excelente assistente de prova, mas também uma ferramenta viável para programação.",
  },

  {
    kind: "talk",
    title: "Como tocar música com um monitor LCD e um rádio",
    date: "2025-11-29",
    hours: "14:50",
    duration: 30,
    members: [
      speaker(
        "Luana Barbosa",
        "luana-barbosa.jpg",
        "Luana Barbosa (ela/dela) - formada em Ciência da Computação pelo IME-USP.",
        [{ type: "github", url: "https://github.com/luamfb" }],
      ),
    ],
    description: `Além de luz, monitores LCD também emitem ondas de rádio.<br />Usando um rádio AM e imagens específicas, é possível tocar uma sequência de notas.<br />Repositório no GitHub: <a href="https://github.com/luamfb/tempest-lcd">https://github.com/luamfb/tempest-lcd</a>`,
  },

  {
    kind: "talk",
    title: "Web-Cafeteiras em Haskell: Implementando a RFC 2324",
    date: "2025-11-29",
    hours: "15:25",
    duration: 30,
    members: [
      speaker(
        "Pablo Gustavo Fernandes Maia",
        "pablo-gustavo.jpeg",
        "Sou de Natal-RN, estudante de Tecnologia da Informação na UFRN, desenvolvedor full stack e curioso por natureza. Estou constantemente flertando com Ciências da Computação e Matemática.",
        [
          { type: "twitter", url: "https://twitter.com/pablo1gustavo" },
          { type: "github", url: "https://github.com/Pablo1Gustavo" },
          { type: "linkedin", url: "https://www.linkedin.com/in/pablo-gustavo" },
        ],
      ),
    ],
    description:
      'Exploraremos a história do erro 418 "I\'m a teapot", implementando um servidor web em Haskell e abordando temas como programação funcional e o protocolo HTTP.',
  },

  { kind: "break", bodyKey: "schedule--coffe-break" },

  {
    kind: "talk",
    title: "Go no PlayStation 2: como virar um péssimo dev de jogos",
    date: "2025-11-29",
    hours: "16:35",
    duration: 40,
    members: [
      speaker(
        "Ricardo Gomes",
        "ricardo-gomes.jpg",
        "Dev backend formado em Ciência da Computação pela UFRGS e TU Berlin. Autor de infinitos projetos inacabados, faço mais gambiarras do que deveria ser permitido por lei e modifico eletrônicos por pura diversão - e até hoje só um pegou fogo!",
        [
          { type: "bluesky", url: "https://bsky.app/profile/rgsilva.com" },
          { type: "mastodon", url: "https://mas.to/@debugweshell" },
          { type: "website", url: "https://rgsilva.com/" },
        ],
      ),
    ],
    description:
      "Quem nunca pensou em desenvolver jogos né? E que tal usar Go e um PS2 para isso? É isso que vamos explorar nesta talk sobre gambiarras baremetal, hacks no compilador e até mesmo bugs da Sony!",
  },

  {
    kind: "talk",
    title: "ABC: Onde Python começou",
    date: "2025-11-29",
    hours: "17:20",
    duration: 20,
    members: [
      speaker(
        "Luciano Ramalho",
        "luciano-ramalho.jpg",
        "Luciano Ramalho escreveu Fluent Python e ajudou a criar o Garoa Hacker Clube. Ramalho é foragido do IME/USP, de onde escapou logo no início de sua pena.",
        [
          { type: "github", url: "https://github.com/ramalho" },
          { type: "mastodon", url: "https://ciberlandia.pt/@lr" },
          { type: "website", url: "https://ramalho.org" },
        ],
      ),
    ],
    description:
      "Antes de criar Python, Guido van Rossum trabalhou anos na linguagem ABC, criada no centro de pesquisa CWI em Amsterdam.<br />Conheça ABC e veja a origem de ideias centrais de Python, como tuplas, o laço for e muito mais.",
  },

  {
    kind: "talk",
    title: "Dirty Hacks e Gambiarras Elegantes",
    date: "2025-11-29",
    hours: "17:45",
    duration: 30,
    members: [
      speaker(
        'Felipe "Juca" Sanches',
        "felipe-sanches.jpg",
        "Desenvolvedor de software livre, tanto profissionalmente, como também no tempo de lazer, desenvolvendo emuladores junto ao Projeto MAME.\nÉ co-fundador do Garoa Hacker Clube.",
        [
          { type: "twitter", url: "https://twitter.com/juca_gnu" },
          { type: "github", url: "https://github.com/felipesanches" },
          { type: "youtube", url: "https://www.youtube.com/c/HappyHackingVideoBlog" },
          { type: "website", url: "https://forum.fiozera.com.br/" },
        ],
      ),
    ],
    description:
      "História de um apanhado de diversos projetos pessoais, desde a adolescência até os dias atuais.<br />Parte foi engavetada, outra concluída, e até houve casos que se transformaram em atuação profissional!",
  },

  { kind: "day-header", titleKey: "schedule--second-day" },

  {
    kind: "talk",
    title: "Abertura dos portões",
    date: "2025-11-30",
    hours: "13:00",
    duration: 30,
    members: [],
    description: `Nesse dia, o evento acontecerá na USP, Campus Butantã, no auditório do IME - ${mapLink("https://maps.app.goo.gl/wYoFmYs39tzzmytn7")}`,
  },

  {
    kind: "talk",
    titleKey: "schedule--presentation-opening-ceremony-second-day-title",
    title: "",
    date: "2025-11-30",
    hours: "13:30",
    duration: 35,
    members: [macabeus("schedule--presentation-opening-ceremony-first-day-bio")],
    descriptionKey: "schedule--presentation-opening-ceremony-first-day-description",
  },

  {
    kind: "break",
    bodyHtml:
      "<strong>Observação sobre os workshops:</strong><br /><span>Todos acontecerão simultaneamente. Então, no dia do evento, escolha apenas um para participar. Além disso, traga o seu notebook.</span>",
  },

  {
    kind: "talk",
    title: "Videogames: das portas lógicas ao software",
    date: "2025-11-30",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Jecel Mattos de Assumpção Júnior",
        "jecel-mattos.jpg",
        "Depois de desenvolver vários computadores originais nos anos 1980 (o que era raro no Brasil), Jecel se formou em microeletrônica pela Poli-USP em 1990. Continua criando computadores e circuitos integrados.",
        [{ type: "github", url: "https://github.com/jeceljr" }],
      ),
      speaker(
        "Mário Gazziro",
        "mario-gazziro.jpg",
        "Mario Gazziro é doutor em Física Computacional pela USP. É professor na Universidade Federal do ABC. Tem experiência na área de instrumentação eletrônica e ciência da computação, com ênfase em arquitetura de sistemas de computação.",
        [{ type: "youtube", url: "https://www.youtube.com/@mario.gazziro" }],
      ),
    ],
    description:
      "Este workshop usa o simulador Digital para mostrar como as portas lógicas podem ser usadas em blocos maiores até formar um videogame implementado numa placa FPGA.",
  },

  {
    kind: "talk",
    title: "Contribuindo com Open Source com a ajuda do GitHub Copilot",
    date: "2025-11-30",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Pachi Parra",
        "pachi-parra.jpg",
        "Pachi Parra atua como Developer Advocate no GitHub.  Palestra e cria pontes para tornar a tecnologia mais acessível, diversa e colaborativa.",
        [
          { type: "twitter", url: "http://twitter.com/pachicodes" },
          { type: "linkedin", url: "https://www.linkedin.com/in/pachicodes" },
          { type: "bluesky", url: "https://bsky.app/profile/abacatinhos.dev" },
          { type: "github", url: "https://github.com/pachicodes" },
        ],
      ),
      speaker(
        "Morganna Giovanelli",
        "morganna-giovanelli.jpg",
        "Morganna espalha a palavra da Ada Lovelace por aí e, para ela, Pessoas > Tecnologia. Trabalha como Developer Advocate com plataformas de Inteligência Artificial e é reconhecida como Embaixadora LINUXtips.",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/morgannadev/" },
          { type: "bluesky", url: "https://bsky.app/profile/morgannadev.bsky.social" },
          { type: "github", url: "https://github.com/morgannadev" },
          { type: "website", url: "https://morganna.dev/" },
        ],
      ),
      speaker(
        "Samuel Henrique",
        "samuel-henrique.jpg",
        "Samuel atua como Desenvolvedor Full-Stack e é membro ativo em várias comunidades de tecnologia. Está sempre buscando aprender mais, trocar experiências e colaborar com o crescimento coletivo do ecossistema tech.",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/sanarielsen/" },
          { type: "github", url: "https://github.com/Sanarielsen" },
        ],
      ),
    ],
    description:
      "Vamos aprendera usar o GitHub Copilot para contribuir com um projeto Open Source, passo-a-passo.",
  },

  {
    kind: "talk",
    title: "Extensibilidade do PostgreSQL",
    date: "2025-11-30",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Fabrízio de Royes Mello",
        "fabrizio-mello.jpg",
        "Sócio da Timbira Inteligência em PostgreSQL e Engenheiro de Software na TigerData desenvolvendo o TimescaleDB, uma extensão PostgreSQL para análises de alto desempenho em tempo real em séries temporais e dados de eventos.",
        [
          { type: "twitter", url: "http://twitter.com/fabriziomello" },
          { type: "linkedin", url: "https://www.linkedin.com/in/fabriziomello" },
          { type: "github", url: "http://github.com/fabriziomello" },
        ],
      ),
      speaker(
        "Dickson Guedes",
        "dickson-guedes.jpg",
        "Consultor pela Timbira Inteligência em Postgres, atua na área de tecnologia há mais de 20 anos, experiência em software livre, banco de dados PostgreSQL e análise de dados. Entusiasta de IA e Computação Quântica, desenvolve em Python, Ruby e Rust.",
        [{ type: "linkedin", url: "https://www.linkedin.com/in/dicksonguedes" }],
      ),
    ],
    description:
      "O Postgres oferece inúmeros mecanismos de extensibilidade onde é possível, sem alterar seu núcleo, adicionar novas funcionalidades e até mesmo modificar comportamento existente. Bora criar uma extensão juntos?",
  },

  {
    kind: "talk",
    title: "Minicurso de Kubernetes por Magalu Cloud",
    date: "2025-11-30",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Fernando Ravagnani",
        "fernando-ravagnani.jpeg",
        "Fernando está na área tech há mais de 25 anos, sendo que 22 foram na Magalu e Magalu Cloud. Pegou desde o começo do surgimento do devops e tem muita vivência para compartilhar.",
        [{ type: "linkedin", url: "https://www.linkedin.com/in/fernando-ravagnani" }],
      ),
      speaker(
        "Erivaldo Lopes",
        "erivaldo-lopes.jpeg",
        "Erivaldo está há 19 anos no mercado de tecnologia, dos quais 13 foram dedicados em aprimorar ambientes de datacenter, com foco especial em cloud.",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/erivaldolopes" },
          { type: "website", url: "https://erivaldolopes.io" },
        ],
      ),
    ],
    description: "Veja na prática como usar kubernetes, do básico ao deploy na Magalu Cloud.",
  },

  {
    kind: "talk",
    title: "Introdução à programação com Python",
    date: "2025-11-30",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "PyLadies São Paulo",
        "pyladies-saopaulo.png",
        "A PyLadies é uma comunidade global focada em aumentar a atividade e a liderança das mulheres na comunidade Python. O capítulo de SP nasceu em 2015, e desde então buscamos cumprir este objetivo através de encontros para ensinar e aprender Python ❤️",
        [
          { type: "linkedin", url: "https://www.linkedin.com/company/pyladiessp" },
          { type: "instagram", url: "https://www.instagram.com/pyladies.saopaulo" },
        ],
      ),
    ],
    description:
      "Neste workshop vamos introduzir conceitos básicos da programação como condição, repetição, funções e variáveis, utilizando o Python! Não é necessário saber programar em outras linguagens!",
  },

  {
    kind: "talk",
    title: "Linguagens de Domínio Específico Embarcadas",
    date: "2025-11-30",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Pedro Castilho",
        "pedro-castilho.jpeg",
        "Castilho programa há mais de 15 anos, é viciado em programação funcional e acredita veementemente que é possível melhorar como criamos software. Aplica programação funcional no mundo real como CTO da Cumbuca.",
        [
          { type: "twitter", url: "https://twitter.com/coproduto" },
          { type: "github", url: "https://github.com/coproduto" },
          { type: "linkedin", url: "https://www.linkedin.com/in/pcstl" },
          { type: "bluesky", url: "https://bsky.app/profile/coprodu.to" },
        ],
      ),
    ],
    description:
      "Linguagens de Domínio Específico são uma das técnicas mais poderosas e robustas de construção de software complexo. Vamos aprender na prática como e quando criá-las <strong>dentro da sua lang favorita</strong>.",
  },

  { kind: "break", bodyKey: "schedule--coffe-break" },

  {
    kind: "talk",
    title: "Painel: Privacidade e Censura na Internet",
    date: "2025-11-30",
    hours: "18:20",
    duration: 45,
    members: [
      speaker("Pedro Castilho (mediador)", "pedro-castilho.jpeg", undefined, [
        { type: "twitter", url: "https://twitter.com/coproduto" },
        { type: "github", url: "https://github.com/coproduto" },
        { type: "linkedin", url: "https://www.linkedin.com/in/pcstl" },
        { type: "bluesky", url: "https://bsky.app/profile/coprodu.to" },
      ]),
      speaker(
        "Vinicius Zavam",
        "vinicius-zavam.jpg",
        `Cearense. Engenheiro da Computação, formado pelo IFCE, trabalhando em áreas com foco em automatização/orquestramento de sistemas e confortável em trabalhar com culturas e práticas categorizadas como DevOps e SRE. Interessado em construir infraestrutura de alta disponibilidade e soluções de alta qualidade, seja na nuvem ou não.<br />Evangelista de sistemas com linhagem BSD, entusiasta de IPv6 e colaborador voluntário em diversos projetos de software livre e código aberto.<br />FreeBSD ports committer e membro do Core Team no projeto Tor. Nas horas vagas, aparentemente um atleta híbrido.`,
        [
          { type: "github", url: "https://github.com/egypcio" },
          { type: "linkedin", url: "https://www.linkedin.com/in/viniciuszavam" },
        ],
      ),
      speaker(
        "Douglas Fischer",
        "douglas-fischer.jpg",
        `Filho, Esposo, Pai³. 42 anos.<br />Engenheiro de telecomunicações.<br />Atuo no mercado de computação e telecomunicações há mais de 20 anos.<br />Gosto de ajudar os operadores de rede da cadeia de provimento de acesso a Internet a "fazer as coisas" da maneira o mais correta o possível.<br />Me considero um tretísta por vocação. Adoro comprar brigas com quem geralmente as pessoas evitam comprar brigas para ajudar a resolver aqueles problemas que todos sabem que é um problema, mas nos vemos de mãos atadas pra resolver.`,
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/fischerdouglas" },
          { type: "twitter", url: "https://twitter.com/fischerdouglas" },
        ],
      ),
      speaker(
        "Rodrigo Silva",
        "rodrigo-silva.jpg",
        `Eu quase fui um físico astrônomo, mas a computação chamou mais a minha atenção. Então, hoje eu escolhi viver na fronteira, onde a tecnologia encontra o infinito a cada bit e "estrela". Toda a minha bagagem como profissional sênior em Cyber, eu transfiro para a Universidade Mackenzie através das salas de aula e o CYBERSEC LAB, aonde euajudo a formar alunos que, para mim, são como lançar sondas no universo: mentes capazes de ir além da órbita segura do comum.`,
        [
          {
            type: "linkedin",
            url: "https://www.linkedin.com/in/rodrigo-securityanalyst-associateprofessor",
          },
          {
            type: "googleScholar",
            url: "https://www.researchgate.net/profile/Rodrigo-Silva-87",
          },
        ],
      ),
    ],
    description:
      "Um olhar técnico sobre privacidade e censura: vamos discutir sobre como a tecnologia influencia o acesso e o controle da informação online.",
  },

  {
    kind: "talk",
    title: "Encerramento do evento",
    date: "2025-11-30",
    hours: "19:05",
    duration: 30,
    members: [macabeus("schedule--presentation-opening-ceremony-first-day-bio")],
    description:
      "Encerramento do evento, com um quiz valendo prêmios! Será que você manja de gambiarra o suficiente para vencer?",
  },
];

/**
 * The serialized data uses `__T__key` placeholders for localized strings.
 * Resolve them at render time so the data file stays framework-free.
 * Asset paths are relative (e.g. `/speakers/foo.jpg`) and get prefixed via
 * SvelteKit's `asset()` helper in the consumer.
 */
export const resolveTranslation = (
  t: (key: string) => string,
  value: string | undefined,
): string | undefined => {
  if (!value) return value;
  return value.startsWith("__T__") ? t(value.slice(5)) : value;
};
