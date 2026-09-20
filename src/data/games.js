import impostorCover from "../assets/projects/impostor/logo.png";
import impostorHome from "../assets/projects/impostor/home.webp";
import impostorRole from "../assets/projects/impostor/rol.webp";
import impostorClues from "../assets/projects/impostor/pistas.webp";
import impostorVoting from "../assets/projects/impostor/votacion.webp";
import impostorChat from "../assets/projects/impostor/chat.webp";
import impostorLobby from "../assets/projects/impostor/lobby.webp";
import impostorWin from "../assets/projects/impostor/win.webp";
import pdbCover from "../assets/projects/pdb/logo.png";
import pdb1 from "../assets/projects/pdb/pdb1.webp";
import pdb2 from "../assets/projects/pdb/pdb2.webp";
import pdb3 from "../assets/projects/pdb/pdb3.webp";
import whispersCover from "../assets/projects/whispers-of-war/logo.png";
import whispersEs1 from "../assets/projects/whispers-of-war/spanish/1.webp";
import whispersEs2 from "../assets/projects/whispers-of-war/spanish/2.webp";
import whispersEs3 from "../assets/projects/whispers-of-war/spanish/3.webp";
import whispersEs4 from "../assets/projects/whispers-of-war/spanish/4.webp";
import whispersEs5 from "../assets/projects/whispers-of-war/spanish/5.webp";
import whispersEs6 from "../assets/projects/whispers-of-war/spanish/6.webp";
import whispersEs7 from "../assets/projects/whispers-of-war/spanish/7.webp";
import whispersEn1 from "../assets/projects/whispers-of-war/english/1.webp";
import whispersEn2 from "../assets/projects/whispers-of-war/english/2.webp";
import whispersEn3 from "../assets/projects/whispers-of-war/english/3.webp";
import whispersEn4 from "../assets/projects/whispers-of-war/english/4.webp";
import whispersEn5 from "../assets/projects/whispers-of-war/english/5.webp";
import whispersEn6 from "../assets/projects/whispers-of-war/english/6.webp";
import whispersEn7 from "../assets/projects/whispers-of-war/english/7.webp";

