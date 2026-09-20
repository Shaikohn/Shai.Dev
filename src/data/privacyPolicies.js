const common = {
  es: {
    intro: (name) => `Esta Política de Privacidad explica cómo Shai Kohn (“nosotros”) recopila, utiliza, almacena y protege información cuando usás ${name} (el “Juego”).`,
    sections: {
      firebase: ["Firebase e información técnica", "El Juego utiliza Google Firebase, incluyendo Authentication y Cloud Firestore, y puede utilizar Cloud Functions. Estos servicios procesan información técnica necesaria para autenticar usuarios, operar y proteger el servicio, como identificadores, dirección IP, user agent, datos de solicitudes, aplicación y funcionamiento."],
      use: ["Cómo usamos la información", "Usamos esta información para crear y mantener perfiles anónimos; operar salas y partidas; sincronizar jugadores; mostrar nombres y contenido dentro de la partida; prevenir abuso; resolver problemas técnicos; mantener compatibilidad entre versiones y cumplir obligaciones legales. No vendemos información personal ni la utilizamos actualmente para publicidad de terceros."],
      sharing: ["Cómo se comparte la información", "El nombre elegido y determinada información de juego se muestran a otros participantes cuando es necesario para jugar. Google procesa información como proveedor de infraestructura conforme a sus propios términos. También podremos divulgar información si una obligación legal válida lo requiere o para proteger a usuarios, al Juego o nuestros derechos."],
      retention: ["Retención", "Las salas y sus datos asociados tienen fechas de expiración y son eliminados periódicamente cuando dejan de estar activos. Cierta información de moderación puede conservarse durante más tiempo cuando resulte razonablemente necesaria para investigar abuso, aplicar reglas, resolver disputas o cumplir obligaciones legales."],
      rights: ["Acceso y eliminación", "Podés solicitar acceso, corrección o eliminación escribiendo a shai.kohn.dev@gmail.com. Debido a que la autenticación es anónima, podremos pedir información que permita identificar la instalación o el perfil correspondiente. Desinstalar el Juego elimina sus datos locales, pero no necesariamente elimina de inmediato la información almacenada en nuestros servidores."],
      security: ["Seguridad", "Aplicamos medidas técnicas y organizativas razonables para proteger la información. Las conexiones con Firebase utilizan cifrado en tránsito, pero ningún sistema conectado a internet puede garantizar seguridad absoluta."],
      children: ["Privacidad de menores", "El Juego no está dirigido a menores de 13 años ni a personas por debajo de la edad mínima aplicable en su país. No buscamos recopilar deliberadamente información personal de menores por debajo de esa edad. Si creés que esto ocurrió, contactanos para investigarlo."],
      international: ["Procesamiento internacional y derechos", "La información puede procesarse o almacenarse fuera de tu país en lugares donde Google o sus proveedores operan infraestructura. Según tu jurisdicción, podrías tener derechos de acceso, corrección, eliminación, oposición, restricción o reclamo ante una autoridad de protección de datos."],
      changes: ["Cambios", "Podemos actualizar esta política cuando cambien el Juego, sus servicios o los requisitos aplicables. Publicaremos la nueva fecha de vigencia en esta página y comunicaremos cambios importantes cuando corresponda."],
      contact: ["Contacto", "Responsable: Shai Kohn · Argentina · shai.kohn.dev@gmail.com"],
    },
  },
  en: {
    intro: (name) => `This Privacy Policy explains how Shai Kohn (“we,” “us,” or “our”) collects, uses, stores, and protects information when you use ${name} (the “Game”).`,
    sections: {
      firebase: ["Firebase and technical information", "The Game uses Google Firebase, including Authentication and Cloud Firestore, and may use Cloud Functions. These services process technical information required to authenticate users, operate, and protect the service, such as identifiers, IP address, user agent, request, application, and operational data."],
      use: ["How we use information", "We use this information to create and maintain anonymous profiles; operate rooms and matches; synchronize players; display names and content within a match; prevent abuse; diagnose technical issues; maintain version compatibility; and comply with legal obligations. We do not sell personal information or currently use it for third-party advertising."],
      sharing: ["How information is shared", "Your chosen name and certain gameplay information are shown to other participants where required to play. Google processes information as an infrastructure provider under its applicable terms. We may also disclose information when required by a valid legal obligation or to protect users, the Game, or our rights."],
      retention: ["Data retention", "Rooms and their associated data have expiration dates and are periodically deleted after they are no longer active. Certain moderation information may be retained longer where reasonably necessary to investigate abuse, enforce rules, resolve disputes, or comply with legal obligations."],
      rights: ["Access and deletion", "You may request access, correction, or deletion by emailing shai.kohn.dev@gmail.com. Because authentication is anonymous, we may request information that allows us to identify the relevant installation or profile. Uninstalling the Game removes local data but may not immediately delete information stored on our servers."],
      security: ["Security", "We apply reasonable technical and organizational measures designed to protect information. Connections to Firebase use encryption in transit, but no internet-connected system can guarantee absolute security."],
      children: ["Children’s privacy", "The Game is not directed to children under 13 or anyone below the minimum applicable age in their country. We do not knowingly seek to collect personal information from children below that age. If you believe this occurred, contact us so we can investigate."],
      international: ["International processing and privacy rights", "Information may be processed or stored outside your country where Google or its providers operate infrastructure. Depending on your jurisdiction, you may have rights to access, correct, delete, object to, or restrict processing, or complain to a data protection authority."],
      changes: ["Changes", "We may update this policy when the Game, its services, or applicable requirements change. We will publish the new effective date on this page and communicate material changes where appropriate."],
      contact: ["Contact", "Controller: Shai Kohn · Argentina · shai.kohn.dev@gmail.com"],
    },
  },
};

