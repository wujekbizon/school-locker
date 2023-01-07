import './Home.scss';
import Hero from './Hero';
import Footer from './Footer';
import Title from './Title';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-title">
          <Title title="home" />
        </div>
        <Hero />
      </section>
      <section className="about" id="about">
        <div className="about-title">
          <Title title="about" />
        </div>
        <div className="about-content">
          <p>
            <span className="gradient_text">School Locker </span>
            is a new multimedia platform, where user can create and fully
            customize a digital locker. What is a digital locker then ?
          </p>
          <Image src="/images/hdots.jpg" alt="dots" width={80} height={75} />
          <p>
            Imagine digital metaverse , where you can keep all your stuff. Where
            You can create your own custom student portfolio, get access to the
            newest technologies, and even setup a meeting. Where you can ask
            Artificial Intelligence chatbot any question. And much more...
          </p>
        </div>

        <div className="about-image">
          <Image
            src="/images/home_locker.avif"
            alt="locker"
            width={800}
            height={400}
            priority
            className="image-locker"
          />
        </div>
      </section>
      <div className="home-scroll">
        <Image src="/images/down.png" alt="down-arrow" width={30} height={30} />
        <div className="scroll-title">
          <span className="gradient_text"> explore more</span>
        </div>
        <Image src="/images/down.png" alt="down-arrow" width={30} height={30} />
      </div>
      <Footer />
    </>
  );
};
export default Home;
