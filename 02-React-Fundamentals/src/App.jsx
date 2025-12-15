import "./App.css";
import CoreConcept from "./components/CoreConcepts";
import Header from "./components/Header";
import {CORE_CONCEPTS} from './data'
import Footer from "./components/Footer";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept)=>(
              <CoreConcept img={concept.image} title={concept.title} description={concept.description}/>
            ))}
          </ul>
        </section>
        <Examples/>
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
