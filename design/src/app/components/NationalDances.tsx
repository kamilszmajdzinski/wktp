import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { SIGNUP_LINK } from "../social";
import dancesHero from "../../imports/photos/tance-narodowe-hero.jpg";
import polonezPhoto from "../../imports/photos/polonez.jpg";
import krakowiakPhoto from "../../imports/photos/krakowiak.jpg";
import mazurPhoto from "../../imports/photos/mazur.jpg";
import oberekPhoto from "../../imports/photos/oberek.jpg";
import kujawiakPhoto from "../../imports/photos/kujawiak.jpg";

const dances = [
  {
    name: "Polonez",
    region: "Cała Polska",
    tempo: "Umiarkowane",
    character: "Dostojny, uroczysty",
    description:
      "Taniec korowodowy o charakterze paradnym i uroczystym. Wykonywany podczas najważniejszych uroczystości państwowych, rodzinnych oraz na balach. Charakteryzuje się dostojnym krokiem i elegancką postawą.",
    cta: "Naucz się poloneza",
    image: polonezPhoto,
    color: "from-red-50 to-white",
    tag: "Taniec procesyjny",
  },
  {
    name: "Krakowiak",
    region: "Małopolska",
    tempo: "Szybkie",
    character: "Energiczny, radosny",
    description:
      "Energiczny i radosny taniec pochodzący z okolic Krakowa. Charakteryzuje się synkopowanym rytmem i strzelistym ruchem. Tancerze wykonują dynamiczne podskoki i wirowe figury. To jeden z najbardziej rozpoznawalnych polskich tańców ludowych.",
    cta: "Naucz się krakowiaka",
    image: krakowiakPhoto,
    color: "from-gray-50 to-white",
    tag: "Taniec regionalny",
  },
  {
    name: "Mazur",
    region: "Mazowsze",
    tempo: "Umiarkowanie szybkie",
    character: "Szlachetny, dumny",
    description:
      "Elegancki taniec szlachecki w metrum trójdzielnym, pełen dumy i powagi. Mazur był tańcem salonowym polskiej szlachty i arystokracji. Charakteryzuje się ruchem pełnym klasy i finezji.",
    cta: "Naucz się mazura",
    image: mazurPhoto,
    color: "from-red-50 to-white",
    tag: "Taniec szlachecki",
  },
  {
    name: "Oberek",
    region: "Centralna Polska",
    tempo: "Bardzo szybkie",
    character: "Wirowy, dynamiczny",
    description:
      "Najszybszy z polskich tańców narodowych. Charakteryzuje się dynamicznymi, wirującymi ruchami i szybkim tempem. Taniec wymaga dużej kondycji i techniki. Pary wirują w szalonym tempie, tworząc spektakularne figury.",
    cta: "Naucz się obereka",
    image: oberekPhoto,
    color: "from-gray-50 to-white",
    tag: "Taniec wirowy",
  },
  {
    name: "Kujawiak",
    region: "Kujawy",
    tempo: "Wolne",
    character: "Liryczny, romantyczny",
    description:
      "Spokojny, pełen emocji taniec o zmysłowym charakterze. W przeciwieństwie do energicznych tańców polskich, kujawiak jest subtelny i refleksyjny. Charakteryzuje się płynnymi, łagodnymi ruchami i delikatną grą w parze.",
    cta: "Naucz się kujawiaka",
    image: kujawiakPhoto,
    color: "from-red-50 to-white",
    tag: "Taniec liryczny",
  },
];

export function NationalDances() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[480px] bg-gradient-to-r from-black to-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={dancesHero}
            alt="Dzieci w strojach ludowych podczas tańca narodowego"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Dziedzictwo kulturowe
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tańce Narodowe
            </h1>
            <p className="text-xl text-gray-200">
              Pięć tańców, które tworzą duszę polskiej kultury — historia opowiedziana przez ruch.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction — "Poznaj polskie tańce narodowe" */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Poznaj polskie tańce narodowe</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Pięć tańców narodowych Polski to skarb naszego dziedzictwa kulturowego. Każdy z nich ma unikalny charakter, rytm i historię.
          </p>
        </div>
      </div>

      {/* Five Dance Cards — alternating layout */}
      <div className="pb-20">
        {dances.map((dance, index) => (
          <div key={dance.name} className={`py-16 bg-gradient-to-br ${dance.color}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                    <ImageWithFallback
                      src={dance.image}
                      alt={dance.name}
                      className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
                    {dance.region}
                  </p>
                  <h3 className="text-5xl font-bold mb-6 text-gray-900">{dance.name}</h3>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {dance.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-600">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Tempo</p>
                      <p className="font-bold text-gray-900">{dance.tempo}</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-600">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Charakter</p>
                      <p className="font-bold text-gray-900">{dance.character}</p>
                    </div>
                  </div>

                  <Link
                    to="/zajecia"
                    className="inline-flex items-center gap-2 bg-red-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                  >
                    {dance.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Heritage Section */}
      <div className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Polskie tańce narodowe</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Polskie tańce narodowe to nie tylko ruch i muzyka - to żywa historia naszego narodu. Od dostojnego poloneza otwierającego bale, przez energicznego krakowiaka, eleganckiego mazura, wirowy oberek, aż po lirycznego kujawiaka - każdy taniec opowiada historię polskiej kultury i tradycji.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            W naszym klubie nie tylko uczymy kroków, ale także przekazujemy wiedzę o symbolice i znaczeniu każdego tańca w polskiej kulturze.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Gotowy, by zacząć przygodę z tańcem?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Dołącz do naszej społeczności i odkryj piękno polskich tańców narodowych!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/zajecia"
              className="inline-flex items-center gap-2 bg-red-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg"
            >
              Sprawdź zajęcia
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={SIGNUP_LINK}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
