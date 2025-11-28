import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artisans from "./pages/Artisans";
import FicheArtisan from "./pages/FicheArtisan";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        {/* Contenu principal qui pousse le footer */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/artisan/:id" element={<FicheArtisan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
