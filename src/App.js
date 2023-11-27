import logo from './logo.svg';
import './App.css';
import Navbar from './components/carpeta1/navbar';
import Inicio from './components/carpeta2/inicio';
import AprenderReact from './components/carpeta3/aprenderReact';
import EntornoVirtual from './components/carpeta4/virtual';
import ConclusionesReact from './components/carpeta5/conclusiones';
import Footer from './components/carpeta6/footer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Inicio/>
        <AprenderReact/>
        <EntornoVirtual/>
        <ConclusionesReact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
