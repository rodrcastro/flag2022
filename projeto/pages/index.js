import Head from 'next/head';

import Footer from '../components/Footer/footer';
import Nav from '../components/Nav/nav';
import About from '../components/About/about';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
