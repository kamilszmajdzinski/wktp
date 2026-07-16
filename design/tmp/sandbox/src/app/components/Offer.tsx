import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Theater, Sparkles, Users, Calendar, CheckCircle, Star, Award } from "lucide-react";

export function Offer() {
  const spectacles = [
    {
      title: "Świąteczny Dzwoneczek",
      subtitle: "Teatr tańca dla dzieci",
      description:
        "Magiczna zimowa bajka opowiedziana językiem tańca. Spektakl pełen ciepła, radości i świątecznej atmosfery, idealny dla najmłodszych widzów i ich rodzin.",
      duration: "45 minut",
      audience: "Dzieci 3-10 lat",
      performers: "15-20 tancerzy",
      image:
        "https://images.unsplash.com/photo-1771884077841-9cbc59c7b094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRhbmNlJTIwcGVyZm9ybWFuY2UlMjB3aW50ZXJ8ZW58MXx8fHwxNzc1NTExNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "Kolorowe kostiumy i dekoracje",
        "Interaktywne elementy dla dzieci",
        "Tradycyjna polska muzyka kolędowa",
        "Edukacyjny przekaz o tradycjach",
      ],
    },
    {
      title: "Rozkojarzeni",
      subtitle: "Taneczna opowieść o codziennych trudnościach",
      description:
        "Współczesny spektakl taneczny poruszający temat wyzwań współczesnego życia. Historia opowiedziana przez ruch, pokazująca jak taniec może być formą wyrazu emocji i sposobem na pokonywanie trudności.",
      duration: "60 minut",
      audience: "Młodzież i dorośli",
      performers: "12-15 tancerzy",
      image:
        "https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzU1MTE2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "Nowoczesna choreografia",
        "Głęboki przekaz emocjonalny",
        "Połączenie tańca współczesnego i ludowego",
        "Profesjonalna scenografia i oświetlenie",
      ],
    },
    {
      title: "Obietnica",
      subtitle: "Taniec towarzyski - historia miłości i sprzeciwu",
      description:
        "Elegancki spektakl taneczny opowiadający historię miłości, która musi zmierzyć się z przeciwnościami. Piękne choreografie tańców towarzyskich w połączeniu z emocjonalną narracją.",
      duration: "70 minut",
      audience: "Dorośli",
      performers: "10-12 tancerzy",
      image:
        "https://images.unsplash.com/photo-1767786394008-77c66239c3a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxscm9vbSUyMGRhbmNlJTIwcm9tYW50aWMlMjBjb3VwbGV8ZW58MXx8fHwxNzc1NTExNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "Walc, tango, foxtrot i inne tańce towarzyskie",
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
        "Organizujemy profesjonalne pokazy tańców ludowych i towarzyskich na różnorodne okazje.",
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
        "Nasze autorskie spektakle taneczne z profesjonalną choreografią i scenografią.",
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
        "Prowadzimy warsztaty taneczne dla grup i firm, dostosowane do poziomu uczestników.",
      features: [
        "Warsztaty tańców ludowych",
        "Warsztaty tańców towarzyskich",
        "Integracje firmowe",
        "Zajęcia dla szkół i przedszkoli",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-6">Oferta Biznesowa</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Profesjonalne spektakle, pokazy taneczne i warsztaty dla Twojego wydarzenia
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">
            Zapraszamy do współpracy!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Wielkopolski Klub Tańców Polskich oferuje szeroki zakres usług artystycznych
            i edukacyjnych. Nasze spektakle, pokazy i warsztaty cieszą się ogromnym
            uznaniem wśród różnorodnej publiczności.
          </p>
          <p className="text-gray-700 text-lg">
            Każde wydarzenie przygotowujemy z najwyższą starannością, dbając o
            profesjonalizm i unikalny charakter występu.
          </p>
        </div>
      </div>

      {/* Spectacles Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-4">Nasze Spektakle</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Autorskie przedstawienia taneczne z profesjonalną choreografią i scenografią
          </p>

          <div className="space-y-12">
            {spectacles.map((spectacle, index) => (
              <div
                key={spectacle.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={spectacle.image}
                      alt={spectacle.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm mb-3">
                    Spektakl
                  </div>
                  <h3 className="text-3xl mb-2">{spectacle.title}</h3>
                  <p className="text-xl text-red-600 mb-4">{spectacle.subtitle}</p>
                  <p className="text-gray-700 mb-6">{spectacle.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 mb-1">Czas trwania</p>
                      <p className="font-semibold">{spectacle.duration}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 mb-1">Publiczność</p>
                      <p className="font-semibold">{spectacle.audience}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 mb-1">Obsada</p>
                      <p className="font-semibold">{spectacle.performers}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {spectacle.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Dance Couple Section - Marta Budziak & Michał Cichocki */}
      <div className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm mb-4 font-semibold">
              <Star className="w-4 h-4 inline-block mr-2" />
              Oferta Specjalna
            </div>
            <h2 className="text-4xl mb-4">
              Profesjonalne Pokazy Taneczne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marta Budziak & Michał Cichocki - Mistrzowie Tańca
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716486174567-f0c042d4bcf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxscm9vbSUyMGRhbmNlJTIwcHJvZmVzc2lvbmFsJTIwY291cGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU1OTgxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Marta Budziak and Michał Cichocki"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <Award className="w-5 h-5 inline-block mr-2" />
                  <span className="font-semibold">Mistrzowie Polski</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl mb-6">
                  Marta Budziak & Michał Cichocki
                </h3>

                {/* Titles and Achievements */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Mistrzowie Polski</p>
                      <p className="text-sm text-gray-600">Tytuł Mistrzów Tańca Towarzyskiego</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <Star className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Klasa S13</p>
                      <p className="text-sm text-gray-600">Najwyższa klasa taneczna w Polsce</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Para Roku</p>
                      <p className="text-sm text-gray-600">Wielokrotnie nagradzani tym prestiżowym tytułem</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  Zapraszamy do skorzystania z wyjątkowej oferty profesjonalnych pokazów tanecznych w wykonaniu mistrzowskiej pary tanecznej. Marta i Michał zaprezentują spektakularne pokazy dostosowane do charakteru Waszego wydarzenia.
                </p>

                {/* Repertoire */}
                <div className="mb-6">
                  <h4 className="font-semibold text-xl mb-4">Repertuar</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Polskie tańce narodowe (polonez, mazur, krakowiak, oberek)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tańce towarzyskie (walc, tango, fokstrot, quickstep)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tańce latynoamerykańskie (rumba, cha-cha, samba, jive)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tańce do muzyki orkiestr dętych i ludowych</span>
                    </div>
                  </div>
                </div>

                {/* Event Types */}
                <div className="mb-6">
                  <h4 className="font-semibold text-xl mb-4">Idealne na:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Bale i studniówki</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Wesela</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Eventy firmowe</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Festiwale</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Uroczystości miejskie</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">Wydarzenia specjalne</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Indywidualne podejście:</strong> Repertuar jest w pełni dostosowywany do potrzeb wydarzenia, typu muzyki (orkiestra, DJ, live band) oraz oczekiwań organizatorów. Możliwość konsultacji i doboru układów tanecznych.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Placeholder for Professional Couple */}
          <div className="mt-12">
            <h3 className="text-2xl text-center mb-8">Galeria zdjęć</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1716486174567-f0c042d4bcf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxscm9vbSUyMGRhbmNlJTIwcHJvZmVzc2lvbmFsJTIwY291cGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU1OTgxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional dance performance 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1757386491857-15ab7c25c4b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2glMjBwb2xvbmFpc2UlMjBkYW5jZSUyMGZvcm1hbHxlbnwxfHx8fDE3NzU1OTgxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional dance performance 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767786394008-77c66239c3a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxscm9vbSUyMGRhbmNlJTIwcm9tYW50aWMlMjBjb3VwbGV8ZW58MXx8fHwxNzc1NTExNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional dance performance 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Nasze Usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border-2 border-red-200 rounded-lg p-6 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
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

      {/* Workshops Detail Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Warsztaty Taneczne</h2>
              <p className="text-gray-700 mb-6">
                Nasze warsztaty to doskonała forma integracji, rozwijania kreatywności
                i poznawania polskiej kultury. Dostosowujemy program do wieku i poziomu
                uczestników oraz charakteru wydarzenia.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Warsztaty dla firm</h4>
                  <p className="text-gray-600 text-sm">
                    Integracyjne warsztaty taneczne jako forma team buildingu. Nauka
                    podstawowych kroków tańców ludowych i towarzyskich w luźnej
                    atmosferze.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Warsztaty dla szkół</h4>
                  <p className="text-gray-600 text-sm">
                    Edukacyjne zajęcia dla dzieci i młodzieży, łączące naukę tańca z
                    poznawaniem polskich tradycji i historii regionalnej.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Warsztaty tematyczne</h4>
                  <p className="text-gray-600 text-sm">
                    Specjalistyczne warsztaty poświęcone konkretnym tańcom (krakowiak,
                    mazur, polonez) lub okresom (tańce karnawałowe, świąteczne).
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHdvcmtzaG9wJTIwZ3JvdXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzU1MTE2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dance workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Dlaczego my?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl mb-2">20+ lat doświadczenia</h3>
              <p className="text-gray-600 text-sm">
                Ponad dwie dekady występów i nauczania
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl mb-2">Profesjonalna kadra</h3>
              <p className="text-gray-600 text-sm">
                Doświadczeni instruktorzy i choreografowie
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl mb-2">Indywidualne podejście</h3>
              <p className="text-gray-600 text-sm">
                Dostosowujemy program do Twoich potrzeb
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Theater className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl mb-2">Pełna oprawa</h3>
              <p className="text-gray-600 text-sm">
                Kostiumy, scenografia, nagłośnienie
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Zainteresowany naszą ofertą?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Skontaktuj się z nami, aby omówić szczegóły i otrzymać indywidualną wycenę
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Skontaktuj się
            </a>
            <a
              href="tel:+48123456789"
              className="inline-block bg-red-800 text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-red-900 transition-colors"
            >
              Zadzwoń: +48 123 456 789
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
