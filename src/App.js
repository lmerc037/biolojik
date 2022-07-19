import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Historique from "./pages/Historique";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SingleShop from "./pages/SingleShop";
import SingleShop1 from "./pages/SingleShop1";
import SingleShop2 from "./pages/SingleShop2";
import SingleShop3 from "./pages/SingleShop3";
import BlogPageTwo from "./pages/BlogPageTwo";
import BlogPageOne from "./pages/BlogPageOne";
import Reservation from "./pages/Reservation";
import Reservation1 from "./pages/Reservation1";
import Reservation2 from "./pages/Reservation2";
import Reservation3 from "./pages/Reservation3";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          element={<Home />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/home"}`}
          element={<Home />}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/historique"}`}
          element={<Historique />}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/contact"}`}
          element={<Contact />}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/shop"}`}
          element={<Shop />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/single-shop"}`}
          element={<SingleShop />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/single-shop-1"}`}
          element={<SingleShop1 />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/single-shop-2"}`}
          element={<SingleShop2 />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/single-shop-3"}`}
          element={<SingleShop3 />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/recette"}`}
          element={<BlogPageOne />}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/blog"}`}
          element={<BlogPageTwo />}
        />

        <Route path={`${process.env.PUBLIC_URL + "/faq"}`} element={<Faq />} />

        <Route
          path={`${process.env.PUBLIC_URL + "/reservation"}`}
          element={<Reservation />}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/reservation1"}`}
          element={<Reservation1 />}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/reservation2"}`}
          element={<Reservation2 />}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/reservation3"}`}
          element={<Reservation3 />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
