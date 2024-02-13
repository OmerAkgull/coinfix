import { Container, Row, Col } from "react-bootstrap";
import styles from "./Joinus.module.scss";

export default function Joinus() {
  return (
    <>
      <section className={styles.gradientBg}>
        <Container fluid>
          <Row>
            <Col md={3}>
              {" "}
              <img className="d-flex justify-content-center align-items-center w-50 mt-md-5 d-none d-md-block" src="/src/assets/crypto-cryptocurrency.gif"></img>
            </Col>
            <Col md={6}>
              {" "}
              <div className="d-flex text-center flex-column justify-content-center align-items-center">
                <p className={styles.joinText}>JOIN US TO</p>
                <p className={styles.gradientJoinText}>GET YOUR FIX.</p>
                <p className="fs-4 text-center">
                  Invest and manage all your crypto at one place.
                </p>
              </div>
            </Col>
            <Col md={3} className="d-flex justify-content-center align-items-center">
              <img className="d-none d-md-block" src="/src/assets/bitcoin.gif"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
