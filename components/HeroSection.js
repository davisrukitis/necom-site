import styles from "../styles/hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Nords Event Communications</h1>
        <p className={styles.subtitle}>
          The leading event marketing and sponsorship agency in Latvia!
        </p>
      </div>
    </section>
  );
}
