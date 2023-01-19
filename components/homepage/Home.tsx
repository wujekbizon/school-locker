import './Home.scss';
import Hero from './Hero';
import { GetStarted, About, Explore } from '../../sections/';

import Footer from './Footer';

const Home = () => {
  return (
    <>
      <section className="home">
        <Hero />
      </section>
      <About />
      <div className="gradient_relative">
        <div className="gradient-03 z-0" />
      </div>
      <Explore />
      <div className="gradient_relative">
        <div className="gradient-04 z-0" />
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};
export default Home;
