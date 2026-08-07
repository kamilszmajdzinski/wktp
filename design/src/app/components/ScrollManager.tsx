import { useEffect } from "react";
import { useLocation } from "react-router";

// On every navigation, land at the top of the target page. If the URL carries
// a hash (e.g. /kontakt#formularz), scroll to that element instead so signup
// links jump straight to the form.
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a frame so the destination page has mounted before we look it up.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
