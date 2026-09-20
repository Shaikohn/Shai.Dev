import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";

export default function GamesFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span>© 2026 Shai.Dev Games</span>
        <div className="flex gap-5"><Link to="/games" className="hover:text-white">Games</Link><Link to="/legal" className="hover:text-white">{t.games.privacy}</Link><Link to="/" className="hover:text-white">{t.nav.portfolio}</Link></div>
      </div>
    </footer>
  );
}
