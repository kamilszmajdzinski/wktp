import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { SOCIAL } from "../social";

const CLUB_EMAIL = "wktp@up.poznan.pl";

// Reliable, keyless Google Maps embed for a free-text address query.
const mapEmbed = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackSent, setCallbackSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet: open the visitor's mail client with a pre-filled message
    // addressed to the club. (See note about a proper form service.)
    const subject = `[Strona WWW] ${formData.subject || "Wiadomość"} — ${formData.name}`;
    const body = [
      `Imię i nazwisko: ${formData.name}`,
      `Email: ${formData.email}`,
      `Telefon: ${formData.phone}`,
      `Temat: ${formData.subject}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${CLUB_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Prośba o kontakt telefoniczny (strona WWW)";
    const body = `Proszę o kontakt telefoniczny pod numerem: ${callbackPhone}`;
    window.location.href = `mailto:${CLUB_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setCallbackSent(true);
    setCallbackPhone("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[360px] bg-gradient-to-r from-red-800 to-red-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <p className="text-red-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Napisz do nas
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl text-red-100">
              Chętnie odpowiemy na wszystkie pytania. Zapraszamy do kontaktu!
            </p>
          </div>
        </div>
      </div>

      {/* Callback Card */}
      <div className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-3xl font-bold mb-4">Chcesz porozmawiać? Oddzwonimy do Ciebie.</h2>
              <p className="text-gray-300 text-lg">
                Zostaw swój numer telefonu, a skontaktujemy się z Tobą, odpowiemy na pytania, pomożemy wybrać odpowiednie zajęcia dla Ciebie lub Twojego dziecka.
              </p>
            </div>
            <div>
              {callbackSent ? (
                <div className="bg-green-800/40 border border-green-600 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-bold mb-2">Dziękujemy!</h3>
                  <p className="text-green-200">Oddzwonimy do Ciebie wkrótce.</p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="bg-white/10 backdrop-blur rounded-2xl p-8">
                  <label className="block text-sm font-semibold mb-2 text-gray-200">
                    📞 Twój numer telefonu
                  </label>
                  <input
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="np. 600 700 800"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 mb-4"
                  />
                  <button
                    type="submit"
                    className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                  >
                    Proszę o kontakt
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div id="formularz" className="scroll-mt-24">
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Formularz
              </p>
              <h2 className="text-3xl font-bold mb-8">Wyślij wiadomość</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="np. 600 700 800"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Temat
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors bg-white text-gray-700"
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="zajecia">Zapisy na zajęcia</option>
                    <option value="oferta">Oferta biznesowa</option>
                    <option value="turniej">Turniej UPP</option>
                    <option value="warsztaty">Warsztaty</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                    placeholder="W czym możemy Ci pomóc?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-4 rounded-xl hover:bg-red-800 transition-colors font-semibold text-lg"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Dane kontaktowe
              </p>
              <h2 className="text-3xl font-bold mb-8">Informacje kontaktowe</h2>

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: "Adres",
                    lines: ["Osiedlowy Dom Kultury „Wiktoria”", "os. Zwycięstwa 125, 61-652 Poznań"],
                  },
                  {
                    icon: Phone,
                    title: "Telefon",
                    lines: ["+48 785 899 858"],
                    href: "tel:+48785899858",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["wktp@up.poznan.pl"],
                    href: "mailto:wktp@up.poznan.pl",
                  },
                  {
                    icon: MapPin,
                    title: "II sala",
                    lines: ["Zespół Szkolno-Przedszkolny nr 12", "os. Zwycięstwa 101, 61-652 Poznań"],
                  },
                ].map(({ icon: Icon, title, lines, href }) => (
                  <div key={title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl">
                    <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      {lines.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {href && i === 0 ? (
                            <a href={href} className="hover:text-red-600 transition-colors">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-lg">Godziny biura</h3>
                </div>
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex justify-between">
                    <span>Poniedziałek – Piątek</span>
                    <span className="font-semibold">15:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span className="font-semibold">10:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela (wrzesień – czerwiec)</span>
                    <span className="font-semibold">15:00 – 18:00</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <h3 className="font-bold mb-4">Śledź nas w mediach społecznościowych</h3>
              <div className="flex gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm"
                >
                  <Facebook className="w-5 h-5" /> Facebook
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity font-semibold text-sm"
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors font-semibold text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.17 8.17 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z" />
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Maps */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jak do nas trafić?</h2>
            <p className="text-gray-500">Działamy w dwóch lokalizacjach w Poznaniu</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map 1: ODK Wiktoria */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-red-700 text-white p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-bold text-lg">Osiedlowy Dom Kultury „Wiktoria”</h3>
                    <p className="text-red-100 text-sm">os. Zwycięstwa 125, 61-652 Poznań</p>
                  </div>
                </div>
              </div>
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <iframe
                  src={mapEmbed("Osiedlowy Dom Kultury Wiktoria, os. Zwycięstwa 125, 61-652 Poznań")}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa — ODK Wiktoria, os. Zwycięstwa 125"
                />
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm">
                  Siedziba klubu — tu odbywa się większość zajęć oraz próby grup dorosłych i reprezentacyjnej.
                </p>
              </div>
            </div>

            {/* Map 2: Szkoła */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gray-800 text-white p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-bold text-lg">Zespół Szkolno-Przedszkolny nr 12</h3>
                    <p className="text-gray-300 text-sm">os. Zwycięstwa 101, 61-652 Poznań</p>
                  </div>
                </div>
              </div>
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <iframe
                  src={mapEmbed("Zespół Szkolno-Przedszkolny nr 12, os. Zwycięstwa 101, 61-652 Poznań")}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa — Zespół Szkolno-Przedszkolny nr 12, os. Zwycięstwa 101"
                />
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm">
                  Druga sala — tu spotyka się grupa dziecięca (6–15 lat).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
