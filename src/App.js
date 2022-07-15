import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Historique  from "./pages/Historique";
import Services from "./pages/Services"; 
import Gallery from "./pages/Gallery"; 
import GalleryTwo from "./pages/GalleryTwo"; 
import Contact from "./pages/Contact"; 
import SingleService from "./pages/SingleService"; 
import Team from "./pages/Team";  
import Shop from "./pages/Shop"; 
import SingleShop from "./pages/SingleShop"; 
import BlogPageTwo from "./pages/BlogPageTwo"; 
import BlogPageOne from "./pages/BlogPageOne"; 
import SingleBlog from "./pages/SingleBlog"; 
import Cart from "./pages/Cart"; 
import Checkout from "./pages/Checkout"; 
import NotFound from "./pages/NotFound"; 
import Faq from "./pages/Faq"; 





function App() {
  return (
    <Router>
      <ScrollToTop>
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
            path={`${process.env.PUBLIC_URL + "/about"}`}
            element={<About />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/historique"}`}
            element={<Historique />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/services"}`}
            element={<Services />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery"}`}
            element={<Gallery />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery-two"}`}
            element={<GalleryTwo />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            element={<Contact />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-services"}`}
            element={<SingleService />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            element={<Team />}
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
            path={`${process.env.PUBLIC_URL + "/recette"}`}
            element={<BlogPageOne />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            element={<BlogPageTwo />}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/faq"}`}
            element={<Faq />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-blog"}`}
            element={<SingleBlog />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-blog"}`}
            element={<SingleService />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/cart"}`}
            element={<Cart />}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/checkout"}`}
            element={<Checkout />}
          />
         
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
