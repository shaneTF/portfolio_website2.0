import "./App.css";
import About_Me from "./Components/AboutMe/About_Me";
import Contact from "./Components/Contact/ContactMe";
import Header from "./Components/Header/HeaderComp";
import Portfolio from "./Components/Portfolio_Items/Portfolio_Item";

function App() {
  return (
    <div>
      <Header />
      <About_Me />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
