import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <>
      <header className={styles.gradientBg}>
        <div className="d-flex flex-column justify-content-center align-items-center pt-sm-5">
            <div className={styles.heroText}>The World's</div>
            <div className={styles.gradientHeroText}>Fastest Growing</div>
            <div className={styles.heroText}>Crypto Web App</div>
        </div>
      </header>
    </>
  );
}
