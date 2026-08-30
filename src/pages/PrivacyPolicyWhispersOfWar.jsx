import { Link } from "react-router-dom";

const BulletList = ({ children }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">{children}</ul>
);

export default function PrivacyPolicyWhispersOfWar() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-sm text-zinc-400 transition-colors hover:text-white">
            ← Back to home
          </Link>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm tracking-wide text-zinc-500">Privacy Policy</p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">Whispers Of War Privacy Policy</h1>
          <p className="mb-4 text-base leading-8 text-zinc-400 md:text-lg">
            This Privacy Policy explains how Shai Kohn (“we,” “us,” or “our”) collects, uses, stores, and protects information when you use Whispers Of War (the “Game”).
          </p>
          <p className="mb-10 text-zinc-400">By using the Game, you acknowledge the practices described in this Privacy Policy.</p>

          <div className="space-y-10 leading-8 text-zinc-300">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">1. Anonymous Account and Profile Information</h2>
              <p>Whispers Of War uses anonymous authentication to create a technical account that allows you to access multiplayer features. You are not required to provide an email address, password, phone number, or real name.</p>
              <p className="mt-4">We may store:</p>
              <BulletList>
                <li>An automatically generated anonymous user identifier.</li>
                <li>Your chosen display name and selected avatar.</li>
                <li>Account creation and activity timestamps.</li>
                <li>Your current room association.</li>
                <li>Account moderation status, where applicable.</li>
              </BulletList>
              <p className="mt-4">Your display name does not need to be your real name. We recommend that you do not use personal or sensitive information as your display name.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">2. Room and Gameplay Information</h2>
              <p>When you create, join, or participate in a room, we process information required to operate the multiplayer game, including:</p>
              <BulletList>
                <li>Room membership, settings, language, and visibility.</li>
                <li>Assigned roles and factions.</li>
                <li>Player status and gameplay actions.</li>
                <li>Votes, targets, results, and game progress.</li>
                <li>Timestamps used to synchronize phases and game events.</li>
              </BulletList>
              <p className="mt-4">Some gameplay information may be visible to other players when required by the rules of the Game.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">3. In-Game Chats</h2>
              <p>Whispers Of War includes public and role-based in-game chat channels. Messages you submit may be stored together with information such as your anonymous user identifier, display name, room, channel, game round, and timestamp.</p>
              <p className="mt-4">Depending on the channel, messages may be visible to all players in the room or only to players who are allowed to access that channel. Do not submit personal, confidential, or sensitive information through the Game’s chats.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">4. Reports and Moderation</h2>
              <p>Players can report inappropriate chat messages. A report may contain:</p>
              <BulletList>
                <li>The identifiers of the reporting and reported players.</li>
                <li>The reported message and its author.</li>
                <li>The associated room and chat channel.</li>
                <li>The relevant game and round.</li>
                <li>Report creation and update timestamps.</li>
              </BulletList>
              <p className="mt-4">We use this information to review inappropriate behavior, enforce Game rules, protect players, and prevent abuse.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">5. Firebase and Technical Information</h2>
              <p>Whispers Of War uses Google Firebase services, including Firebase Authentication, Cloud Firestore, and Cloud Functions. These services may process technical information necessary to provide, secure, and maintain the Game, such as network, request, device, application, authentication, security, and operational information.</p>
              <p className="mt-4">Firebase’s data-processing practices are described in its Firebase Privacy and Security documentation.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">6. Information Stored on Your Device</h2>
              <p>The Game stores limited information locally on your device, which may include:</p>
              <BulletList>
                <li>Your anonymous authentication session.</li>
                <li>Your selected language.</li>
                <li>Cached application compatibility information.</li>
              </BulletList>
              <p className="mt-4">This information is used to keep you signed in, remember your preferences, and verify whether your installed version remains compatible with the online Game.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">7. How We Use Information</h2>
              <p>We use the information described above to:</p>
              <BulletList>
                <li>Create and maintain anonymous player profiles.</li>
                <li>Provide multiplayer rooms and related online features.</li>
                <li>Synchronize gameplay between players.</li>
                <li>Enable public and private in-game chats.</li>
                <li>Display player names and avatars.</li>
                <li>Process reports and moderate inappropriate behavior.</li>
                <li>Protect the Game and its players from abuse and unauthorized access.</li>
                <li>Diagnose technical problems and maintain service reliability.</li>
                <li>Enforce mandatory updates when an older version is no longer compatible.</li>
                <li>Comply with applicable legal obligations.</li>
              </BulletList>
              <p className="mt-4">We do not sell personal information. Whispers Of War does not currently use personal information for third-party advertising or marketing.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">8. Information Sharing and Disclosure</h2>
              <p>Your display name, avatar, chat messages, room presence, and certain gameplay information may be shared with other players when necessary to provide the Game. What is visible depends on the room, game phase, assigned role, and chat channel.</p>
              <p className="mt-4">We use Google Firebase as a service provider to host and process information required by the Game. Google may process information on our behalf under its applicable Firebase and Google Cloud terms, including in locations where Google or its service providers maintain infrastructure.</p>
              <p className="mt-4">We may also disclose information when reasonably necessary to comply with law or a valid legal request; investigate fraud, abuse, security incidents, or rule violations; protect players, the public, or the Game; or establish, exercise, or defend legal claims.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">9. Data Retention</h2>
              <p>We retain information only for as long as reasonably necessary to provide the Game, maintain security, handle moderation, and comply with applicable legal obligations.</p>
              <p className="mt-4">Inactive and abandoned rooms may be automatically removed after defined inactivity periods. Associated room and gameplay information may also be removed. Moderation and abuse-related information may be retained separately when reasonably necessary to investigate reports, enforce rules, prevent abuse, resolve disputes, or comply with legal obligations.</p>
              <p className="mt-4">Anonymous player profiles may remain stored after a room or game has been removed so that the player can continue using the same profile.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">10. Access and Deletion Requests</h2>
              <p>You may request access to or deletion of your information by contacting <a href="mailto:shai.kohn.dev@gmail.com" className="text-zinc-100 underline underline-offset-4 hover:text-white">shai.kohn.dev@gmail.com</a>.</p>
              <p className="mt-4">Because Whispers Of War uses anonymous authentication, we may need information that allows us to identify the anonymous profile associated with your installation. We may also take reasonable steps to verify that the request relates to your profile.</p>
              <p className="mt-4">When a valid deletion request is completed, we will delete or anonymize information associated with the identified account, unless retention is reasonably necessary for security, abuse prevention, legal compliance, dispute resolution, or another lawful purpose. Uninstalling the Game removes local application data, but may not automatically delete information stored on our servers.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">11. Security</h2>
              <p>We use reasonable technical and organizational measures designed to protect information against unauthorized access, loss, misuse, or alteration. Information transmitted between the Game and its online services is protected using encrypted connections. However, no online service or storage system can guarantee absolute security.</p>
              <p className="mt-4">You should avoid disclosing personal or sensitive information in your display name or chat messages.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">12. Children’s Privacy</h2>
              <p>Whispers Of War is not intended for children under the age of 13 or the minimum age required by applicable law in their country or region. We do not knowingly seek to collect personal information from children below the applicable minimum age.</p>
              <p className="mt-4">If you believe that a child has provided personal information through the Game, contact us so that we can investigate and take appropriate action.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">13. International Processing and Privacy Rights</h2>
              <p>Information used by the Game may be processed or stored outside your country, including where Google or its service providers operate infrastructure. Data protection laws may differ between countries.</p>
              <p className="mt-4">Depending on where you live, applicable privacy laws may provide rights to request access, correction, or deletion; object to or restrict certain processing; withdraw consent where processing is based on consent; or submit a complaint to an applicable data protection authority.</p>
              <p className="mt-4">To submit a privacy request, contact <a href="mailto:shai.kohn.dev@gmail.com" className="text-zinc-100 underline underline-offset-4 hover:text-white">shai.kohn.dev@gmail.com</a>.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">14. Changes to This Policy</h2>
              <p>We may update this Privacy Policy when the Game, its services, or applicable legal requirements change. When we make changes, we will update the effective date shown on this page. Material changes may also be communicated through the Game or its store listing when appropriate.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-zinc-100 md:text-2xl">15. Contact</h2>
              <p>If you have questions, concerns, or privacy requests, contact:</p>
              <address className="mt-2 not-italic text-zinc-100">
                <span className="block font-medium">Shai Kohn</span>
                <a href="mailto:shai.kohn.dev@gmail.com" className="underline underline-offset-4 hover:text-white">shai.kohn.dev@gmail.com</a>
                <span className="block">Argentina</span>
              </address>
            </section>
          </div>

          <p className="mt-12 text-sm text-zinc-500">Effective date: August 30, 2026</p>
        </div>
      </section>
    </main>
  );
}
