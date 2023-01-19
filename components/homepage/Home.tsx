import './Home.scss';
import Hero from './Hero';
import { GetStarted, About, Explore } from '../../sections/';

import Footer from '../../sections/Footer';

const Home = () => {
  return (
    <div className="home">
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
      <Footer />
    </div>
  );
};
export default Home;
