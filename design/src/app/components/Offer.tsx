import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Theater,
  Sparkles,
  Users,
  Calendar,
  CheckCircle,
  Star,
  Award,
  ArrowRight,
} from "lucide-react";

const spectacles = [
  {
    title: "Świąteczny Dzwoneczek",
    subtitle: "Teatr tańca dla dzieci",
    description:
      "Magiczna zimowa bajka opowiedziana językiem tańca. Spektakl pełen ciepła, radości i świątecznej atmosfery, idealny dla najmłodszych widzów i ich rodzin.",
    duration: "45 min",
    audience: "Dzieci 3–11 lat",
    performers: "20–30 tancerzy",
    image:
      "https://images.unsplash.com/photo-1771884077841-9cbc59c7b094?w=800&h=600&fit=crop&auto=format",
    highlights: [
      "Kolorowe kostiumy i dekoracje",
      "Interaktywne elementy dla dzieci",
      "Tradycyjna polska muzyka klasyczna",
      "Edukacyjny i inspirujący przekaz",
    ],
  },
  {
    title: "Rozkojarzeni",
    subtitle: "Taneczna opowieść o codziennych trudnościach",
    description:
      "Współczesny spektakl taneczny poruszający temat wyzwań współczesnego życia. Historia opowiedziana poprzez ruch, pokazująca jak taniec może być formą wyrazu emocji i sposobem na pokonywanie trudności.",
    duration: "30 min",
    audience: "Młodzież 16+ i dorośli",
    performers: "12–20 tancerzy",
    image:
      "https://images.unsplash.com/photo-1761618291331-535983ae4296?w=800&h=600&fit=crop&auto=format",
    highlights: [
      "Nowoczesna choreografia",
      "Głęboki przekaz emocjonalny",
      "Połączenie tańca współczesnego i ludowego",
      "Profesjonalne oświetlenie i efekty specjalne",
    ],
  },
  {
    title: "Obietnica",
    subtitle: "Taneczna historia miłości i sprzeciwu",
    description:
      "Elegancki spektakl taneczny opowiadający historię miłości, która musi zmierzyć się z przeciwnościami. Piękne choreografie tańców polskich w formie salonowej w połączeniu z emocjonalną narracją.",
    duration: "40 min",
    audience: "Młodzież 12+ i dorośli",
    performers: "12–20 tancerzy",
    image:
      "https://images.unsplash.com/photo-1767786394008-77c66239c3a6?w=800&h=600&fit=crop&auto=format",
    highlights: [
      "Tańce polskie w formie salonowej",
      "Romantyczna oprawa muzyczna",
      "Profesjonalne kostiumy balowe",
      "Wzruszająca historia miłosna",
    ],
  },
];

const services = [
  {
    icon: Theater,
    title: "Pokazy Taneczne",
    description:
      "Organizujemy profesjonalne pokazy tańców polskich na różnorodne okazje.",
    features: [
      "Występy na eventach firmowych",
      "Uroczystości rodzinne (wesela, jubileusze)",
      "Festiwale i imprezy miejskie",
      "Dni otwarte i eventy kulturalne",
    ],
  },
  {
    icon: Sparkles,
    title: "Spektakle Teatralne",
    description:
      "Nasze autorskie spektakle taneczne z profesjonalną choreografią i oprawą muzyczną.",
    features: [
      "Przedstawienia dla dzieci i dorosłych",
      "Możliwość dostosowania spektaklu do wydarzenia",
      "Pełna oprawa techniczna",
      "Doświadczona grupa artystyczna",
    ],
  },
  {
    icon: Users,
    title: "Warsztaty Taneczne",
    description:
      "Prowadzimy warsztaty taneczne dla par, grup i firm, dostosowane do poziomu uczestników. Doskonała forma integracji, rozwijania kreatywności i poznawania polskiej kultury.",
    features: [
      "Warsztaty tańców polskich",
      "Doświadczeni instruktorzy tańca",
      "Indywidualne podejście",
      "Animacje taneczne, nauka lub doskonalenie profesjonalne",
    ],
  },
];

