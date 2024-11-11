import Header from "./components/Header/index.js";
import Hero from "./components/Hero/index.js";
import Clients from "./components/Clients/index.js";
import Features from "./components/Features/index.js";
import Pricing from "./components/Pricing/index.js";
import Footer from "./components/Footer/index.js";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};
export default App;
