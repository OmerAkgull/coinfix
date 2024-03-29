import { Container, Row, Col } from "react-bootstrap";
import styles from "./Joinus.module.scss";

export default function Joinus() {
  return (
    <>
      <section className={styles.gradientBg}>
        <Container id="join" fluid>
          <Row>
            <Col className="d-flex justify-content-center align-items-center" md={3}>
              {" "}
              <img
              style={{marginRight:"100px"}}
                    className={`d-none d-md-block ${styles.responsiveImage}`}
                src="/crypto-cryptocurrency.gif"
              ></img>
            </Col>
            <Col md={6}>
              {" "}
              <div className="d-flex text-center flex-column justify-content-center align-items-center">
                <p className={styles.joinText}>JOIN US TO</p>
                <p className={styles.gradientJoinText}>GET YOUR FIX.</p>
                <p className="fs-4 text-center">
                  Invest and manage all your crypto at one place.
                </p>
                <button className={`mt-5 ${styles.button}`}>Join Us</button>
              </div>
            </Col>
            <Col
              md={3}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                className={`d-none d-md-block mb-4 ${styles.responsiveImage}`}
                src="/bitcoin.gif"
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className={styles.footer}>
      <div className="d-flex mb-3 gap-3 fw-light text-center justify-content-center align-items-center">
        <img className={styles.brandLogo} src="/logo.svg"></img>
        <img className={styles.brandLogo} src="/discord-mark-white.svg"></img>
        <img className={styles.brandLogo} src="/Facebook_Logo_Secondary.png"></img>
        <img className={styles.brandLogo} src="/yt_icon_mono_dark.png"></img>
        </div>
        <div className="d-flex gap-4 fw-light text-center justify-content-center align-items-center">
            <p>Privacy</p>
            <p>Terms of Use</p>
        </div>
        <img className={`d-none d-md-block ${styles.binance}`} src="/Binance_USD_perspective_matte 1.png"></img>
        <img className={`d-none d-md-block ${styles.tether}`} src="/Tether_perspective_matte 1.png"></img>
      </footer>
    </>
  );
}
