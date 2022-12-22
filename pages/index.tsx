import Hero from '../components/homepage/Hero';
import Footer from '../components/homepage/Footer';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>School Locker</title>
        <meta
          name="description"
          content="One of the best application for creating full portfolio. Get yourself a locker, Today"
        />
      </Head>
      <Hero />
      <Footer />
    </>
  );
};
export default HomePage;
