import NavBar from "./components/layout/navbar/Navbar";
import Hero from "./components/layout/hero/Hero";
import Exchange from "./components/layout/exchange/Exchange";
import GlobalStyle from "./globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero/>
      <Exchange/>
    </>
  );
}

export default App;
