import { useState, useEffect } from "react";

export default function Carousel() {
  const images = [
    "https://rimirigamarathon.com/wp-content/uploads/2023/03/aigarsnords.jpg",
    "https://rimirigamarathon.com/wp-content/uploads/2023/03/inese.jpg",
    "https://rimirigamarathon.com/wp-content/uploads/2024/01/bilde_Valda.jpeg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[index]} alt="Team Member" />
    </div>
  );
}