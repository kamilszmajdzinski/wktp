import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Classes } from "./components/Classes";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Offer } from "./components/Offer";
import { Tournament } from "./components/Tournament";
import { NationalDances } from "./components/NationalDances";

// Strip the trailing slash Vite adds to BASE_URL so React Router gets
// "/wktp" (project page) or "/" (local dev / custom domain).
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "o-nas", Component: About },
      { path: "zajecia", Component: Classes },
      { path: "tance-narodowe", Component: NationalDances },
      { path: "oferta", Component: Offer },
      { path: "turniej-upp", Component: Tournament },
      { path: "galeria", Component: Gallery },
      { path: "kontakt", Component: Contact },
    ],
  },
], { basename });
