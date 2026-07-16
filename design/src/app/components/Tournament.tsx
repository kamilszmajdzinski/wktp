import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Calendar, MapPin, ArrowRight } from "lucide-react";

const krysztalowySiewcaGallery = [
  { src: "https://images.unsplash.com/photo-1764874298962-ac0c84307fc0?w=700&h=500&fit=crop&auto=format", alt: "Kryształowy Siewca - ceremonia" },
  { src: "https://images.unsplash.com/photo-1757266601919-35d335028bfd?w=700&h=500&fit=crop&auto=format", alt: "Kryształowy Siewca - uczestnicy" },
  { src: "https://images.unsplash.com/photo-1772466910118-2c6a9ccd85ce?w=700&h=500&fit=crop&auto=format", alt: "Kryształowy Siewca - pokaz" },
  { src: "https://images.unsplash.com/photo-1644594570296-31899872aaae?w=700&h=500&fit=crop&auto=format", alt: "Kryształowy Siewca - jury" },
];

const akademickieMistrzostwaGallery = [
  { src: "https://images.unsplash.com/photo-1656213497787-6f502a6a9109?w=700&h=500&fit=crop&auto=format", alt: "Akademickie Mistrzostwa - parkiet" },
  { src: "https://images.unsplash.com/photo-1757386491173-a3933e89a075?w=700&h=500&fit=crop&auto=format", alt: "Akademickie Mistrzostwa - tancerze" },
  { src: "https://images.unsplash.com/photo-1716486174567-f0c042d4bcf1?w=700&h=500&fit=crop&auto=format", alt: "Akademickie Mistrzostwa - para finałowa" },
  { src: "https://images.unsplash.com/photo-1767786394008-77c66239c3a6?w=700&h=500&fit=crop&auto=format", alt: "Akademickie Mistrzostwa - gala" },
];

function GallerySection({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
            index === 0 ? "col-span-2 row-span-2" : ""
          }`}
        >
          <ImageWithFallback
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            style={{ minHeight: index === 0 ? "320px" : "150px" }}
          />
        </div>
      ))}
    </div>
  );
}

export function Tournament() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[560px] bg-gradient-to-r from-black to-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1656213497787-6f502a6a9109?w=1400&h=600&fit=crop&auto=format"
            alt="Turniej UPP"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Trophy className="w-12 h-12 text-amber-400" />
              <span className="bg-amber-400 text-black text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Zakończony
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              V Ogólnopolski Turniej Tańców Polskich „O Kryształowego Siewcę”
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              oraz III Akademickie Mistrzostwa Polski w Tańcach Polskich PS CIOFF®
            </p>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-400" />
                <span>30–31 maja 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Centrum Kultury Fizycznej UPP, Poznań</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Summary */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Podsumowanie
            </p>
            <h2 className="text-4xl font-bold mb-6">Turniej zakończony wielkim sukcesem!</h2>
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              W dniach 30 maja – 1 czerwca 2026 roku Poznań ponownie stał się miejscem spotkania najlepszych tancerzy tańców polskich z całego kraju. W Centrum Kultury Fizycznej Uniwersytetu Przyrodniczego odbyły się V Ogólnopolski Turniej Tańców Polskich „O Kryształowego Siewcę” oraz III Akademickie Mistrzostwa Polski w Tańcach Polskich PS CIOFF® – wydarzenia łączące sportową rywalizację, wysoki poziom artystyczny i promocję polskiego dziedzictwa kulturowego.
            </p>
            <p>
              Na parkiecie zaprezentowały się pary reprezentujące kluby z całej Polski, rywalizując w kolejnych kategoriach wiekowych i klasach tanecznych. Publiczność mogła podziwiać piękno poloneza, mazura, kujawiaka, oberka i krakowiaka, wykonywanych z niezwykłą precyzją, elegancją i pasją.
            </p>
            <p>
              Jako współorganizator wydarzenia jesteśmy dumni, że po raz kolejny mogliśmy stworzyć przestrzeń do spotkania środowiska tanecznego, wymiany doświadczeń oraz wspólnego celebrowania polskich tańców narodowych. Sukces turnieju był możliwy dzięki zaangażowaniu organizatorów, partnerów, sędziów, trenerów, wolontariuszy oraz wszystkich uczestników.
            </p>
            <p className="font-semibold text-gray-900">
              Dziękujemy wszystkim, którzy byli z nami – zawodnikom, kibicom i sympatykom tańców polskich.
            </p>
          </div>
        </div>
      </div>

      {/* Relacje z wydarzeń */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Relacje z wydarzeń
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Zobacz, jak było</h2>
          </div>
        </div>
      </div>

      {/* Kryształowy Siewca Gallery */}
      <div className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              V Ogólnopolski Turniej Tańców Polskich „O Kryształowego Siewcę”
            </h3>
          </div>
          <GallerySection images={krysztalowySiewcaGallery} />
        </div>
      </div>

      {/* Akademickie Mistrzostwa Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              III Akademickie Mistrzostwa Polski w Tańcach Polskich PS CIOFF®
            </h3>
          </div>
          <GallerySection images={akademickieMistrzostwaGallery} />
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Chcesz wziąć udział w kolejnej edycji?
          </h2>
          <p className="text-gray-300 text-xl mb-10">
            Skontaktuj się z nami, aby dowiedzieć się o kolejnych turniejach i wydarzeniach organizowanych przez WKTP.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-red-700 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-800 transition-colors text-lg"
          >
            Skontaktuj się z nami <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