const policies = {
  impostor: {
    name: "Impostor Futbolero",
    specific: {
      es: [
        ["Cuenta anónima y datos locales", "Firebase genera un identificador anónimo; no pedimos email, contraseña, teléfono ni nombre real. En tu dispositivo guardamos el nombre y avatar elegidos, la sesión anónima y la referencia de una sala activa para facilitar la continuidad."],
        ["Información de salas y partidas", "Procesamos nombre y avatar, pertenencia y configuración de sala, estado de jugadores, cartas o roles asignados, pistas escritas, votos, resultados, mensajes rápidos y marcas de tiempo necesarias para sincronizar la partida. Parte de esta información es visible para otros jugadores según la fase."],
        ["Reportes y moderación", "Los jugadores pueden denunciar nombres o pistas. Un reporte puede incluir identificadores anónimos del denunciante y denunciado, contenido reportado, sala, ronda y marcas de tiempo. Se utiliza para revisar conducta, evitar reportes duplicados y aplicar medidas dentro de la partida."],
      ],
      en: [
        ["Anonymous account and local data", "Firebase generates an anonymous identifier; we do not request an email, password, phone number, or real name. We store your chosen name and avatar, anonymous session, and active-room reference on your device to support continuity."],
        ["Room and gameplay information", "We process your name and avatar, room membership and settings, player state, assigned cards or roles, written clues, votes, results, quick messages, and timestamps required to synchronize the match. Some of this information is visible to other players depending on the phase."],
        ["Reports and moderation", "Players may report names or clues. A report may include anonymous identifiers for the reporter and reported player, reported content, room, round, and timestamps. It is used to review behavior, prevent duplicate reports, and apply in-match measures."],
      ],
    },
  },
  pdb: {
    name: "PDB (Pedazo de Boludo)",
    specific: {
      es: [
        ["Cuenta anónima y datos locales", "Firebase genera un identificador anónimo; no pedimos email, contraseña, teléfono ni nombre real. En tu dispositivo guardamos el nombre elegido, la sesión anónima, información necesaria para reconectar una partida y la aceptación del aviso para salas públicas."],
        ["Información de salas y partidas", "Procesamos nombre elegido, pertenencia y configuración de sala, estado de jugadores, consignas, cartas, respuestas, selección del juez, puntajes, votos de expulsión, resultados y marcas de tiempo necesarias para sincronizar la partida."],
        ["Contenido creado por jugadores", "El modo Freestyle permite enviar respuestas de texto que se muestran a los participantes de la misma sala y se almacenan mientras son necesarias para la ronda. No incluyas información personal, confidencial o sensible en nombres o respuestas."],
      ],
      en: [
        ["Anonymous account and local data", "Firebase generates an anonymous identifier; we do not request an email, password, phone number, or real name. We store your chosen name, anonymous session, information required to reconnect to a match, and acceptance of the public-room notice on your device."],
        ["Room and gameplay information", "We process your chosen name, room membership and settings, player state, prompts, cards, answers, judge selections, scores, removal votes, results, and timestamps required to synchronize the match."],
        ["Player-generated content", "Freestyle mode allows players to submit text answers that are displayed to participants in the same room and stored while required for the round. Do not include personal, confidential, or sensitive information in names or answers."],
      ],
    },
  },
  whispers: {
    name: "Whispers Of War",
    specific: {
      es: [
        ["Cuenta anónima y perfil", "Firebase genera un identificador anónimo; no pedimos email, contraseña, teléfono ni nombre real. Podemos almacenar nombre y avatar elegidos, fechas de actividad, asociación a una sala y estado de moderación."],
        ["Salas y partidas", "Procesamos configuración y visibilidad de sala, roles y facciones, estados y acciones, objetivos, votos, resultados, progreso y marcas de tiempo. Parte de esta información se revela a otros jugadores solamente cuando las reglas lo requieren."],
        ["Chats, reportes y moderación", "Los mensajes públicos o de rol pueden almacenarse con identificador anónimo, nombre, sala, canal, ronda y fecha. Los reportes pueden conservar el mensaje denunciado y los identificadores involucrados para revisar abuso y aplicar las reglas."],
      ],
      en: [
        ["Anonymous account and profile", "Firebase generates an anonymous identifier; we do not request an email, password, phone number, or real name. We may store your chosen name and avatar, activity timestamps, current room association, and moderation status."],
        ["Rooms and matches", "We process room settings and visibility, roles and factions, player states and actions, targets, votes, results, progress, and timestamps. Some information is disclosed to other players only when required by the game rules."],
        ["Chats, reports, and moderation", "Public or role-based messages may be stored with an anonymous identifier, name, room, channel, round, and timestamp. Reports may retain the reported message and involved identifiers to review abuse and enforce rules."],
      ],
    },
  },
};

export function getPrivacyPolicy(id, language) {
  const policy = policies[id];
  const shared = common[language];
  return { ...policy, intro: shared.intro(policy.name), sections: [...policy.specific[language], ...Object.values(shared.sections)] };
}
