import { useRouter } from 'next/router';
import Header from '@components/site/Header';
import Footer from '@components/site/Footer';
import FacebookMsg from '@components/FacebookMsg';
import { usePageMotion } from '@components/site/motion';

import '../styles/site.css';
import '../styles/anm/curtain-slider.css';
import '../styles/anm/text-reveal.css';
import '../styles/anm/rotating-words.css';
import '../styles/anm/stacking-cards.css';
import '../styles/anm/magnetic-tag-cloud.css';
import '../styles/anm/process-rail.css';
import '../styles/anm/diagonal-gallery.css';
import '../styles/anm/image-fly-in.css';
import '../styles/anm/accordion.css';
import '../styles/anm/echo-headline.css';
import '../styles/anm/elastic-divider.css';
import '../styles/anm-theme.css';
import '../styles/pages.css';
import '../styles/shiny-glass.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  usePageMotion(router.asPath);

  return (
    <>
      <Header light={Component.lightHeader} />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
      <FacebookMsg />
    </>
  );
}
