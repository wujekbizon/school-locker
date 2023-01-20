import './Home.scss';
import Hero from './Hero';
import { GetStarted, About, Explore, WhatsNew, World } from '../../sections/';

import Footer from '../../sections/Footer';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <About />
      <div className="gradient_relative">
        <div className="gradient-03 z-0" />
      </div>
      <Explore />
      <div className="gradient_relative">
        <div className="gradient-04 z-0" />
      </div>
      <GetStarted />
      <WhatsNew />
      <World />
      <Footer />
    </main>
  );
};
export default Home;
