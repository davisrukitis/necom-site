import Header from "../components/Header";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="event-grid">
        <EventCard title="Rimi Riga Marathon" img="https://rimirigamarathon.com/wp-content/uploads/2024/06/Atklata-registracija-Rimi-Rigas-maratonam-2025-4.jpg" />
        <EventCard title="Riga Wine & Champagne" img="https://www.rigawinechampagne.lv/storage/c497327161b6061072a5814b5bcc90c1c8a2a7fb.jpg" />
        <EventCard title="Pink Noise Riga" img="https://cdn.prod.website-files.com/6685269809a78da3e36dd89e/6777a78d8d40b8d6437dcd09_KW_VincentHaycock_02310013%2520(1)-p-1600.webp" />
      </div>
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}