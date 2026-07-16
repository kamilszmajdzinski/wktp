import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, MapPin, Users, CheckCircle, Star, Trophy, ArrowRight } from "lucide-react";

const groups = [
  {
    name: "Grupa dziecięca",
    emoji: "🧒",
    ageRange: "6–15 lat",
    schedules: ["Wtorek · 17:00 – 18:30", "Piątek · 17:30 – 19:00"],
    location: "Zespół Szkolno-Przedszkolny nr 12, os. Zwycięstwa 101, Poznań",
    level: "Początkujący i średniozaawansowani",
    price: "100 zł / miesiąc",
    description:
      "Zajęcia dla dzieci i młodzieży łączą profesjonalną naukę tańca z wszechstronnym rozwojem, pomagając budować sprawność, charakter, pewność siebie i zamiłowanie do tańca pod okiem doświadczonych instruktorów.",
    color: "border-red-300",
    headerColor: "bg-red-50",
  },
  {
    name: "Grupa dla dorosłych",
    emoji: "👤",
    ageRange: "Dorośli",
    schedules: ["Niedziela · 18:00 – 19:30"],
    location: "ODK „Wiktoria”, os. Zwycięstwa 125, Poznań",
    level: "Początkujący i średniozaawansowani",
    price: "100 zł / miesiąc",
    description:
      "Idealne zarówno dla osób rozpoczynających przygodę z tańcem, jak i dla osób chcących doskonalić umiejętności. Przyjazna atmosfera i profesjonalna nauka — wiek nie ma znaczenia, liczy się pasja.",
    color: "border-gray-300",
    headerColor: "bg-gray-50",
  },
  {
    name: "Grupa reprezentacyjna",
    emoji: "🌟",
    ageRange: "Selekcja",
    schedules: ["Niedziela · 19:30 – 21:00"],
    location: "ODK „Wiktoria”, os. Zwycięstwa 125, Poznań",
    level: "Zaawansowani",
    price: "100 zł / miesiąc",
    description:
      "Dla doświadczonych tancerzy chcących doskonalić umiejętności i występować.",
    color: "border-amber-300",
    headerColor: "bg-amber-50",
  },
  {
    name: "Pary turniejowe",
    emoji: "🏆",
    ageRange: "Indywidualna kwalifikacja",
    schedules: [
      "Dzieci i młodzież · Piątek 19:00 – 20:00, Niedziela 16:00 – 17:30",
      "Dorośli · Środa 19:15 – 20:45, Czwartek 20:30 – 22:00",
    ],
    location: "ODK „Wiktoria”, os. Zwycięstwa 125, Poznań",
    level: "Zaawansowani",
    price: "Wycena indywidualna",
    description:
      "Program przygotowania par do turniejów ogólnopolskich. Współpraca z doświadczonymi trenerami, indywidualny plan treningowy i przygotowanie sceniczne.",
    color: "border-red-500",
    headerColor: "bg-red-700",
  },
];

const benefits = [
  "Profesjonalni instruktorzy z wieloletnim doświadczeniem",
  "Indywidualne podejście",
  "Możliwość występów",
  "Przyjazna i wspierająca atmosfera",
  "Bezpłatna lekcja próbna dla nowych uczestników",
  "Regularne wyjazdy integracyjne",
];

export function Classes() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-red-800 to-red-600">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757266601919-35d335028bfd?w=1400&h=500&fit=crop&auto=format"
            alt="Zajęcia taneczne"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Dołącz do nas
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Zajęcia</h1>
            <p className="text-xl text-red-100">
              Oferujemy zajęcia dla wszystkich grup wiekowych i poziomów zaawansowania — od najmłodszych po doświadczonych tancerzy.
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Gdzie trenujemy?
              </p>
              <h2 className="text-3xl font-bold mb-8">Gdzie się spotykamy?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Siedziba</h3>
                    <p className="text-gray-600">
                      Osiedlowy Dom Kultury „Wiktoria”
                      <br />
                      os. Zwycięstwa 125, 61-652 Poznań
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">II sala</h3>
                    <p className="text-gray-600">
                      Zespół Szkolno-Przedszkolny nr 12 w Poznaniu
                      <br />
                      os. Zwycięstwa 101, 61-652 Poznań
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Sezon zajęć</h3>
                    <p className="text-gray-600">
                      Zajęcia odbywają się od września do czerwca
                      <br />
                      Przerwa wakacyjna: lipiec – sierpień
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Zapisy</h3>
                    <p className="text-gray-600">Zapisy przez cały rok szkolny</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1711023288483-70edc32c2694?w=800&h=500&fit=crop&auto=format"
                alt="Sala taneczna ODK Wiktoria"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Group Cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Grafik
            </p>
            <h2 className="text-3xl font-bold">Nasze grupy taneczne</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {groups.map((group) => (
              <div
                key={group.name}
                className={`bg-white rounded-2xl overflow-hidden border-2 ${group.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Card Header */}
                <div className={`${group.headerColor} ${group.name === "Pary turniejowe" ? "text-white" : ""} p-6 flex items-center gap-4`}>
                  <span className="text-4xl">{group.emoji}</span>
                  <div>
                    <h3 className={`text-2xl font-bold ${group.name === "Pary turniejowe" ? "text-white" : "text-gray-900"}`}>
                      {group.name}
                    </h3>
                    <p className={`text-sm ${group.name === "Pary turniejowe" ? "text-red-100" : "text-gray-500"}`}>
                      {group.ageRange}
                    </p>
                  </div>
                  {group.name === "Pary turniejowe" && (
                    <Trophy className="w-8 h-8 text-amber-400 ml-auto" />
                  )}
                  {group.name === "Grupa reprezentacyjna" && (
                    <Star className="w-8 h-8 text-amber-500 ml-auto" />
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-3 mb-5 text-sm">
                    {group.schedules.map((s) => (
                      <div key={s} className="flex items-start gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{group.level}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {group.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-2xl font-bold text-red-700">{group.price}</span>
                    <Link
                      to="/kontakt"
                      className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors font-semibold text-sm inline-flex items-center gap-2"
                    >
                      Zapisz się <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Co zyskujesz?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dołączając do naszego klubu, otrzymujesz znacznie więcej niż tylko lekcje tańca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trial Lesson CTA — Large highlighted section */}
      <div className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💃</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bezpłatna lekcja próbna!
          </h2>
          <p className="text-gray-300 text-xl mb-4">
            Nie jesteś pewien, czy taniec jest dla Ciebie? Przyjdź i przekonaj się bez żadnych zobowiązań.
          </p>
          <p className="text-gray-400 mb-12">
            Wystarczy jeden telefon lub wiadomość — ustalimy termin i grupę odpowiednią dla Ciebie.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-block bg-red-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg"
            >
              Umów lekcję próbną
            </Link>
            <a
              href="tel:+48785899858"
              className="inline-block bg-white/10 border border-white/30 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg"
            >
              Zadzwoń: +48 785 899 858
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
