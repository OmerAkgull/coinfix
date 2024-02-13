import NavBar from "./components/layout/navbar/Navbar";
import Hero from "./components/layout/hero/Hero";
import Exchange from "./components/layout/exchange/Exchange";
import GlobalStyle from "./globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import Faq from "./components/layout/faq/Faq";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero/>
      <Exchange/>
      <Faq/>
    </>
  );
}

export default App;
