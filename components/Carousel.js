import { useState, useEffect } from "react";
import styles from "../styles/carousel.module.css";

const images = [
  "https://rimirigamarathon.com/wp-content/uploads/2024/06/Atklata-registracija-Rimi-Rigas-maratonam-2025-4.jpg",
  "https://www.rigawinechampagne.lv/storage/c497327161b6061072a5814b5bcc90c1c8a2a7fb.jpg",
  "https://cdn.prod.website-files.com/6685269809a78da3e36dd89e/6777a78d8d40b8d6437dcd09_KW_VincentHaycock_02310013%2520(1)-p-1600.webp"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <img key={index} src={images[index]} alt="Carousel Image" className={styles.image} />
    </div>
  );
}
