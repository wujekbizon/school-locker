import './Home.scss';
import Hero from './Hero';
import Footer from './Footer';
import Title from './Title';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="home" id="home">
        <Title title="home" />
      </section>
      <Footer />
    </>
  );
};
export default Home;
