import { Container } from "react-bootstrap";
import styles from "./Exchange.module.scss";

export default function Exchange() {
    return(
        <>
        <Container className={`d-flex pt-5 justify-content-center align-items-center ${styles.gradientBg}`} fluid>
            <h1 className={styles.exchangeText}>Market Update</h1>
        </Container>
        </>
    )
}