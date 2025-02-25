import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nords Event Communications</title>
        <meta name="description" content="The leading event marketing and sponsorship agency in Latvia!" />
      </Head>
      <Navbar />
      <HeroSection />
      <Carousel />
      <Footer />
    </>
  );
}
