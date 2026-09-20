import casinoCover from "../assets/projects/casino/cover.png";
import ztreamCover from "../assets/projects/ztreamgames/cover.png";
import cuevanixCover from "../assets/projects/cuevanix/cover.png";
import fulboCover from "../assets/projects/fulbo/cover.png";
import { games } from "./games";

export const featuredProjects = games.map((game) => ({
  id: game.id,
  title: game.title,
  type: game.type,
  status: game.status,
  meta: game.professional.meta,
  summary: game.professional.summary,
  contribution: game.professional.contribution,
  ownership: game.professional.ownership,
  technologies: game.professional.technologies,
  cover: game.cover,
  images: game.images,
  links: {
    live: game.links.store,
    caseStudy: `/portfolio/${game.id}`,
  },
}));

export const additionalProjects = [
  {
    id: "deltabet",
    title: "DeltaBet Casino Games",
    cover: casinoCover,
    description: {
      es: "Desarrollé el frontend completo de juegos multijugador en producción, incluyendo reglas, rondas, eventos aleatorios y flujos multilingües.",
      en: "Built the complete frontend for production multiplayer games, including rules, rounds, random events, and multilingual flows.",
    },
    meta: { es: "Implementación profesional · Juegos web", en: "Professional implementation · Web games" },
    contribution: { es: "Implementé interfaces y lógica de juego para experiencias multijugador entregadas a un tercero, trabajando sobre reglas, rondas, eventos aleatorios, estados de partida y localización.", en: "I implemented interfaces and game logic for multiplayer experiences delivered to a third party, covering rules, rounds, random events, match states, and localization." },
    ownership: { es: "Implementación frontend dentro de un producto de terceros; el código y los dominios no son públicos.", en: "Frontend implementation within a third-party product; its source code and domains are not public." },
    technologies: ["React", "Vite", "JavaScript", "Responsive UI"],
    caseStudy: {
      challenge: { es: "Traducir reglas de casino y dinámicas multijugador a flujos visuales claros, consistentes y utilizables en distintas resoluciones e idiomas.", en: "Translate casino rules and multiplayer dynamics into clear, consistent visual flows across screen sizes and languages." },
      architecture: { es: ["Componentes de interfaz organizados por estado de partida", "Lógica de rondas y eventos separada de la presentación", "Contenido preparado para múltiples idiomas"], en: ["Interface components organized around match state", "Round and event logic separated from presentation", "Content prepared for multiple languages"] },
      decisions: { es: ["Representé los cambios de ronda como estados explícitos para mantener alineadas la lógica y la interfaz.", "Construí componentes reutilizables para compartir patrones entre distintas implementaciones sin uniformar la identidad visual.", "Priorizé feedback inmediato para que cada acción y resultado fuera comprensible sin documentación externa."], en: ["I represented round changes as explicit states to keep logic and interface aligned.", "I built reusable components to share patterns across implementations without flattening their visual identities.", "I prioritized immediate feedback so every action and result remained understandable without external documentation."] },
      outcomes: { es: ["Dos experiencias de juego implementadas", "Flujos multilingües y responsive", "Entrega integrada a un producto de terceros"], en: ["Two game experiences implemented", "Multilingual responsive flows", "Delivery integrated into a third-party product"] },
    },
  },
  {
    id: "ztreamgames",
    title: "ZtreamGames",
    cover: ztreamCover,
    description: { es: "Implementé la lógica de filtros y el flujo de datos entre frontend y backend.", en: "Handled filtering logic and data flow between frontend and backend." },
    link: "https://github.com/Shaikohn/ZtreamGames",
    linkType: "github",
    meta: { es: "Proyecto grupal · E-commerce full-stack", en: "Team project · Full-stack e-commerce" },
    contribution: { es: "Dentro del equipo me concentré en la lógica de búsqueda, filtros y ordenamiento del catálogo, además del flujo de datos entre el frontend y la API.", en: "Within the team, I focused on catalog search, filtering, and sorting logic, as well as the data flow between the frontend and API." },
    ownership: { es: "Proyecto final grupal de Soy Henry; el caso distingue mi contribución del alcance total del producto.", en: "Soy Henry team capstone; this case separates my contribution from the full product scope." },
    technologies: ["React", "Redux Toolkit", "Express", "MongoDB", "RAWG API"],
    caseStudy: {
      challenge: { es: "Combinar búsqueda, filtros y ordenamiento sobre un catálogo alimentado por datos externos sin generar estados contradictorios en la interfaz.", en: "Combine search, filters, and sorting over an externally sourced catalog without producing contradictory UI state." },
      architecture: { es: ["Estado global del catálogo con Redux", "Consultas y transformaciones coordinadas con la API", "Interfaz de filtros compuesta y reutilizable"], en: ["Global catalog state with Redux", "Queries and transformations coordinated with the API", "Composable, reusable filter interface"] },
      decisions: { es: ["Concentré los criterios activos en un único flujo de estado para evitar filtros que se sobrescribieran entre sí.", "Separé la obtención de datos de su presentación para simplificar carga, errores y resultados vacíos.", "Mantuve la lógica compatible con búsqueda, orden y múltiples filtros aplicados en conjunto."], en: ["I kept active criteria in a single state flow to prevent filters from overriding each other.", "I separated data fetching from presentation to simplify loading, errors, and empty results.", "I kept the logic compatible with search, sorting, and multiple simultaneous filters."] },
      outcomes: { es: ["Catálogo explorable con criterios combinables", "Integración consistente entre cliente y API", "Aporte delimitado dentro de un equipo full-stack"], en: ["Browsable catalog with combinable criteria", "Consistent client-to-API integration", "Clearly scoped contribution within a full-stack team"] },
    },
  },
  {
    id: "cuevanix",
    title: "Cuevanix",
    cover: cuevanixCover,
    description: { es: "Construí la lógica del carrito y el proceso de checkout con Stripe.", en: "Built cart logic and handled the checkout flow with Stripe." },
    link: "https://github.com/Shaikohn/Cuevanix",
    linkType: "github",
    meta: { es: "Proyecto individual · Aplicación full-stack", en: "Individual project · Full-stack application" },
    contribution: { es: "Construí la aplicación completa, con catálogo de películas, autenticación, carrito persistente, checkout de prueba con Stripe y herramientas de administración.", en: "I built the complete application, including its movie catalog, authentication, persistent cart, Stripe test checkout, and administration tools." },
    ownership: { es: "Proyecto individual educativo; los pagos funcionan exclusivamente en modo de prueba.", en: "Individual educational project; payments operate exclusively in test mode." },
    technologies: ["React", "Redux Toolkit", "Express", "MongoDB", "Stripe", "TMDB API"],
    caseStudy: {
      challenge: { es: "Conectar catálogo, sesión, carrito y checkout sin perder consistencia entre el estado del cliente, la API propia y servicios externos.", en: "Connect catalog, session, cart, and checkout while preserving consistency across client state, the custom API, and external services." },
      architecture: { es: ["Frontend React con estado global en Redux", "API REST con Express y persistencia en MongoDB", "Integraciones separadas para TMDB, autenticación y Stripe"], en: ["React frontend with global Redux state", "Express REST API with MongoDB persistence", "Separate integrations for TMDB, authentication, and Stripe"] },
      decisions: { es: ["Modelé el carrito como estado transversal para conservar selecciones a través del catálogo, detalle y checkout.", "Mantuve las claves y operaciones sensibles del pago en el backend.", "Separé datos externos de películas y datos propios de usuarios, compras y moderación."], en: ["I modeled the cart as cross-cutting state to preserve selections across catalog, detail, and checkout.", "I kept sensitive payment keys and operations on the backend.", "I separated external movie data from owned user, purchase, and moderation data."] },
      outcomes: { es: ["Flujo completo desde descubrimiento hasta compra simulada", "Aplicación full-stack desarrollada individualmente", "Integración de API externa y pasarela de pago"], en: ["Complete discovery-to-simulated-purchase flow", "Individually built full-stack application", "External API and payment gateway integration"] },
    },
  },
  {
    id: "fulbo",
    title: "Fulbo.fun",
    cover: fulboCover,
    description: { es: "Construí el sitio desde cero, incluyendo preventa, páginas responsive y navegación.", en: "Built the site from scratch, including the presale flow, responsive pages, and navigation." },
    link: "https://fulbo.fun/",
    linkType: "live",
    meta: { es: "Sitio en producción · Desarrollo frontend", en: "Production website · Frontend development" },
    contribution: { es: "Construí el sitio responsive en Next.js, organicé sus páginas y componentes, implementé la navegación y preparé el flujo visual de preventa.", en: "I built the responsive Next.js website, organized its pages and components, implemented navigation, and prepared the visual presale flow." },
    ownership: { es: "Implementación frontend completa sobre la identidad y el contenido del producto.", en: "Complete frontend implementation based on the product's identity and content." },
    technologies: ["Next.js", "React", "TypeScript", "Responsive CSS"],
    caseStudy: {
      challenge: { es: "Transformar una identidad visual fuerte en un sitio rápido y adaptable, con una estructura preparada para crecer más allá de la landing inicial.", en: "Turn a strong visual identity into a fast, adaptable website with a structure prepared to grow beyond the initial landing page." },
      architecture: { es: ["Rutas y layouts mediante Next.js App Router", "Secciones desacopladas como componentes", "Estilos responsive específicos por experiencia"], en: ["Routes and layouts through Next.js App Router", "Decoupled section components", "Experience-specific responsive styling"] },
      decisions: { es: ["Dividí la landing en componentes con responsabilidad visual clara para facilitar cambios de contenido.", "Preparé la preventa como ruta independiente para permitir reemplazar el placeholder sin rehacer la navegación.", "Priorizé composición responsive en lugar de depender de una única maqueta de escritorio."], en: ["I divided the landing page into components with clear visual responsibility to simplify content changes.", "I prepared presale as an independent route so its placeholder can be replaced without rebuilding navigation.", "I prioritized responsive composition instead of relying on a single desktop layout."] },
      outcomes: { es: ["Sitio público disponible en fulbo.fun", "Base modular para nuevas páginas", "Experiencia consistente en desktop y mobile"], en: ["Public website available at fulbo.fun", "Modular foundation for additional pages", "Consistent desktop and mobile experience"] },
    },
  },
];

export const getAdditionalProjectById = (id) => additionalProjects.find((project) => project.id === id);
