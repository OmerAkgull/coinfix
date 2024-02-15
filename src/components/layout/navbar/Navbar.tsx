import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.scss";

export default function NavBar() {
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className={styles.navColors}>
        <Container>
          <img
            className={`d-none px-2 d-sm-block ${styles.coinSvg}`}
            src="/src/assets/coin.svg"
          ></img>
          <Navbar.Brand className="fw-bold fs-2" href="#">
            CoinFix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link active className="fs-5 px-sm-3 fw-medium" href="#">
                Home
              </Nav.Link>
              <Nav.Link active className="fs-5 px-sm-3 fw-medium" href="#exchanges">
                Exchanges
              </Nav.Link>
              <Nav.Link active className="fs-5 px-sm-3 fw-medium" href="#faq">
                FAQ
              </Nav.Link>
              <Nav.Link active className="fs-5 px-sm-3 fw-medium" href="#join">
                Join Now
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                active
                className="fs-5 fw-medium"
                target="blank"
                href="https://twitter.com/"
              >
                <img
                  className={`d-none d-sm-block ${styles.brandLogos}`}
                  src="/src/assets/logo.svg"
                ></img>
              </Nav.Link>
              <Nav.Link
                active
                className="fs-5 fw-medium"
                target="blank"
                href="https://discord.com/"
              >
                <img
                  className={`d-none d-sm-block ${styles.brandLogos}`}
                  src="/src/assets/discord-mark-white.svg"
                ></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
 
