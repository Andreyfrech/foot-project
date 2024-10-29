import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/category/:name" Component={Category} />
            <Route path="/meal/:id" Component={Recipe} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
