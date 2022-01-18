import './App.css';
import Header from './HomePage/Header';
import Footer from './HomePage/Footer';
import Intro from './HomePage/Intro';
import Projects from './HomePage/Projects';
import Contact from './HomePage/Contact';
import Skills from './HomePage/Skills';
import About
 from './HomePage/About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