export const games = [
  {
    id: "impostor-futbolero",
    title: "Impostor Futbolero",
    type: "mobile",
    availability: "published",
    theme: { accent: "#d7ff32", accentAlt: "#38bdf8", surface: "#10160d", glow: "rgba(163,230,53,.20)" },
    status: { es: "Disponible en Play Store", en: "Available on Play Store" },
    genre: { es: "Party game multijugador", en: "Multiplayer party game" },
    player: {
      tagline: { es: "Descubrí al impostor antes de que engañe a todo el grupo.", en: "Find the impostor before they fool the entire group." },
      description: { es: "Un juego multijugador para mentir, desconfiar y reírte con otros jugadores en salas públicas o privadas.", en: "A multiplayer game about lying, distrusting everyone, and laughing with other players in public or private rooms." },
      highlights: {
        es: ["Salas privadas", "Partidas en tiempo real", "Votaciones y rondas"],
        en: ["Private rooms", "Real-time matches", "Voting and rounds"],
      },
      intro: {
        es: [
          "Si te gustan los juegos tipo impostor, este va directo a esa tensión de no saber quién improvisa y quién realmente entiende la carta.",
          "Todos reciben una carta, excepto uno. Ese jugador tiene que mentir bien, leer la mesa y convencer al resto de que sabe exactamente de qué se está hablando.",
        ],
        en: [
          "If you enjoy impostor-style games, this one leans hard into the tension of not knowing who is improvising and who actually understands the prompt.",
          "Everyone gets a card except one player. That player has to lie well, read the room, and convince the group they know exactly what is being discussed.",
        ],
      },
      howItWorks: {
        es: ["Todos dicen una pista", "Intentás descubrir quién está inventando", "El grupo vota y alguien queda afuera"],
        en: ["Everyone gives a clue", "You try to spot who is making it up", "The group votes and someone gets kicked out"],
      },
      featureList: {
        es: ["Partidas rápidas y dinámicas", "Salas públicas y privadas", "Sistema de pistas y votación", "Chat rápido durante la partida"],
        en: ["Fast-paced matches", "Public and private rooms", "Clue and voting system", "Quick in-match chat"],
      },
      extraInfo: {
        es: ["Juego gratuito", "Sin compras dentro de la app", "Requiere conexión a internet", "Proyecto independiente en constante desarrollo"],
        en: ["Free to play", "No in-app purchases", "Internet connection required", "Independent project under active development"],
      },
      closing: {
        es: "No es un juego para tomarse en serio. Es para mentir bien o descubrir al que lo está haciendo antes de que arruine toda la ronda.",
        en: "It is not meant to be taken too seriously. It is built for lying well or exposing the player who is doing it before they ruin the whole round.",
      },
      disclaimer: {
        es: "Este juego no está afiliado, patrocinado ni relacionado con jugadores, clubes u organizaciones reales. Todos los personajes son parodias ficticias creadas con fines de entretenimiento.",
        en: "This game is not affiliated with, endorsed by, or connected to any real players, clubs, or organizations. All characters are fictional parodies created for entertainment purposes only.",
      },
    },
    professional: {
      meta: { es: "2026 · Producto mobile · Multijugador en tiempo real", en: "2026 · Mobile product · Real-time multiplayer" },
      summary: { es: "Juego social para móviles basado en salas privadas, votaciones y partidas por turnos.", en: "Real-time mobile party game built around private rooms, voting rounds, and turn-based matches." },
      contribution: { es: "Diseñé y desarrollé el producto completo: flujo de salas, sincronización de jugadores, votaciones, progresión de rondas, interfaz y publicación.", en: "I designed and built the complete product: room flows, player synchronization, voting, round progression, interface, and release." },
      ownership: { es: "Producto completo diseñado, desarrollado y publicado de forma independiente.", en: "Designed, developed, and shipped independently from end to end." },
      technologies: ["React Native", "Firebase", "Real-time sync"],
      caseStudy: {
        challenge: { es: "Coordinar pistas, turnos, votaciones y expulsiones entre varios dispositivos sin que una conexión tardía o una acción repetida desincronice la partida.", en: "Coordinate clues, turns, voting, and eliminations across multiple devices without letting a late connection or repeated action desynchronize the match." },
        architecture: { es: ["Estado de sala compartido y sincronizado en tiempo real", "Flujo de partida dividido en fases con transiciones controladas", "Validaciones para mantener una única resolución por ronda"], en: ["Shared room state synchronized in real time", "Match flow divided into phases with controlled transitions", "Validation to preserve a single resolution per round"] },
        decisions: { es: ["Separé el estado persistente de la interfaz local para que cada pantalla pudiera reaccionar sin duplicar la lógica de la partida.", "Modelé pistas, votos y resultados como etapas explícitas en lugar de depender de navegación o temporizadores aislados.", "Diseñé salas públicas y privadas sobre el mismo flujo base para reducir caminos especiales y mantenimiento."], en: ["I separated persistent match state from local UI state so each screen could react without duplicating game logic.", "I modeled clues, votes, and results as explicit stages instead of relying on navigation or isolated timers.", "I designed public and private rooms on top of the same core flow to reduce special paths and maintenance."] },
        outcomes: { es: ["Producto publicado en Google Play", "Flujo multijugador completo de sala a resultado", "Base reutilizable para nuevas cartas y contenido"], en: ["Product released on Google Play", "Complete multiplayer flow from room to results", "Reusable foundation for new cards and content"] },
      },
    },
    cover: impostorCover,
    images: [impostorCover, impostorHome, impostorRole, impostorClues, impostorVoting, impostorChat, impostorLobby, impostorWin],
    links: { store: "https://play.google.com/store/apps/details?id=com.shaidev.impostorfutbolero&hl=es", privacy: "/impostorfutbolero/privacy-policy" },
  },
  {
    id: "pdb",
    title: "PDB (Pedazo de Boludo)",
    shortTitle: "Pedazo de Boludo",
    type: "mobile",
    availability: "published",
    theme: { accent: "#f5f5f4", accentAlt: "#fb7185", surface: "#111111", glow: "rgba(244,63,94,.16)" },
    status: { es: "Disponible en Play Store", en: "Available on Play Store" },
    genre: { es: "Party game multijugador", en: "Multiplayer party game" },
    player: {
      tagline: { es: "Respuestas, jueces rotativos y el caos justo para una noche con amigos.", en: "Answers, rotating judges, and just enough chaos for a night with friends." },
      description: { es: "Un party game online para improvisar, completar frases y decir las boludeces más graciosas antes que los demás.", en: "An online party game about improvising, finishing phrases, and landing the funniest nonsense before everyone else does." },
      highlights: {
        es: ["Consignas personalizadas", "Jueces rotativos", "Salas multijugador"],
        en: ["Custom prompts", "Rotating judges", "Multiplayer rooms"],
      },
      intro: {
        es: [
          "PDB está pensado para noches en las que nadie quiere jugar algo prolijo. La gracia es improvisar, arriesgar una respuesta absurda y ver hasta dónde están dispuestos a llegar los demás.",
          "En cada ronda aparece una frase incompleta, todos responden y una persona hace de juez. Ganar puntos está bien, pero humillar a tus amigos con una respuesta ridícula suele ser mejor.",
        ],
        en: [
          "PDB is built for nights when nobody wants a polished, serious game. The fun comes from improvising, taking a ridiculous swing, and seeing how far everyone else is willing to go.",
          "Each round starts with an incomplete phrase, everyone answers, and one player acts as judge. Scoring points is nice, but embarrassing your friends with a perfect absurd answer is usually better.",
        ],
      },
      howItWorks: {
        es: ["Aparece una frase incompleta", "Todos responden", "El juez elige la mejor respuesta", "Ganás puntos o humillación pública"],
        en: ["An incomplete phrase appears", "Everyone answers", "The judge picks the best response", "You earn points or public embarrassment"],
      },
      modes: {
        es: [
          { title: "Freestyle", description: "Escribís cualquier cosa. Sin filtros, sin cartas y sin límites creativos." },
          { title: "Clásico", description: "Usás cartas y combinaciones para intentar construir la respuesta más absurda posible." },
        ],
        en: [
          { title: "Freestyle", description: "Write anything you want. No filters, no cards, and no creative limits." },
          { title: "Classic", description: "Use cards and combinations to build the most absurd answer you can." },
        ],
      },
      featureList: {
        es: ["Multiplayer online en tiempo real", "Modo Freestyle y modo Clásico", "Salas públicas y privadas", "Sistema de votaciones y resultados", "Partidas rápidas y dinámicas", "Diseñado especialmente para mobile"],
        en: ["Real-time online multiplayer", "Freestyle and Classic modes", "Public and private rooms", "Voting and results system", "Fast-paced matches", "Designed specifically for mobile"],
      },
      extraInfo: {
        es: ["Juego gratuito", "Sin compras dentro de la app", "Requiere conexión a internet", "Proyecto independiente en constante desarrollo"],
        en: ["Free to play", "No in-app purchases", "Internet connection required", "Independent project under active development"],
      },
      closing: {
        es: "No es un juego para tomarse en serio. Es para improvisar, reirte y descubrir quien es el verdadero pedazo de boludo de la sala.",
        en: "It is not a game to take seriously. It is for improvising, laughing, and finding out who the real idiot in the room is.",
      },
    },
    professional: {
      meta: { es: "2026 · Producto mobile · Multijugador en tiempo real", en: "2026 · Mobile product · Real-time multiplayer" },
      summary: { es: "Party game multijugador con consignas personalizadas, jueces rotativos e interacción social.", en: "Real-time multiplayer party game with custom prompts, rotating judges, and social interaction." },
      contribution: { es: "Construí el producto de principio a fin, incluyendo rondas sincronizadas, envío de respuestas, resolución del juez, revanchas y administración de salas.", en: "I built the product end to end, including synchronized rounds, answer submission, judge resolution, rematches, and live room management." },
      ownership: { es: "Producto completo diseñado, desarrollado y publicado de forma independiente.", en: "Designed, developed, and shipped independently from end to end." },
      technologies: ["React Native", "Firebase", "Real-time sync"],
      caseStudy: {
        challenge: { es: "Sostener rondas sincronizadas con respuestas privadas, un juez rotativo y dos modos de juego, manteniendo claro qué puede hacer cada participante en cada momento.", en: "Keep rounds synchronized across private answers, a rotating judge, and two game modes while making each participant's available actions clear at every step." },
        architecture: { es: ["Ciclo de ronda compartido entre jugadores y juez", "Estado diferenciado para respuestas, selección y resultados", "Modos Clásico y Freestyle sobre una estructura común"], en: ["Round lifecycle shared between players and judge", "Distinct state for answers, selection, and results", "Classic and Freestyle modes built on a common structure"] },
        decisions: { es: ["Centralicé la progresión de la ronda para evitar que cada dispositivo interpretara por su cuenta cuándo avanzar.", "Separé las reglas del modo del flujo multijugador, permitiendo cambiar la forma de responder sin duplicar toda la partida.", "Diseñé reconexión y revancha como partes del ciclo principal, no como excepciones posteriores."], en: ["I centralized round progression so devices would not independently decide when to advance.", "I separated mode rules from the multiplayer flow, allowing response mechanics to change without duplicating the whole match.", "I treated reconnection and rematches as part of the main lifecycle rather than later exceptions."] },
        outcomes: { es: ["Producto publicado en Google Play", "Dos modos sobre un mismo núcleo multijugador", "Partidas completas con revancha y continuidad de sala"], en: ["Product released on Google Play", "Two modes running on one multiplayer core", "Complete matches with rematches and room continuity"] },
      },
    },
    cover: pdbCover,
    images: [pdbCover, pdb1, pdb2, pdb3],
    links: { store: "https://play.google.com/store/apps/details?id=com.shaidev.pdb", privacy: "/pdb/privacy-policy" },
  },
  {
    id: "whispers-of-war",
    title: "Whispers Of War",
    type: "mobile",
    availability: "testing",
    theme: { accent: "#f5c451", accentAlt: "#a855f7", surface: "#120b18", glow: "rgba(168,85,247,.22)" },
    status: { es: "En testing", en: "In testing" },
    genre: { es: "Deducción social multijugador", en: "Multiplayer social deduction" },
    player: {
      tagline: { es: "El reino duerme. Las facciones conspiran. Nadie es completamente confiable.", en: "The kingdom sleeps. Factions conspire. No one is entirely trustworthy." },
      description: { es: "Una experiencia de deducción social con roles secretos, acusaciones, juicios y alianzas que cambian en cada partida.", en: "A social deduction experience built around secret roles, accusations, trials, and alliances that shift every match." },
      highlights: {
        es: ["Roles y facciones", "Salas públicas y privadas", "Debates y chats contextuales"],
        en: ["Roles and factions", "Public and private rooms", "Debates and contextual chats"],
      },
      intro: {
        es: [
          "Whispers Of War apunta a una tensión distinta: menos caos inmediato y más lectura social, sospecha y estrategias cruzadas entre facciones.",
          "Cada jugador entra al reino con un rol secreto, habilidades propias y objetivos que no siempre coinciden con la verdad que está diciendo en voz alta.",
        ],
        en: [
          "Whispers Of War goes after a different kind of tension: less instant chaos and more social reading, suspicion, and layered faction strategy.",
          "Every player enters the kingdom with a secret role, unique abilities, and goals that do not always match what they are saying out loud.",
        ],
      },
      howItWorks: {
        es: ["La partida avanza por fases de noche, debate y juicio", "Las habilidades alteran información, poder y supervivencia", "Las facciones intentan dominar el reino sin exponerse demasiado"],
        en: ["Matches move through night, debate, and trial phases", "Abilities shift information, power, and survival", "Factions try to control the kingdom without exposing themselves too early"],
      },
      featureList: {
        es: ["Roles y facciones con objetivos distintos", "Habilidades nocturnas", "Salas públicas y privadas", "Debates y chats contextuales"],
        en: ["Roles and factions with different goals", "Night abilities", "Public and private rooms", "Debates and contextual chats"],
      },
      extraInfo: {
        es: ["Actualmente en testing", "Requiere conexión a internet", "Proyecto independiente en desarrollo"],
        en: ["Currently in testing", "Internet connection required", "Independent project in development"],
      },
      closing: {
        es: "No se gana solamente por hablar mejor. Tambien importa leer silencios, interpretar alianzas y elegir exactamente cuando traicionar a otro jugador.",
        en: "You do not win just by talking better. You also need to read silences, interpret alliances, and pick the exact moment to betray another player.",
      },
    },
    professional: {
      meta: { es: "2026 · Producto mobile · Testing multijugador", en: "2026 · Mobile product · Multiplayer testing" },
      summary: { es: "Juego de deducción social en tiempo real donde roles secretos atraviesan noches, debates, acusaciones y juicios hasta que una facción domina el reino.", en: "Real-time social deduction game where secret roles navigate nights, debates, accusations, and trials until one faction controls the kingdom." },
      contribution: { es: "Diseñé y desarrollé el producto completo: salas públicas y privadas, roles y habilidades, máquina de fases, chats contextuales, sincronización de partidas y resoluciones críticas validadas en Cloud Functions.", en: "I designed and built the complete product: public and private rooms, roles and abilities, phase machine, contextual chats, match synchronization, and critical resolutions validated by Cloud Functions." },
      ownership: { es: "Producto completo diseñado y desarrollado de forma independiente; actualmente en testing.", en: "Designed and developed independently from end to end; currently in testing." },
      technologies: ["React Native", "Expo", "Firebase", "Cloud Functions"],
      caseStudy: {
        challenge: { es: "Modelar una partida de deducción social con información secreta, habilidades simultáneas y múltiples facciones sin exponer datos privados ni permitir resoluciones contradictorias.", en: "Model a social deduction match with secret information, simultaneous abilities, and multiple factions without exposing private data or allowing contradictory resolutions." },
        architecture: { es: ["Máquina de estados para noche, debate, acusación y juicio", "Información pública y privada separada por rol", "Resoluciones críticas procesadas mediante Cloud Functions"], en: ["State machine for night, debate, accusation, and trial phases", "Public and private information separated by role", "Critical resolutions processed through Cloud Functions"] },
        decisions: { es: ["Representé cada fase como un estado explícito con acciones permitidas, reduciendo transiciones ambiguas entre clientes.", "Moví las resoluciones sensibles fuera del dispositivo para que el cliente solicite acciones sin decidir su resultado final.", "Diseñé roles y habilidades como datos configurables para ampliar el elenco sin reescribir el motor de partida."], en: ["I represented every phase as an explicit state with allowed actions, reducing ambiguous transitions between clients.", "I moved sensitive resolutions off-device so clients request actions without deciding their final outcome.", "I designed roles and abilities as configurable data so the roster can grow without rewriting the match engine."] },
        outcomes: { es: ["Flujo jugable completo actualmente en testing", "Arquitectura preparada para múltiples roles y facciones", "Autoridad reforzada en las decisiones críticas de la partida"], en: ["Complete playable flow currently in testing", "Architecture prepared for multiple roles and factions", "Stronger authority over critical match decisions"] },
      },
    },
    cover: whispersCover,
    images: {
      es: [whispersCover, whispersEs1, whispersEs2, whispersEs3, whispersEs4, whispersEs5, whispersEs6, whispersEs7],
      en: [whispersCover, whispersEn1, whispersEn2, whispersEn3, whispersEn4, whispersEn5, whispersEn6, whispersEn7],
    },
    links: { privacy: "/whispers-of-war/privacy-policy" },
  },
];

export const getGameById = (id) => games.find((game) => game.id === id);

export const getGameImages = (game, language) =>
  Array.isArray(game.images) ? game.images : game.images[language] ?? game.images.es;
