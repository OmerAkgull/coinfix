import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
      <header id="home" className={styles.gradientBg}>
        <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
          <div className={styles.heroText}>The World's</div>
          <div className={styles.gradientHeroText}>Fastest Growing</div>
          <div className={styles.heroText}>Crypto Web App</div>
          <Container className="mt-5">
            <Row className="justify-content-center text-center">
              <Col xs={6} md={3} className="mb-3 d-flex justify-content-center">
                <img
                  className={styles.coinLogo}
                  src="/bitcoin-btc-logo.svg"
                  alt="Bitcoin Logo"
                />
              </Col>
              <Col xs={6} md={3} className="mb-3 d-flex justify-content-center">
                <img
                  className={styles.ethLogo}
                  src="/ethereum-eth-logo-diamond.svg"
                  alt="Ethereum Logo"
                />
              </Col>
              <Col xs={6} md={3} className="mb-3 d-flex justify-content-center">
                <img
                  className={styles.coinLogo}
                  src="/tether-usdt-logo.svg"
                  alt="Tether Logo"
                />
              </Col>
              <Col xs={6} md={3} className="mb-3 d-flex justify-content-center">
                <img
                  className={styles.coinLogo}
                  src="/bnb-bnb-logo.svg"
                  alt="BNB Logo"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </header>
    </>
  );
}
