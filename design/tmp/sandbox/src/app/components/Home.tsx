import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Music, Users, Calendar, Heart } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Music,
      title: "Tradycja",
      description: "Tańce ludowe z różnych regionów Polski",
    },
    {
      icon: Users,
      title: "Społeczność",
      description: "Przyjazna atmosfera i wspólna pasja",
    },
    {
      icon: Calendar,
      title: "Regularne Zajęcia",
      description: "Zajęcia dla początkujących i zaawansowanych",
    },
    {
      icon: Heart,
      title: "Pasja",
      description: "Kultywujemy polskie dziedzictwo kulturowe",
    },
  ];

  const dances = [
    {
      name: "Polonez",
      region: "Cała Polska",
      description: "Taniec procesyjny o charakterze paradnym i uroczystym. Uznawany za taniec narodowy Polski, wykonywany podczas najważniejszych uroczystości państwowych i rodzinnych. Charakteryzuje się dostojnym krokiem i elegancką postawą.",
      image: "https://images.unsplash.com/photo-1757386491857-15ab7c25c4b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2glMjBwb2xvbmFpc2UlMjBkYW5jZSUyMGZvcm1hbHxlbnwxfHx8fDE3NzU1OTgxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tempo: "Umiarkowany",
      character: "Dostojny, uroczysty",
    },
    {
      name: "Krakowiak",
      region: "Małopolska",
      description: "Energiczny i radosny taniec pochodzący z okolic Krakowa. Charakteryzuje się synkopowanym rytmem i wysokimi przytupami. Tancerze wykonują dynamiczne podskoki i wirowe figury. To jeden z najbardziej rozpoznawalnych polskich tańców ludowych.",
      image: "https://images.unsplash.com/photo-1757266601919-35d335028bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFrb3dpYWslMjBwb2xpc2glMjBmb2xrJTIwZGFuY2V8ZW58MXx8fHwxNzc1NTk4MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tempo: "Szybki",
      character: "Energiczny, radosny",
    },
    {
      name: "Mazur",
      region: "Mazowsze",
      description: "Elegancki taniec szlachecki w metrum trójdzielnym, pełen dumy i powagi. Charakteryzuje się ostrogami, uderzeniami obcasów i piruetami. Mazur był tańcem salonowym polskiej szlachty i arystokracji.",
      image: "https://images.unsplash.com/photo-1757266601919-35d335028bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXp1cmthJTIwZGFuY2UlMjBjb3VwbGUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzU1OTgxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tempo: "Umiarkowanie szybki",
      character: "Szlachetny, dumny",
    },
    {
      name: "Oberek",
      region: "Centralna Polska",
      description: "Najszybszy z polskich tańców narodowych. Charakteryzuje się dynamicznymi, wirującymi ruchami i szybkim tempem. Taniec wymaga dużej kondycji i techniki. Pary wirują w szalonym tempie, tworząc spektakularne figury.",
      image: "https://images.unsplash.com/photo-1757386491173-a3933e89a075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYmVyZWslMjBwb2xpc2glMjBzcGlubmluZyUyMGRhbmNlfGVufDF8fHx8MTc3NTU5ODExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tempo: "Bardzo szybki",
      character: "Wirowy, dynamiczny",
    },
    {
      name: "Kujawiak",
      region: "Kujawy",
      description: "Powolny, liryczny taniec o melancholijnym charakterze. W przeciwieństwie do energicznych tańców polskich, kujawiak jest spokojny i refleksyjny. Charakteryzuje się płynnymi, łagodnymi ruchami i delikatną grą w parze.",
      image: "https://images.unsplash.com/photo-1757266601919-35d335028bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFrb3dpYWslMjBwb2xpc2glMjBmb2xrJTIwZGFuY2V8ZW58MXx8fHwxNzc1NTk4MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tempo: "Wolny",
      character: "Liryczny, melancholijny",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-black to-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757266601919-35d335028bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2glMjBmb2xrJTIwZGFuY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyMjU3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Polish folk dance"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl mb-6">Tańcz z nami polskie tańce narodowe!</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Odkryj piękno tańców polskich w nowym wydaniu.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/zajecia"
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Zapisz się na zajęcia
              </Link>
              <Link
                to="/o-nas"
                className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-red-800 transition-colors"
              >Dowiedz się więcej</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Dlaczego warto do nas dołączyć?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Polish National Dances Section - Detailed with Photos */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-4">Poznaj polskie tańce narodowe</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Pięć tańców narodowych Polski to skarb naszego dziedzictwa kulturowego. Każdy z nich ma unikalny charakter, rytm i historię.
          </p>

          <div className="space-y-20">
            {dances.map((dance, index) => (
              <div
                key={dance.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={dance.image}
                      alt={dance.name}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm mb-4 font-semibold">
                    Taniec Narodowy
                  </div>
                  <h3 className="text-4xl mb-3 text-red-700">{dance.name}</h3>
                  <p className="text-lg text-gray-500 mb-6 italic">{dance.region}</p>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {dance.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-600">
                      <p className="text-sm text-gray-500 mb-1">Tempo</p>
                      <p className="font-semibold text-gray-900">{dance.tempo}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-600">
                      <p className="text-sm text-gray-500 mb-1">Charakter</p>
                      <p className="font-semibold text-gray-900">{dance.character}</p>
                    </div>
                  </div>

                  <Link
                    to="/zajecia"
                    className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                  >
                    Naucz się {dance.name.toLowerCase()}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Context Section */}
      <div className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Dziedzictwo Kulturowe</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Polskie tańce narodowe to nie tylko ruch i muzyka - to żywa historia naszego narodu. Od dostojnego poloneza otwierającego bale, przez energiczny krakowiak, elegancki mazur, wirowy oberek, aż po melancholijny kujawiak - każdy taniec opowiada historię polskiej kultury i tradycji.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            W naszym klubie nie tylko uczymy kroków, ale także przekazujemy wiedzę o historii, symbolice i znaczeniu każdego tańca w polskiej kulturze.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-white bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Gotowy, by zacząć przygodę z tańcem?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Dołącz do naszej społeczności i odkryj piękno polskich tańców ludowych
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>

      {/* Tournament Highlight Section */}
      <div className="py-16 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="text-5xl mr-4">🏆</div>
            <h2 className="text-3xl md:text-4xl text-center">V Turniej UPP 2026</h2>
          </div>
          <p className="text-center text-gray-700 text-lg mb-8 max-w-3xl mx-auto">Największy ogólnopolski turniej tańców polskich już 30 i 31 maja 2026! Serdecznie zapraszamy tancerzy ze wszystkich regionów Polski do udziału w prestiżowym wydarzeniu.</p>
          <div className="text-center">
            <Link
              to="/turniej-upp"
              className="inline-block bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg shadow-lg"
            >
              Dowiedz się więcej o turnieju
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
