import NavBar from "./components/layout/navbar/Navbar";
import Hero from "./components/layout/hero/Hero";
import GlobalStyle from "./globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero/>
    </>
  );
}

export default App;
