import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { SOCIAL, SIGNUP_LINK } from "../social";
import { ScrollManager } from "./ScrollManager";
import { Seo } from "./Seo";
import { Logo } from "./Logo";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "O nas", href: "/o-nas" },
    { name: "Zajęcia", href: "/zajecia" },
    { name: "Oferta", href: "/oferta" },
    { name: "Tańce Narodowe", href: "/tance-narodowe" },
    { name: "Turniej", href: "/turniej-upp" },
    { name: "Galeria", href: "/galeria" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Seo />

      {/* Header */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 gap-4">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-20 w-20 object-contain rounded" />
              <div>
                <h1 className="font-bold text-lg leading-tight">
                  Wielkopolski Klub
                </h1>
                <p className="text-xs text-gray-300 leading-tight">
                  Tańców Polskich
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm transition-colors hover:text-red-400 ${
                    isActive(item.href)
                      ? "border-b-2 border-red-500 text-red-400"
                      : "text-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right cluster: persistent signup button + mobile menu toggle */}
            <div className="flex items-center gap-3">
              <Link
                to={SIGNUP_LINK}
                className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-800 transition-colors whitespace-nowrap"
              >
                Zapisz się
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-4 rounded transition-colors hover:bg-gray-800 text-sm ${
                    isActive(item.href)
                      ? "bg-gray-700 text-red-400"
                      : "text-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Logo className="h-24 w-24 object-contain rounded" />
                <h3 className="font-bold text-lg">
                  Wielkopolski Klub Tańców Polskich
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Odkryj z nami piękno tańców polskich. Kultywujemy tradycje
                tańców narodowych, zapraszając dzieci, młodzież i dorosłych do
                wspólnej pasji.
              </p>
              <div className="flex space-x-3 mt-6">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.17 8.17 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Nawigacja</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 text-sm hover:text-red-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>
                  Osiedlowy Dom Kultury „Wiktoria”
                  <br />
                  os. Zwycięstwa 125, 61-652 Poznań
                </p>
                <p className="mt-3">
                  <a
                    href="tel:+48785457340"
                    className="hover:text-red-400 transition-colors"
                  >
                    +48 785 457 340
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:wktp@up.poznan.pl"
                    className="hover:text-red-400 transition-colors"
                  >
                    wktp@up.poznan.pl
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            © 2026 Wielkopolski Klub Tańców Polskich. Wszelkie prawa
            zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}
