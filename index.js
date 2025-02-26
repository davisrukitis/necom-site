import Head from 'next/head';
import Script from 'next/script';
import '../public/porsche1.css';
import '../public/porsche2.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Ing. h.c. F. Porsche AG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="preconnect"
          href="https://images-porsche.imgix.net"
          crossOrigin="anonymous"
        />
      </Head>
      
      <div>
        <h1>Welcome to Porsche Clone</h1>
        <p>This is a clone of the Porsche International website.</p>
      </div>

      {/* External Scripts */}
      <Script src="/public/udg-uc-sdk.min.js" strategy="beforeInteractive" />
      <Script src="/public/udg-uc-sdk-pds.min.js" strategy="beforeInteractive" />
      <Script src="/public/porsche-design-system.js" strategy="lazyOnload" />
    </>
  );
}
