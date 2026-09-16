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
  | { kind: "upcoming" }
  | {
      kind: "talk";
      title: string;
      titleKey?: string;
      date: string;
      hours: string;
      where?: string;
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
  speaker("Bruno Macabeus", "macabeus.png", `__T__${bioKey}`, [
    { type: "bluesky", url: "https://bsky.app/profile/macabeus.bsky.social" },
    { type: "twitter", url: "https://twitter.com/bmacabeus" },
    { type: "github", url: "https://github.com/macabeus" },
    { type: "website", url: "http://macabeus.github.io/" },
  ]);

export const schedule: ScheduleEntry[] = [
  { kind: "day-header", titleKey: "schedule--first-day" },

  {
    kind: "talk",
    title: "Abertura dos portões",
    date: "2025-11-28",
    hours: "9:00",
    duration: 20,
    members: [],
    description: "Nesse dia, o evento começa de manhã.",
  },

  {
    kind: "talk",
    titleKey: "schedule--presentation-opening-ceremony-first-day-title",
    title: "",
    date: "2025-11-28",
    hours: "9:20",
    where: "Auditório",
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
    title: "[Keynote a ser revelado em breve]",
    date: "2025-11-28",
    hours: "9:40",
    where: "Auditório",
    duration: 45,
    members: [],
    description: "",
  },

  {
    kind: "talk",
    title: "Yes, your can run your company mostly with PostgreSQL",
    date: "2025-11-28",
    hours: "10:30",
    where: "Auditório",
    duration: 45,
    members: [
      speaker(
        "Eduardo Bellani",
        "eduardo-bellani.jpeg",
        "Senior software engineer and engineering manager with 20+ years of experience designing and operating mission-critical systems.",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/eduardo-bellani/" },
          { type: "website", url: "https://ebellani.github.io/" },
        ],
      ),
    ],
    description:
      'Stop adding tools for every problem. See how PostgreSQL handles fintech requirements that "justify" Temporal, Redis, OLAP databases. First principles over hype.',
  },

  {
    kind: "talk",
    title: "Super Nintendo: o PC que nunca foi",
    date: "2025-11-28",
    hours: "11:20",
    where: "Auditório",
    duration: 45,
    members: [
      speaker(
        "Ricardo Gomes da Silva",
        "ricardo-gomes.jpg",
        "Dev backend formado em Ciência da Computação pela UFRGS e TU Berlin. Autor de infinitos projetos inacabados, faço mais gambiarras do que deveria ser permitido por lei e modifico eletrônicos por pura diversão - e até hoje só um pegou fogo!",
        [
          { type: "bluesky", url: "https://bsky.app/profile/rgsilva.com" },
          { type: "mastodon", url: "https://mas.to/@debugweshell" },
          { type: "website", url: "https://rgsilva.com" },
        ],
      ),
    ],
    description:
      "O Mario saiu de férias e deixou o SNES pegando pó: bora transformar ele no pior computador possível com técnicas questionáveis, hacks confusos e gambiarras insalubres - e sempre assoprando o cartucho antes!",
  },

  { kind: "break", bodyKey: "schedule--lunch" },

  {
    kind: "talk",
    title: "Como fiz um advergame para GBA com Rust em pleno 2026",
    date: "2025-11-28",
    hours: "13:20",
    where: "Auditório",
    duration: 30,
    members: [
      speaker(
        "Alexsandro dos Santos",
        "alexsandro-santos.jpg",
        "Alex é Tech Lead, com experiencia em engenharia de dados e arquitetura de software, mas já foi fundador de ONG, educador, competidor de robótica e hoje sempre procura situações legais para absorver conhecimentos complexos.",
        [
          { type: "github", url: "https://github.com/Alexsandr0x" },
          { type: "linkedin", url: "https://www.linkedin.com/in/alexsandr0x/" },
          { type: "twitter", url: "https://twitter.com/Alhequiz" },
        ],
      ),
    ],
    description:
      "Em Janeiro desse ano me desafiei aprender Rust do zero da pior forma possível: Fazendo um jogo de GBA. Agora vamos usar esse jogo como peça de mkt, te conto essa história nessa Palestra!",
  },

  {
    kind: "talk",
    title: "Descubra a mágica atrás dos CODECs de vídeos",
    date: "2025-11-28",
    hours: "13:55",
    where: "Auditório",
    duration: 30,
    members: [
      speaker(
        "Leandro Moreira",
        "leandro-moreira.jpg",
        "Leandro Moreira trabalha com software há mais de 25 anos, já passou pelas empresas Thoughtworks, Globo, Shopify, e ultimamente trabalha na Uber. Compartilha muito do que sabe de forma acessível no github",
        [{ type: "github", url: "https://github.com/leandromoreira/" }],
      ),
    ],
    description:
      "Entenda de forma gradual o que é um vídeo, o que representa cada componente de baixo nível do mesmo, e porque compressão é necessária e mais importante como é esta é feita de forma didatica.",
  },

  {
    kind: "talk",
    title: "Um Mundo Funcional: Construindo uma Physics Engine em Clojure",
    date: "2025-11-28",
    hours: "14:30",
    where: "Auditório",
    duration: 20,
    members: [
      speaker(
        "Luana Amorim",
        "luana-amorim.jpg",
        "Estudante de computação na Universidade Estadual de Campinas, competidora em maratonas de programação e apaixonada por algoritmos e estruturas de dados!",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/luana-4m0r1m" },
          { type: "github", url: "https://github.com/luanaamorim04" },
        ],
      ),
    ],
    description:
      "A talk mostrará o processo de criar simulações físicas em Clojure. Inicialmente introduzindo forças e colisões, em seguida abordando implementação e finalmente mostrando aplicações.",
  },

  {
    kind: "talk",
    title: "Enrolator 2000: Enrolando golpe da falsa central com um modem 4G barato e IA",
    date: "2025-11-28",
    hours: "14:55",
    where: "Auditório",
    duration: 30,
    members: [
      speaker(
        "Danillo Bosco",
        "danillo-bosco.jpg",
        "Bacharel em sistemas de informação, apaixonado por tecnologia e cultura maker. Programador PHP, dono de varias gambiarras.",
        [
          { type: "twitter", url: "https://twitter.com/Tearing5tv" },
          { type: "website", url: "https://5tr.in" },
          { type: "instagram", url: "https://www.instagram.com/danillobosco" },
          { type: "linkedin", url: "https://www.linkedin.com/in/danillobosco" },
          { type: "github", url: "https://github.com/danillo523" },
          { type: "twitch", url: "https://www.twitch.tv/tearing5" },
        ],
      ),
    ],
    description:
      "Falsa central na linha? Melhor um golpista sendo enrolado do que fazendo uma nova vítima. O Enrolator 2000 enrola os golpistas com um modem 4G baratinho e IA generativa",
  },

  { kind: "break", bodyKey: "schedule--coffe-break" },

  {
    kind: "talk",
    title: "Sua caixa de som tá vazando senha e você (talvez) nem escuta",
    date: "2025-11-28",
    hours: "16:05",
    where: "Auditório",
    duration: 30,
    members: [
      speaker(
        "Leandro Proença",
        "leandro-proenca.jpeg",
        "Programador há quase 20 anos, pragmático no horário comercial e inconsistente nas horas vagas. Gosto de coisas relacionadas a computação, música e futebol. Blogueirinho desde sempre e quando tá frio abro lives no YT fazendo coisas inúteis que ninguém pediu.",
        [
          { type: "website", url: "https://leandronsp.com" },
          { type: "twitter", url: "https://twitter.com/leandronsp" },
          { type: "github", url: "https://github.com/leandronsp" },
          { type: "mastodon", url: "https://mastodon.social/@leandronsp" },
        ],
      ),
    ],
    description:
      "Como hackear o alto-falante do computador e transmitir dados mesmo sem acesso à internet. Nesta talk vamos construir um modem acústico do zero, DSP puro com Bash e awk, num som que você não ouve.",
  },

  {
    kind: "talk",
    title: "Open Finance via Sega Mega Drive – Telebradesco",
    date: "2025-11-28",
    hours: "16:40",
    where: "Auditório",
    duration: 15,
    members: [
      speaker(
        "Nic",
        "nic.jpg",
        '20 anos de experiência em tecnologia e estratégia, sendo nove deles dedicados à construção do Open Finance no Brasil desde o início. Autor da JSR ("Pix por Aproximação"). Um dos arquitetos de Open Finance mais reconhecidos do país.',
        [
          { type: "youtube", url: "https://youtube.com/@OpenFinanceShow" },
          { type: "github", url: "https://github.com/nic" },
          { type: "linkedin", url: "https://www.linkedin.com/in/upnic" },
        ],
      ),
    ],
    description:
      "Em 1995 o Banco Bradesco lançou o primeiro home banking do Brasil: um cartucho de Mega Drive chamado Telebradesco. 30 anos depois eu fiz engenharia reversa do protocolo e trouxe ele de volta a vida",
  },

  {
    kind: "talk",
    title: "[Keynote] Agile Vibe Coding",
    date: "2025-11-28",
    where: "Auditório",
    hours: "17:00",
    duration: 45,
    members: [
      speaker(
        "Fabio Akita",
        "fabio-akita.jpg",
        "Blogger de tecnologia em akitaonrails.com. ex-youtuber do canal Akitando. Co-fundador da Codeminer 42.",
        [
          { type: "twitter", url: "https://twitter.com/akitaonrails" },
          { type: "github", url: "https://github.com/akitaonrails" },
        ],
      ),
    ],
    description:
      "Um panorama geral do mercado de frontier models, agentes, os projetos que desenvolvi este ano e o que aprendi que funciona e não funciona na utilização de LLMs pra programação.",
  },

  {
    kind: "talk",
    title: "Abertura da Trilha Grandes Gambiarras",
    date: "2025-11-28",
    hours: "10:25",
    where: "Trilha Grandes Gambiarras",
    duration: 5,
    members: [],
    description: "",
  },

  {
    kind: "talk",
    title:
      "Como derrubamos (sem querer) a internet de Gana: a guerra entre sneaker bots e antibots",
    date: "2025-11-28",
    hours: "10:30",
    where: "Trilha Grandes Gambiarras",
    duration: 45,
    members: [
      speaker(
        "Ricardo Nacif",
        "ricardo-nacif.png",
        "Engenheiro de software na Roadway AI e fundador da Nacif. Entre 2021 e 2023 foi cofundador e dev do Vite, um sneaker bot comercial que disputava drops de tênis contra antibots como Datadome e Akamai.",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/ricardonacif/" },
          { type: "twitter", url: "https://twitter.com/ricardonacif" },
        ],
      ),
    ],
    description:
      "Bastidores do Vite, sneaker bot que burlava antibots como Datadome: engenharia reversa, TLS/JA3, cache poisoning e o dia em que derrubamos ~10% da internet de Gana.",
  },

  {
    kind: "talk",
    title: "VibeOS, sistema operacional vibe-coded ou IA sendo insultada?",
    date: "2025-11-28",
    hours: "11:20",
    where: "Trilha Grandes Gambiarras",
    duration: 45,
    members: [
      speaker(
        "Sr. Raposo",
        "sr-raposo.png",
        "Oie, sou o Sr. Raposo... sim, um raposo original que tem uma fantasia humana pra vocês não acharem estranho. Vim da floresta encantada onde a magia opera malhas de dados e modelos de IA. Especialista, arquiteto e rosno pra quem idolatra a IA...",
        [
          { type: "bluesky", url: "https://bsky.app/profile/mrfoxxo.bsky.social" },
          { type: "github", url: "https://github.com/mr-foxxo" },
        ],
      ),
    ],
    description:
      "Nascido durante uma live, a ideia era criar um bootloader i386 e userland funcional usando vibe-code. Depois da live o projeto continuou com mais raiva e menos IA...",
  },

  {
    kind: "talk",
    title: "Abertura da Trilha TYPED",
    date: "2025-11-28",
    hours: "13:20",
    where: "Trilha TYPED",
    duration: 5,
    members: [],
    description: "",
  },

  {
    kind: "talk",
    title: "[Apresentação da TYPED a ser revelada]",
    date: "2025-11-28",
    hours: "13:25",
    where: "Trilha TYPED",
    duration: 25,
    members: [],
    description: "",
  },

  {
    kind: "talk",
    title: "Minerando commits: entendendo blockchain e proof-of-work com Git",
    date: "2025-11-28",
    hours: "13:55",
    where: "Trilha TYPED",
    duration: 30,
    members: [
      speaker(
        "Sergio Cabral",
        "sergio-cabral.jpg",
        "Sou engenheiro de software, CISO e educador tecnológico. Trabalho com full stack, DevSecOps, ISO 27001, cloud e automação. Gosto de desmontar conceitos complexos até virarem algo prático, testável e funcional — às vezes contra o bom senso.",
        [
          { type: "github", url: "https://github.com/sergiocabral" },
          { type: "youtube", url: "https://youtube.com/@devnator" },
          { type: "linkedin", url: "https://linkedin.com/in/sergiocabraljr" },
          { type: "website", url: "https://sergiocabral.dev" },
        ],
      ),
    ],
    description:
      "Blockchain sem hype: Git como gambiarra didática para entender blocos, hashes, encadeamento, mineração e proof-of-work.",
  },

  {
    kind: "talk",
    title: "Erlang... no MEU microkernel seL4?",
    date: "2025-11-28",
    hours: "14:30",
    duration: 20,
    members: [
      speaker(
        "Marcos Benevides",
        "marcos-benevides.png",
        "Programador Erlang/F#/OCaml, apreciador de Haskell, entusiasta do PostgreSQL, maximalista de Nix/NixOS",
        [
          { type: "github", url: "https://github.com/schonfinkel" },
          { type: "linkedin", url: "https://www.linkedin.com/in/schonfinkel" },
        ],
      ),
    ],
    description:
      "O seL4 é um microkernel formalmente verificado, uma obra-prima da computação... até alguém empacotar uma solução caótica com remendos em Nix, Zig, C e LionOS, tudo visando um único objetivo blasfemo: rodar a BEAM.",
  },

  {
    kind: "talk",
    title: "Camel up: towards Karuta's BEAM",
    date: "2025-11-28",
    hours: "14:55",
    where: "Trilha TYPED",
    duration: 30,
    members: [
      speaker(
        "Eduardo Lemos",
        "eduardo-lemos.jpg",
        "Entusiasta de programação funcional e praticante de programação recreativa.",
        [
          { type: "github", url: "https://github.com/EduardoLR10" },
          { type: "github", url: "https://github.com/dont-rely-on-nulls" },
        ],
      ),
    ],
    description:
      "Karuta é a grande obra de um grupo de nerds frustrados com ideias mirabolantes para uma nova linguagem. Explicaremos a alquimia por trás do nosso compilador: paradigma lógico, Nix, OCaml, LFE, BEAM e microKanren.",
  },

  { kind: "break", bodyKey: "schedule--coffe-break" },

  {
    kind: "talk",
    title: "The problem of induction and INSANELY DEPENDENT TYPES",
    date: "2025-11-28",
    hours: "16:05",
    where: "Trilha TYPED",
    duration: 45,
    members: [
      speaker(
        "Eduardo Rafael",
        "eduardo-rafael.jpg",
        "I just a guy who likes to code and write types.",
        [
          { type: "twitter", url: "https://twitter.com/TheEduardoRFS" },
          { type: "github", url: "https://github.com/EduardoRFS" },
        ],
      ),
    ],
    description:
      "As Alonzo Church taught us, functions are data. This talk will show that this is true even with dependent types.",
  },

  { kind: "day-header", titleKey: "schedule--second-day" },

  {
    kind: "talk",
    title: "Abertura dos portões",
    date: "2025-11-29",
    hours: "13:00",
    duration: 30,
    members: [],
    description: "Nesse dia, o evento começa de tarde.",
  },

  {
    kind: "talk",
    titleKey: "schedule--presentation-opening-ceremony-second-day-title",
    title: "",
    date: "2025-11-29",
    hours: "13:30",
    duration: 35,
    members: [macabeus("schedule--presentation-opening-ceremony-first-day-bio")],
    descriptionKey: "schedule--presentation-opening-ceremony-first-day-description",
  },

  {
    kind: "break",
    bodyHtml:
      "<strong>Observação sobre os workshops:</strong><span>Todos acontecerão simultaneamente. Então, no dia do evento, escolha apenas um para participar. Além disso, traga o seu notebook.</span>",
  },

  {
    kind: "talk",
    title: "Escrevendo um Forth para o IBM PC: um exercício em minimalismo e autossuficiência",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Tevo",
        "tevo.jpg",
        "Idealista incurável. Apreciador de máquinas estranhas, linguagens não-ortodoxas, sistemas operacionais esquisitos e caminhos que não foram trilhados. Lisper em recuperação.",
        [
          { type: "website", url: "https://riajuu.net" },
          { type: "github", url: "https://github.com/Tevo45" },
          { type: "sourcehunt", url: "https://git.sr.ht/~tevo" },
          { type: "mastodon", url: "https://mastodon.bsd.cafe/@tevo" },
        ],
      ),
    ],
    description:
      "O quanto você precisa para tornar um computador útil? Veremos o quão simples é escrever um Forth minimalista utilizando apenas um PC, assembly e bastante ingenuidade.",
  },

  {
    kind: "talk",
    title: "ELKE - uma maravilha de ambiente criptografado com FreeBSD",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Vinícius Zavam",
        "vinicius-zavam.jpg",
        "Cearense. Engenheiro da computação, formado pelo IFCE, trabalhando em áreas com foco em automatização/engenharia de sistemas - entusiasta de IPv6, FreeBSD ports committer e membro Core no projeto Tor - nas horas vagas, um atleta híbrido.",
        [
          { type: "twitter", url: "https://twitter.com/egypcio" },
          { type: "github", url: "https://github.com/egypcio" },
        ],
      ),
    ],
    description:
      "Instalação de um ambiente FreeBSD focado em oferecer um sistema com criptografia de disco combinando GELI e ZFS que possibilite desbloqueio remoto via SSH (com Tor onion service ou não).",
  },

  {
    kind: "talk",
    title:
      "Construindo os Números e Brincando com Tipos: Uma Introdução à Programação Funcional com Haskell",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Pablo Gustavo Fernandes Maia",
        "pablo-gustavo.jpg",
        "Sou de Natal-RN, formado em Tecnologia da Informação pela UFRN, desenvolvedor full stack e curioso por natureza. Estou constantemente flertando com Ciências da Computação e Matemática.",
        [
          { type: "github", url: "https://github.com/Pablo1Gustavo" },
          { type: "linkedin", url: "https://www.linkedin.com/in/pablo-gustavo/" },
          { type: "instagram", url: "https://www.instagram.com/pablo.gustv/" },
        ],
      ),
    ],
    description:
      "Vamos definir números do zero absoluto, como se explicássemos matemática a seres de outro planeta e explorar programação funcional no caminho.",
  },

  {
    kind: "talk",
    title: "Cursão de Nix e NixOS",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Marcos Benevides",
        "marcos-benevides.png",
        "Programador Erlang/F#/OCaml, apreciador de Haskell, entusiasta do PostgreSQL, maximalista de Nix/NixOS",
        [
          { type: "github", url: "https://github.com/schonfinkel" },
          { type: "linkedin", url: "https://www.linkedin.com/in/schonfinkel" },
        ],
      ),
      speaker(
        "Victor Freire",
        "victor-freire.jpg",
        "Interessado em Nix, Go, Standard ML e veículos automotores de confiabilidade duvidável",
        [
          { type: "github", url: "https://github.com/ratsclub" },
          { type: "linkedin", url: "https://www.linkedin.com/in/victorlfreire" },
        ],
      ),
    ],
    description:
      "Cansado de deploys amaldiçoados pelo fantasma do UNIX? Venha aprender como criar infraestrutura declarativa e imutável usando Nix e NixOS!",
  },

  {
    kind: "talk",
    title: "Como resolver um cubo mágico",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Pedro Pires",
        "pedro-pires.jpeg",
        "Pedro Pires é Engenheiro de Software há 7 anos e possui 10 anos de Speedcubing nas costas, também é aficionado por quebra-cabeças e outros esportes da mente",
        [{ type: "github", url: "https://github.com/pekito" }],
      ),
    ],
    description:
      "Você já ficou travado num cubo mágico sem saber o que fazer? Neste workshop, você vai aprender do zero a desvendar um dos quebra-cabeças mais famosos do mundo!",
  },

  {
    kind: "talk",
    title: "SD-WAN de pobre: OpenWrt, celular e um roteador sobrevivente",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Sergio Cabral",
        "sergio-cabral.jpg",
        "Sou engenheiro de software, CISO e educador tecnológico. Trabalho com full stack, DevSecOps, ISO 27001, cloud e automação. Gosto de desmontar conceitos complexos até virarem algo prático, testável e funcional — às vezes contra o bom senso.",
        [
          { type: "github", url: "https://github.com/sergiocabral" },
          { type: "youtube", url: "https://youtube.com/@devnator" },
          { type: "linkedin", url: "https://linkedin.com/in/sergiocabraljr" },
          { type: "website", url: "https://sergiocabral.dev" },
        ],
      ),
    ],
    description:
      "Vamos transformar um roteador com OpenWrt em uma contingência caseira de internet: link principal, celular como backup, detecção de queda e failover automático.",
  },

  {
    kind: "talk",
    title: "O Laboratório do Frankenstein Autônomo",
    date: "2025-11-29",
    hours: "14:10",
    duration: 210,
    members: [
      speaker(
        "Sergio Lopes",
        "sergio-lopes.jpg",
        "Engenheiro de Software, Docker Captain, LocalStack Champion, Geek, músico de garagem, gamer e pai. Curto tudo que envolve esse universo maravilhoso e muita música, desde que seja de qualidade.",
        [
          { type: "github", url: "https://github.com/sergiolopessp" },
          { type: "linkedin", url: "https://www.linkedin.com/in/sergio-lopes-20131a33/" },
          { type: "medium", url: "https://medium.com/@sergiolopessp" },
        ],
      ),
      speaker(
        "Denis Cruz Rodrigues",
        "denis-cruz.png",
        "Staff Plus Engineer at Itaú, Docker Captain and LocalStack Champion. Member of the Linux Foundation, ACM and NYAS. Passionate about Cloud Native, Developer Experience, Platform Engineering and AI.",
        [
          { type: "linkedin", url: "https://www.linkedin.com/in/deniscruzrodrigues" },
          { type: "medium", url: "https://medium.com/@deniscruzrodrigues" },
        ],
      ),
    ],
    description:
      "IAs autônomas podem destruir seu host! Neste lab usaremos Docker Sandboxes e MCP para enjaular agentes. Venha ver uma IA codando um backend do zero, mas com o caos 100% controlado!",
  },

  // {
  //   kind: "break",
  //   bodyHtml:
  //     "<strong>Observação sobre os workshops:</strong><span>Todos acontecerão simultaneamente. Então, no dia do evento, escolha apenas um para participar. Além disso, traga o seu notebook.</span>",
  // },

  // { kind: "break", bodyKey: "schedule--coffe-break" },

  {
    kind: "talk",
    title: "Painel: Pirataria e Copyright",
    date: "2025-11-29",
    hours: "18:20",
    duration: 45,
    members: [
      speaker(
        "Adriano Camacho (mediador)",
        "adriano-camacho.jpg",
        "Adriano Camacho é editor de conteúdo no TecMundo e especializado na cobertura de cibersegurança, privacidade e crimes digitais. Acompanha e analisa incidentes cibernéticos, campanhas de malware, operações de ransomware, vazamentos de dados e políticas de proteção da informação. É pós-graduado em Jornalismo, Comunicação e a Nova Ordem Informacional pela FAAP e atualmente cursa pós-graduação em Cibersegurança e Governança de Dados pela PUC Minas.",
        [
          { type: "instagram", url: "https://www.instagram.com/adrianocamacho" },
          { type: "website", url: "https://adrianocamacho.com" },
          { type: "twitter", url: "https://www.twitter.com/adrianocamacho" },
        ],
      ),
      speaker(
        "Thiago Ayub",
        "thiago-ayub.jpeg",
        "Ayub é testemunha ocular da chegada da Internet no Brasil: em 1995 acompanhou a transformação dos BBS nos primeiros provedores discados e desde então atua na operação e engenharia de provedores, data centers e mitigação de DDoS. É colunista de tecnologia, mantém um canal no YouTube sobre a Internet propriamente dita e é CTO na Sage Networks.",
        [
          { type: "twitter", url: "https://twitter.com/@ayubio" },
          { type: "instagram", url: "https://www.instagram.com/ayubionet/" },
          { type: "linkedin", url: "https://www.linkedin.com/in/ayubio/" },
        ],
      ),
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
      speaker(
        "Lucas Lago",
        "lucas-lago.jpg",
        `Lucas Lago é tecnologista de interesse público, vice-presidente do Instituto Aaron Swartz, organização dedicada à defesa dos direitos digitais e do acesso aberto ao conhecimento. No Instituto Aaron Swartz, participa de iniciativas de educação, pesquisa e incidência pública sobre temas como criptografia, autenticação, privacidade e direitos na internet. O instituto também é um dos responsáveis pelo projeto Copyright Trolls, que orienta pessoas que recebem notificações extrajudiciais relacionadas a supostas infrações de direitos autorais, produzindo informação acessível sobre o tema e auxiliando na compreensão desse tipo de prática.`,
        [
          { type: "bluesky", url: "https://bsky.app/profile/lucaslago.projeto7c0.com.br" },
          { type: "instagram", url: "https://www.instagram.com/institutoasw/" },
        ],
      ),
    ],
    description:
      "Quem se beneficia (e quem perde) com as regras atuais de copyright? Neste painel, profissionais de tecnologia discutem pirataria, acesso à cultura, remuneração de criadores e os benefícios e malefícios da propriedade intelectual.",
  },

  {
    kind: "talk",
    title: "Encerramento do evento",
    date: "2025-11-29",
    hours: "19:05",
    duration: 30,
    members: [macabeus("schedule--presentation-opening-ceremony-first-day-bio")],
    description:
      "Encerramento do evento, com um quiz valendo prêmios! Será que você manja de gambiarra o suficiente para vencer?",
  },

  // { kind: "upcoming" },
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
