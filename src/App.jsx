import ContactNav from "./components/ContactNav";
import Header from "./components/Header";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";

import Service from "./pages/Service";


function App() {
  return (
    <div>
      <ContactNav />
      <Header />
      <WhatsApp />
      <main>
        {/* Main content goes here */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Service />} />
          <Route path="/services/:slug" element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;