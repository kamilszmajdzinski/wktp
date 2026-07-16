import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Facebook, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    id: "turnieje",
    name: "Turnieje tańca",
    emoji: "🏆",
    description: "Zdjęcia z Ogólnopolskiego Turnieju Tańców Polskich „O Kryształowego Siewcę” i Akademickich Mistrzostw Polski",
    images: [
      { src: "https://images.unsplash.com/photo-1764874298962-ac0c84307fc0?w=600&h=450&fit=crop&auto=format", alt: "Turniej UPP - ceremonia wręczenia nagród" },
      { src: "https://images.unsplash.com/photo-1656213497787-6f502a6a9109?w=600&h=450&fit=crop&auto=format", alt: "Turniej UPP - uczestnicy" },
      { src: "https://images.unsplash.com/photo-1644594570296-31899872aaae?w=600&h=450&fit=crop&auto=format", alt: "Turniej - jury" },
      { src: "https://images.unsplash.com/photo-1757386491857-15ab7c25c4b3?w=600&h=450&fit=crop&auto=format", alt: "Turniej - polonez" },
    ],
  },
  {
    id: "spektakle",
    name: "Spektakle",
    emoji: "🎭",
    description: "Autorskie spektakle taneczne: Świąteczny Dzwoneczek, Rozkojarzeni, Obietnica",
    images: [
      { src: "https://images.unsplash.com/photo-1771884077841-9cbc59c7b094?w=600&h=450&fit=crop&auto=format", alt: "Świąteczny Dzwoneczek" },
      { src: "https://images.unsplash.com/photo-1761618291331-535983ae4296?w=600&h=450&fit=crop&auto=format", alt: "Spektakl Rozkojarzeni" },
      { src: "https://images.unsplash.com/photo-1767786394008-77c66239c3a6?w=600&h=450&fit=crop&auto=format", alt: "Spektakl Obietnica" },
      { src: "https://images.unsplash.com/photo-1716486174567-f0c042d4bcf1?w=600&h=450&fit=crop&auto=format", alt: "Pokaz taneczny" },
    ],
  },
  {
    id: "pokazy",
    name: "Pokazy i występy",
    emoji: "💃",
    description: "Pokazy taneczne na eventach, festiwalach i uroczystościach",
    images: [
      { src: "https://images.unsplash.com/photo-1757266601919-35d335028bfd?w=600&h=450&fit=crop&auto=format", alt: "Pokaz folklorystyczny" },
      { src: "https://images.unsplash.com/photo-1772466910118-2c6a9ccd85ce?w=600&h=450&fit=crop&auto=format", alt: "Pokaz na festiwalu" },
      { src: "https://images.unsplash.com/photo-1757386491173-a3933e89a075?w=600&h=450&fit=crop&auto=format", alt: "Pokaz uroczysty" },
      { src: "https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?w=600&h=450&fit=crop&auto=format", alt: "Pokaz taneczny 2" },
    ],
  },
  {
    id: "warsztaty",
    name: "Warsztaty tańca",
    emoji: "🎓",
    description: "Warsztaty taneczne dla firm, szkół i grup zorganizowanych",
    images: [
      { src: "https://images.unsplash.com/photo-1711023288483-70edc32c2694?w=600&h=450&fit=crop&auto=format", alt: "Warsztaty w sali" },
      { src: "https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?w=600&h=450&fit=crop&auto=format", alt: "Warsztaty grupowe" },
      { src: "https://images.unsplash.com/photo-1772466910118-2c6a9ccd85ce?w=600&h=450&fit=crop&auto=format", alt: "Warsztaty dla dzieci" },
      { src: "https://images.unsplash.com/photo-1757266601919-35d335028bfd?w=600&h=450&fit=crop&auto=format", alt: "Warsztaty tematyczne" },
    ],
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("turnieje");

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-red-800 to-red-600">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757266601919-35d335028bfd?w=1400&h=500&fit=crop&auto=format"
            alt="Galeria WKTP"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Nasze wspomnienia
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Galeria</h1>
            <p className="text-xl text-red-100">
              Zobacz nasze występy, warsztaty i wyjątkowe chwile z życia klubu.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media CTA */}
      <div className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Więcej zdjęć i filmów znajdziesz na naszych profilach społecznościowych!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://facebook.com/wktp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook WKTP
            </a>
            <a
              href="https://instagram.com/wktp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Instagram @wktp
            </a>
            <a
              href="https://tiktok.com/@wktp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.17 8.17 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z" />
              </svg>
              TikTok @wktp
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nasze wspomnienia w kategoriach</h2>
            <p className="text-gray-500">Wybierz kategorię, aby zobaczyć zdjęcia</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-red-700 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-700"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Description */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">
              {current.emoji} {current.name}
            </h3>
            <p className="text-gray-500">{current.description}</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {current.images.map((img, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: index === 0 ? "360px" : "180px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Categories Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Przegląd wszystkich kategorii</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className="group text-left"
              >
                <div className="rounded-2xl overflow-hidden shadow-md mb-4 h-48 relative">
                  <ImageWithFallback
                    src={cat.images[0].src}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-3xl">{cat.emoji}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg group-hover:text-red-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {cat.images.length} zdjęcia
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Large CTA — Join the club */}
      <div className="py-24 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💃🕺</div>
          <h2 className="text-4xl font-bold mb-6">
            Chcesz być częścią naszej historii?
          </h2>
          <p className="text-red-100 text-xl mb-10">
            Dołącz do nas i twórz wspaniałe wspomnienia razem z nami!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/zajecia"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-lg"
            >
              Zapisz się na zajęcia <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-block bg-red-800 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
