import styles from "./Faq.module.scss";
import { Container, Row, Col, Accordion } from "react-bootstrap";

export default function Faq() {
  return (
    <>
      <section className={styles.faq}>
        <Container id="faq" className="pb-5 pb-lg-0">
          <Row>
            <Col className="d-flex justify-content-center align-items-center" md={6}>
              <img src="/src/assets/Group 69.svg"></img>
            </Col>
            <Col className="d-flex flex-column justify-content-center" md={6}>
              <h1 className={styles.faqText}>Frequently Asked Questions</h1>
              <Accordion className="pt-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why should I choose CoinFix?
                  </Accordion.Header>
                  <Accordion.Body>
                    We're industry pioneers, having been in the cryptocurrency
                    industry since 2016. We've facilitated more than 21 billion
                    USD worth of transactions on our exchange for customers in
                    over 40 countries. Today, we're trusted by over 8 million
                    customers around the world and have received praise for our
                    easy-to-use app, secure wallet, and range of features.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>How secure is CoinFix?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Do I have to buy a whole Bitcoin?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>How do I actually buy Bitcoin?</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
