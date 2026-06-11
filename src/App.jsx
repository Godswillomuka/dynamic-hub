import ContactNav from "./components/ContactNav";
import Header from "./components/Header";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ContactNav />
      <Header />
      <WhatsApp />
      <main>
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;