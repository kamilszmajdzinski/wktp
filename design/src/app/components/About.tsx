import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { SIGNUP_LINK } from "../social";

export function About() {
  const instructors = [
    {
      name: "Instruktor Grupy Dziecięcej",
      role: "Instruktor tańców ludowych",
      bio: "Doświadczony pedagog z wieloletnią praktyką w nauczaniu tańców regionalnych dzieci i młodzieży.",
    },
    {
      name: "Instruktor Grupy Dorosłych",
      role: "Choreograf i instruktor",
      bio: "Absolwent akademii muzycznej, specjalista w zakresie polskich tańców narodowych i towarzyskich.",
    },
    {
      name: "Instruktor Grupy Reprezentacyjnej",
      role: "Instruktor tańców reprezentacyjnych",
      bio: "Wieloletni tancerz i choreograf z doświadczeniem w turniejach ogólnopolskich i regionalnych.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-red-800 to-red-600">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772466910118-2c6a9ccd85ce?w=1400&h=500&fit=crop&auto=format"
            alt="About WKTP"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Poznaj nas
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">O Nas</h1>
            <p className="text-xl text-red-100">
              Wielkopolski Klub Tańców Polskich — miejsce, gdzie sztuka spotyka się z pasją.
            </p>
          </div>
        </div>
      </div>

      {/* Large Image */}
      <div className="w-full h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?w=1400&h=600&fit=crop&auto=format"
          alt="Zespół WKTP na scenie"
          className="w-full h-full object-cover"
        />
      </div>

      {/* History Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Historia
              </p>
              <h2 className="text-4xl font-bold mb-4">Nasza historia</h2>
              <p className="text-xl text-gray-900 font-semibold mb-6">
                Nasza historia to ponad 10 lat doświadczenia.
              </p>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Wielkopolski Klub Tańców Polskich powstał z przekonania, że polskie tańce narodowe zasługują na miejsce nie tylko w historii, ale również we współczesnym życiu. Od początku działalności naszym celem jest rozwijanie pasji do tańca, kształcenie kolejnych pokoleń tancerzy oraz popularyzowanie polskiej kultury poprzez ruch, muzykę i wspólne doświadczenia.
                </p>
                <p>
                  Przez lata stworzyliśmy przestrzeń, w której spotykają się dzieci, młodzież, studenci i dorośli. Dla jednych taniec stał się sposobem na aktywne spędzanie czasu, dla innych drogą do rozwoju sportowego i artystycznego oraz udziału w ogólnopolskich turniejach i pokazach.
                </p>
                <p>
                  Stawiamy na profesjonalizm, systematyczny rozwój i wysoką jakość zajęć, jednocześnie dbając o atmosferę, w której każdy może rozwijać swoje umiejętności we własnym tempie.
                </p>
                <p>
                  Dziś Wielkopolski Klub Tańców Polskich jest rozpoznawalnym ośrodkiem promującym polskie tańce narodowe. Organizujemy prestiżowe wydarzenia, takie jak Ogólnopolski Turniej Tańców Polskich „O Kryształowego Siewcę” oraz Akademickie Mistrzostwa Polski w Tańcach Polskich, współpracujemy z instytucjami kultury i środowiskiem akademickim oraz aktywnie wspieramy rozwój tańców polskich w kraju.
                </p>
                <p>
                  Tworzymy społeczność ludzi, których łączy pasja, zaangażowanie i szacunek do polskiego dziedzictwa. Wierzymy, że taniec nie tylko uczy techniki i dyscypliny, ale także buduje pewność siebie, charakter oraz relacje, które pozostają na długie lata.
                </p>
              </div>
            </div>

            {/* 10+ Years Highlight */}
            <div className="bg-red-700 text-white rounded-3xl p-12 text-center">
              <div className="text-8xl font-black mb-4">10+</div>
              <div className="text-2xl font-bold mb-4">Lat działalności</div>
              <p className="text-red-100 text-lg leading-relaxed">
                Ponad dekada nieprzerwanej pracy na rzecz kultywowania polskich tradycji tanecznych.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column text */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Co nas wyróżnia?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-3">Tradycja i nowoczesność</h3>
              <p className="text-gray-600 leading-relaxed">
                Łączymy szacunek dla wielowiekowej tradycji z nowoczesnymi metodami nauczania i dynamicznym podejściem do choreografii. Nasze spektakle poruszają publiczność nie tylko pięknem tańca, ale też głębią przekazu.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Sukcesy i osiągnięcia</h3>
              <p className="text-gray-600 leading-relaxed">
                Organizujemy Ogólnopolski Turniej Tańców Polskich UPP, który przyciąga setki uczestników z całego kraju. Nasze pary taneczne zdobywają nagrody w prestiżowych zawodach na szczeblu regionalnym i krajowym.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">Dla każdego wieku</h3>
              <p className="text-gray-600 leading-relaxed">
                Nasze grupy obejmują tancerzy od 6 roku życia po dorosłych. Każdy znajdzie tu swoje miejsce — czy to w grupie dziecięcej, młodzieżowej, dorosłych czy reprezentacyjnej.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Serce Poznania</h3>
              <p className="text-gray-600 leading-relaxed">
                Działamy przy ODK Wiktoria w Poznaniu — wyjątkowym miejscu kulturalnym, które przez lata stało się centrum życia tanecznego Wielkopolski. Dobrze skomunikowane i przyjazne dla wszystkich.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Nasz zespół
            </p>
            <h2 className="text-3xl font-bold">Nasza Kadra</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-52 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-red-700 rounded-full flex items-center justify-center text-white text-4xl">
                    {index === 0 ? "👩" : index === 1 ? "👨" : "👩"}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-red-600 font-semibold uppercase tracking-wide mb-1">
                    {instructor.role}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{instructor.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Chwile z naszego życia</h2>
            <p className="text-gray-500">Zajrzyjcie do naszej galerii i zobaczcie więcej</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1757266601919-35d335028bfd?w=400&h=400&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1772466910118-2c6a9ccd85ce?w=400&h=400&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1711023288483-70edc32c2694?w=400&h=400&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1604954055722-7f80571fbfc3?w=400&h=400&fit=crop&auto=format",
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              Zobacz całą galerię <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Large CTA */}
      <div className="py-20 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Chcesz być częścią naszej historii?</h2>
          <p className="text-xl text-red-100 mb-10">
            Dołącz do nas i twórz wspaniałe wspomnienia razem z nami!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/zajecia"
              className="inline-block bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-lg"
            >
              Sprawdź zajęcia
            </Link>
            <Link
              to={SIGNUP_LINK}
              className="inline-block bg-red-800 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg"
            >
              Napisz do nas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