export function Offer() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-red-800 to-red-600">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1716486174567-f0c042d4bcf1?w=1400&h=500&fit=crop&auto=format"
            alt="Oferta WKTP"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Dla firm i organizatorów
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Oferta Biznesowa</h1>
            <p className="text-xl text-red-100">
              Profesjonalne spektakle, pokazy taneczne i warsztaty — robimy Twoje wydarzenie niezapomnianym.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Zapraszamy do współpracy!</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Wielkopolski Klub Tańców Polskich oferuje szeroki zakres usług artystycznych i edukacyjnych. Nasze spektakle, pokazy i warsztaty cieszą się ogromnym uznaniem wśród różnorodnej publiczności — od korporacji po instytucje kulturalne.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Każde wydarzenie przygotowujemy z najwyższą starannością, dbając o profesjonalizm i unikalny charakter występu dostosowany do Państwa oczekiwań.
          </p>
        </div>
      </div>

      {/* Spectacles Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Repertuar
            </p>
            <h2 className="text-3xl font-bold mb-4">Nasze Spektakle</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Autorskie przedstawienia taneczne z profesjonalną choreografią, scenografią i oprawą muzyczną.
            </p>
          </div>

          <div className="space-y-20">
            {spectacles.map((spectacle, index) => (
              <div
                key={spectacle.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={spectacle.image}
                      alt={spectacle.title}
                      className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm mb-5 font-semibold">
                    Spektakl
                  </div>
                  <h3 className="text-4xl font-bold mb-3">{spectacle.title}</h3>
                  <p className="text-xl text-red-600 mb-6">{spectacle.subtitle}</p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">{spectacle.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "Czas trwania", value: spectacle.duration },
                      { label: "Publiczność", value: spectacle.audience },
                      { label: "Obsada", value: spectacle.performers },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                        <p className="font-bold text-gray-900 text-sm">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-8">
                    {spectacle.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/galeria?kategoria=spektakle"
                    className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                  >
                    Zobacz więcej zdjęć <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Dance Couple Section */}
      <div className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm mb-5 font-semibold">
              <Star className="w-4 h-4" />
              Oferta Specjalna
            </div>
            <h2 className="text-4xl font-bold mb-4">Profesjonalne Pokazy Taneczne</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marta Budziak & Michał Cichocki — Mistrzowie Tańca w Tańcach Polskich
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716486174567-f0c042d4bcf1?w=800&h=700&fit=crop&auto=format"
                  alt="Marta Budziak i Michał Cichocki"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold text-sm">Mistrzowie Polski</span>
                </div>
              </div>

              <div className="p-10 lg:p-14">
                <h3 className="text-3xl font-bold mb-8">
                  Marta Budziak & Michał Cichocki
                </h3>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: Award, color: "bg-red-100", iconColor: "text-red-600", title: "Mistrzowie Polski", sub: "Tytuł Mistrzów Tańców Polskich" },
                    { icon: Star, color: "bg-amber-100", iconColor: "text-amber-600", title: "Klasa S13", sub: "Najwyższa klasa taneczna w tańcach polskich" },
                    { icon: Star, color: "bg-yellow-100", iconColor: "text-yellow-600", title: "Para Roku", sub: "Wielokrotnie nagradzani tym prestiżowym tytułem" },
                  ].map(({ icon: Icon, color, iconColor, title, sub }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className={`${color} p-3 rounded-xl`}>
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Zapraszamy do skorzystania z wyjątkowej oferty profesjonalnych pokazów tanecznych. Marta i Michał zaprezentują spektakularne układy dostosowane do charakteru Państwa wydarzenia.
                </p>

                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4">Repertuar</h4>
                  <div className="space-y-3">
                    {[
                      "Tańce polskie (polonez, mazur, krakowiak, oberek, kujawiak, polka, polka mazurka, walc, inne)",
                      "Choreografie na zamówienie (nie tylko na bazie tańców polskich)",
                      "Tańce w strojach wieczorowych, ludowych, balowych lub współczesnych",
                      "Tańce do muzyki orkiestrowej",
                      "Prowadzenie warsztatów tańca i animacji",
                      "Prowadzenie korowodu poloneza",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4">Idealne na:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Bale i studniówki", "Wesela", "Eventy firmowe", "Festiwale", "Uroczystości miejskie", "Wydarzenia specjalne"].map((item) => (
                      <div key={item} className="bg-gray-50 px-4 py-3 rounded-xl">
                        <p className="text-sm font-semibold text-gray-900">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Indywidualne podejście:</strong> Repertuar jest w pełni dostosowywany do potrzeb wydarzenia, typu muzyki i oczekiwań organizatorów. Możliwość konsultacji i doboru układów tanecznych.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link to full show gallery */}
          <div className="mt-12 text-center">
            <Link
              to="/galeria?kategoria=pokazy"
              className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg"
            >
              Zobacz więcej zdjęć <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Co oferujemy?
            </p>
            <h2 className="text-3xl font-bold">Nasze usługi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-red-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-red-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workshops Detail */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Warsztaty
              </p>
              <h2 className="text-3xl font-bold mb-6">Warsztaty Taneczne</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Nasze warsztaty to doskonała forma integracji, rozwijania kreatywności i poznawania polskiej kultury. Dostosowujemy program do wieku i poziomu uczestników oraz charakteru wydarzenia.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Warsztaty dla firm",
                    desc: "Integracyjne warsztaty taneczne jako forma team buildingu. Nauka podstawowych kroków tańców ludowych i towarzyskich w luźnej atmosferze.",
                  },
                  {
                    title: "Warsztaty dla szkół",
                    desc: "Edukacyjne zajęcia dla dzieci i młodzieży, łączące naukę tańca z poznawaniem polskich tradycji i historii regionalnej.",
                  },
                  {
                    title: "Warsztaty dla grup tanecznych",
                    desc: "Specjalistyczne warsztaty poświęcone konkretnym tańcom lub kształtowaniu postawy tanecznej w celu rozwoju techniki tańca.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?w=800&h=600&fit=crop&auto=format"
                alt="Warsztaty taneczne"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Dlaczego my?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "10+ lat doświadczenia", sub: "Ponad dekada występów i nauczania poparta osiągnięciami rangi ogólnopolskiej" },
              { icon: Users, title: "Profesjonalna kadra", sub: "Doświadczeni instruktorzy i choreografowie" },
              { icon: Sparkles, title: "Indywidualne podejście", sub: "Dostosowujemy program do Twoich potrzeb" },
              { icon: Theater, title: "Pełna oprawa", sub: "Kostiumy, scenografia, muzyka" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Zainteresowany naszą ofertą?</h2>
          <p className="text-xl text-red-100 mb-10">
            Skontaktuj się z nami, aby omówić szczegóły i otrzymać indywidualną wycenę dopasowaną do Twojego wydarzenia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-lg"
            >
              Skontaktuj się <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+48785899858"
              className="inline-flex items-center justify-center gap-2 bg-red-800 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg"
            >
              Zadzwoń: +48 785 899 858
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
