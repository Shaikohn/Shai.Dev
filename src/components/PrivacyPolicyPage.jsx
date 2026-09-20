import { Link } from "react-router-dom";
import GamesFooter from "./games/GamesFooter";
import { getPrivacyPolicy } from "../data/privacyPolicies";
import { useLanguage } from "../i18n/useLanguage";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function PrivacyPolicyPage({ policyId }) {
  const { language, setLanguage } = useLanguage();
  const policy = getPrivacyPolicy(policyId, language);
  const es = language === "es";
  const gamePath = policyId === "impostor" ? "/games/impostor-futbolero" : `/games/${policyId}`;
  usePageMetadata(`${policy.name} — ${es ? "Política de privacidad" : "Privacy Policy"}`, policy.intro);
  return <main className="min-h-screen bg-[#0a0f1c] text-zinc-100">
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
      <div className="flex items-center justify-between gap-5"><Link to={gamePath} className="text-sm text-zinc-400 hover:text-white">← {es ? `Volver a ${policy.name}` : `Back to ${policy.name}`}</Link><div className="flex rounded-full border border-white/10 p-0.5">{["es", "en"].map((code) => <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`cursor-pointer rounded-full px-3 py-1 text-xs uppercase ${language === code ? "bg-white text-[#0a0f1c]" : "text-zinc-500 hover:text-white"}`}>{code}</button>)}</div></div>
      <header className="mt-14 max-w-3xl border-b border-white/10 pb-10"><p className="text-sm tracking-wide text-zinc-500">{es ? "Política de privacidad" : "Privacy Policy"}</p><h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{policy.name}</h1><p className="mt-6 text-lg leading-8 text-zinc-400">{policy.intro}</p><p className="mt-4 text-zinc-500">{es ? "Al usar el Juego, reconocés las prácticas descritas en esta política." : "By using the Game, you acknowledge the practices described in this policy."}</p></header>
      <div className="max-w-3xl divide-y divide-white/10">{policy.sections.map(([title, content], index) => <section key={title} id={title.toLowerCase().replaceAll(" ", "-")} className="py-9"><h2 className="text-xl font-semibold text-white md:text-2xl"><span className="mr-3 text-sm text-zinc-600">{String(index + 1).padStart(2, "0")}</span>{title}</h2><p className="mt-4 leading-8 text-zinc-300">{content}</p>{title === (es ? "Acceso y eliminación" : "Access and deletion") && <a href={`mailto:shai.kohn.dev@gmail.com?subject=${encodeURIComponent(`${policy.name} — ${es ? "Solicitud de privacidad" : "Privacy request"}`)}`} className="mt-4 inline-flex text-sm text-sky-400 underline underline-offset-4 hover:text-sky-300">shai.kohn.dev@gmail.com</a>}</section>)}</div>
      <p className="mt-8 text-sm text-zinc-500">{es ? "Fecha de vigencia: 20 de septiembre de 2026" : "Effective date: September 20, 2026"}</p>
    </article><GamesFooter />
  </main>;
}
