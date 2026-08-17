import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_URL = "https://wktp-poznan.pl";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Wielkopolski Klub Tańców Polskich — Nauka Tańców Narodowych w Poznaniu",
    description:
      "Naucz się poloneza, krakowiaka, mazura, oberka i kujawiaka. Zajęcia taneczne dla dzieci, młodzieży i dorosłych w Poznaniu — dołącz do WKTP.",
  },
  "/o-nas": {
    title: "O nas — Wielkopolski Klub Tańców Polskich",
    description:
      "Ponad 10 lat doświadczenia w nauczaniu polskich tańców narodowych. Poznaj historię, misję i kadrę Wielkopolskiego Klubu Tańców Polskich.",
  },
  "/zajecia": {
    title: "Zajęcia taneczne — Wielkopolski Klub Tańców Polskich",
    description:
      "Zajęcia taneczne dla wszystkich grup wiekowych i poziomów zaawansowania w Poznaniu — od najmłodszych po doświadczonych tancerzy.",
  },
  "/tance-narodowe": {
    title: "Tańce Narodowe — Polonez, Krakowiak, Mazur, Oberek, Kujawiak",
    description:
      "Poznaj pięć polskich tańców narodowych: poloneza, krakowiaka, mazura, oberka i kujawiaka — historię, charakter i region pochodzenia każdego z nich.",
  },
  "/oferta": {
    title: "Oferta Biznesowa — Pokazy i Warsztaty Taneczne | WKTP",
    description:
      "Profesjonalne spektakle, pokazy taneczne i warsztaty dla firm, szkół i wydarzeń specjalnych. Ponad 20 lat doświadczenia na scenie.",
  },
  "/turniej-upp": {
    title: "V Ogólnopolski Turniej Tańców Polskich „O Kryształowego Siewcę” — WKTP",
    description:
      "Relacja z V Ogólnopolskiego Turnieju Tańców Polskich oraz III Akademickich Mistrzostw Polski w Tańcach Polskich, 30–31 maja 2026 w Poznaniu.",
  },
  "/galeria": {
    title: "Galeria — Wielkopolski Klub Tańców Polskich",
    description:
      "Zdjęcia z zajęć, występów i wydarzeń Wielkopolskiego Klubu Tańców Polskich w Poznaniu.",
  },
  "/kontakt": {
    title: "Kontakt — Wielkopolski Klub Tańców Polskich",
    description:
      "Skontaktuj się z Wielkopolskim Klubem Tańców Polskich w Poznaniu — telefon, e-mail, adres i formularz kontaktowy.",
  },
};

const DEFAULT_META = PAGE_META["/"];

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

// Keeps <title>, meta description, canonical URL, and Open Graph/Twitter
// tags in sync with the current route, since this is a client-side-routed
// SPA and index.html alone can only describe the homepage.
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] ?? DEFAULT_META;
    const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = meta.title;
    setMetaByName("description", meta.description);
    setCanonical(url);

    setMetaByProperty("og:title", meta.title);
    setMetaByProperty("og:description", meta.description);
    setMetaByProperty("og:url", url);
    setMetaByName("twitter:title", meta.title);
    setMetaByName("twitter:description", meta.description);
  }, [pathname]);

  return null;
}
