import impostorCover from "../assets/projects/impostor/cover.png";
import imp1 from "../assets/projects/impostor/imp1.png";
import imp2 from "../assets/projects/impostor/imp2.png";
import imp3 from "../assets/projects/impostor/imp3.png";
import imp4 from "../assets/projects/impostor/imp4.png";
import imp5 from "../assets/projects/impostor/imp5.png";
import pdbCover from "../assets/projects/pdb/cover.png";
import pdb1 from "../assets/projects/pdb/pdb1.png";
import pdb2 from "../assets/projects/pdb/pdb2.png";
import pdb3 from "../assets/projects/pdb/pdb3.png";
import casinoCover from "../assets/projects/casino/cover.png";
import ztreamCover from "../assets/projects/ztreamgames/cover.png";
import cuevanixCover from "../assets/projects/cuevanix/cover.png";
import fulboCover from "../assets/projects/fulbo/cover.png";
import whispersCover from "../assets/projects/whispers-of-war/app-icon.png";
import whispersHome from "../assets/projects/whispers-of-war/Home.png";
import whispersEnterTheKingdom from "../assets/projects/whispers-of-war/EnterTheKingdom.png";
import whispersLobby from "../assets/projects/whispers-of-war/Lobby.png";
import whispersRole from "../assets/projects/whispers-of-war/Role.png";

export const featuredProjects = [
  {
    id: "impostor-futbolero",
    title: "Impostor Futbolero",
    type: "mobile",
    status: { es: "Publicado en Play Store", en: "Live on Play Store" },
    meta: { es: "2026 · Producto mobile · Multijugador en tiempo real", en: "2026 · Mobile product · Real-time multiplayer" },
    summary: {
      es: "Juego social para móviles basado en salas privadas, votaciones y partidas por turnos.",
      en: "Real-time mobile party game built around private rooms, voting rounds, and turn-based matches.",
    },
    contribution: {
      es: "Diseñé y desarrollé el producto completo: flujo de salas, sincronización de jugadores, votaciones, progresión de rondas, interfaz y publicación.",
      en: "I designed and built the complete product: room flows, player synchronization, voting, round progression, interface, and release.",
    },
    technologies: ["React Native", "Firebase", "Real-time sync"],
    cover: impostorCover,
    images: [impostorCover, imp1, imp2, imp3, imp4, imp5],
    links: { live: "https://play.google.com/store/apps/details?id=com.shaidev.impostorfutbolero&hl=es", privacy: "/impostorfutbolero/privacy-policy" },
  },
  {
    id: "pdb",
    title: "PDB (Pedazo de Boludo)",
    type: "mobile",
    status: { es: "Publicado en Play Store", en: "Live on Play Store" },
    meta: { es: "2026 · Producto mobile · Multijugador en tiempo real", en: "2026 · Mobile product · Real-time multiplayer" },
    summary: {
      es: "Party game multijugador con consignas personalizadas, jueces rotativos e interacción social.",
      en: "Real-time multiplayer party game with custom prompts, rotating judges, and social interaction.",
    },
    contribution: {
      es: "Construí el producto de principio a fin, incluyendo rondas sincronizadas, envío de respuestas, resolución del juez, revanchas y administración de salas.",
      en: "I built the product end to end, including synchronized rounds, answer submission, judge resolution, rematches, and live room management.",
    },
    technologies: ["React Native", "Firebase", "Real-time sync"],
    cover: pdbCover,
    images: [pdbCover, pdb1, pdb2, pdb3],
    links: { live: "https://play.google.com/store/apps/details?id=com.shaidev.pdb", privacy: "/pdb/privacy-policy" },
  },
  {
    id: "whispers-of-war",
    title: "Whispers Of War",
    type: "mobile",
    status: { es: "En desarrollo", en: "In development" },
    meta: { es: "2026 · Producto mobile · Deducción social multijugador", en: "2026 · Mobile product · Multiplayer social deduction" },
    summary: {
      es: "Juego de deducción social en tiempo real donde roles secretos atraviesan noches, debates, acusaciones y juicios hasta que una facción domina el reino.",
      en: "Real-time social deduction game where secret roles navigate nights, debates, accusations, and trials until one faction controls the kingdom.",
    },
    contribution: {
      es: "Diseñé y desarrollé el producto completo: salas públicas y privadas, roles y habilidades, máquina de fases, chats contextuales, sincronización de partidas y resoluciones críticas validadas en Cloud Functions.",
      en: "I designed and built the complete product: public and private rooms, roles and abilities, phase machine, contextual chats, match synchronization, and critical resolutions validated by Cloud Functions.",
    },
    technologies: ["React Native", "Expo", "Firebase", "Cloud Functions"],
    cover: whispersCover,
    images: [whispersCover, whispersHome, whispersEnterTheKingdom, whispersLobby, whispersRole],
    links: { privacy: "/whispers-of-war/privacy-policy" },
  },
];

export const additionalProjects = [
  {
    id: "deltabet",
    title: "DeltaBet Casino Games",
    cover: casinoCover,
    description: {
      es: "Desarrollé el frontend completo de juegos multijugador en producción, incluyendo reglas, rondas, eventos aleatorios y flujos multilingües.",
      en: "Built the complete frontend for production multiplayer games, including rules, rounds, random events, and multilingual flows.",
    },
    link: "https://godsroulette.app/",
    linkType: "live",
  },
  {
    id: "ztreamgames",
    title: "ZtreamGames",
    cover: ztreamCover,
    description: { es: "Implementé la lógica de filtros y el flujo de datos entre frontend y backend.", en: "Handled filtering logic and data flow between frontend and backend." },
    link: "https://github.com/Shaikohn/ZtreamGames",
    linkType: "github",
  },
  {
    id: "cuevanix",
    title: "Cuevanix",
    cover: cuevanixCover,
    description: { es: "Construí la lógica del carrito y el proceso de checkout con Stripe.", en: "Built cart logic and handled the checkout flow with Stripe." },
    link: "https://github.com/Shaikohn/Cuevanix",
    linkType: "github",
  },
  {
    id: "fulbo",
    title: "Fulbo.fun",
    cover: fulboCover,
    description: { es: "Construí el sitio desde cero, incluyendo preventa, páginas responsive y navegación.", en: "Built the site from scratch, including the presale flow, responsive pages, and navigation." },
    link: "https://github.com/Shaikohn/Fulbo",
    linkType: "github",
  },
];
