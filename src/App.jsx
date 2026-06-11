import ContactNav from "./components/ContactNav";
import Header from "./components/Header";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;