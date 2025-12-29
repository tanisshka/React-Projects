import Footer from "./components/Footer";
import Header from "./components/Header";
import InputCard from "./components/InputCard";
import BMIDescriptionCard from "./components/BMIdescriptionCard";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="content-wrapper">
          <InputCard />
          <BMIDescriptionCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
