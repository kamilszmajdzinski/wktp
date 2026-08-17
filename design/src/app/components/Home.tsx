import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Calendar, GraduationCap, ArrowRight, Facebook, Instagram } from "lucide-react";
import { SOCIAL, SIGNUP_LINK } from "../social";

export function Home() {
  const features = [
    {
      icon: Heart,
      emoji: "❤️",
      title: "Pasja",
      description: "Zaangażowanie w rozwój z miłości do tańca. To więcej niż hobby — to styl życia.",
    },
    {
      icon: Users,
      emoji: "👥",
      title: "Społeczność",
      description: "Przyjazna atmosfera i wspólna pasja łączy ludzi w każdym wieku.",
    },
    {
      icon: Calendar,
      emoji: "📅",
      title: "Regularne zajęcia",
      description: "Zajęcia przez cały rok szkolny dla wszystkich grup wiekowych i poziomów.",
    },
    {
      icon: GraduationCap,
      emoji: "🎓",
      title: "Profesjonalizm",
      description: "Doświadczona kadra instruktorów z udokumentowanymi sukcesami.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[620px] bg-gradient-to-r from-black to-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757266601919-35d335028bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2glMjBmb2xrJTIwZGFuY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyMjU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Polish folk dance performance"
            className="w-full h-full object-cover object-top opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Wielkopolski Klub Tańców Polskich
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tańcz z nami polskie tańce narodowe!
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Odkryj piękno tańców polskich w nowym wydaniu. Dołącz do naszej rodziny!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={SIGNUP_LINK}
                className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-lg"
              >
                Zapisz się na zajęcia
              </Link>
              <Link
                to="/o-nas"
                className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Dowiedz się więcej
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dlaczego warto do nas dołączyć?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Cztery filary, które tworzą wyjątkową przestrzeń do nauki i rozwijania pasji.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-14 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Śledź nas w mediach społecznościowych
          </h2>
          <p className="text-red-100 mb-8">
            Bądź na bieżąco z życiem klubu, występami i wydarzeniami.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a
              href={SOCIAL.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.17 8.17 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* National Dances Teaser Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl h-52 row-span-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1757386491857-15ab7c25c4b3?w=600&h=700&fit=crop&auto=format"
                  alt="Polonez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-24">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1772466910118-2c6a9ccd85ce?w=400&h=250&fit=crop&auto=format"
                  alt="Krakowiak"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-24">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1757386491173-a3933e89a075?w=400&h=250&fit=crop&auto=format"
                  alt="Mazur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm mb-6 font-semibold">
                Dziedzictwo kulturowe
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Polskie tańce narodowe
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Pięć tańców — pięć historii. Polonez, krakowiak, mazur, oberek i kujawiak to skarby polskiej kultury, które przetrwały wieki. Każdy z nich ma unikalny charakter, rytm i głęboki przekaz.
              </p>
              <p className="text-gray-600 mb-10">
                W naszym klubie nie tylko uczymy kroków, ale opowiadamy historię. Zapraszamy do odkrywania bogactwa polskiego tańca.
              </p>
              <Link
                to="/tance-narodowe"
                className="inline-flex items-center gap-3 bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-md"
              >
                Poznaj tańce narodowe
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tournament Highlight - Completed Event */}
      <div className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1764874298962-ac0c84307fc0?w=700&h=500&fit=crop&auto=format"
                    alt="Turniej UPP 2026"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🏆</span>
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Zakończony
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    V Ogólnopolski Turniej Tańców Polskich „O Kryształowego Siewcę”
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    30 i 31 maja 2026 Poznań stał się stolicą polskich tańców narodowych, gromadząc najlepsze pary taneczne, trenerów, sędziów oraz miłośników naszej kultury z całego kraju. Wraz z III Akademickimi Mistrzostwami Polski w Tańcach Polskich.
                  </p>
                  <Link
                    to="/turniej-upp"
                    className="inline-flex items-center gap-2 bg-red-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors self-start"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-white bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gotowy, by zacząć przygodę z tańcem?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Dołącz do naszej społeczności i odkryj piękno polskich tańców narodowych. Pierwsza lekcja próbna — bezpłatna!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-block bg-red-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg"
            >
              Skontaktuj się z nami
            </Link>
            <Link
              to="/zajecia"
              className="inline-block bg-white/10 border border-white/30 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg"
            >
              Zobacz zajęcia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
