import './Home.scss';
import Hero from './Hero';
import Footer from './Footer';
import Title from './Title';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';

const Home = () => {
  return (
    <>
      <section className="home">
        <Hero />
      </section>
      <section className="about" id="about">
        <div className="gradient-02" />
        <motion.div className="about-content">
          <div className="about-title">
            <Title title="about" />
          </div>

          <p>
            <span className="gradient_text">School Locker </span>
            is a new multimedia platform, where user can create and fully
            customize a digital locker. So what is exactly a digital locker then
            ?
          </p>
          <Image src="/images/hdots.jpg" alt="dots" width={80} height={75} />
          <p>
            Imagine digital metaverse, where you can keep all of your{' '}
            <q>stuff</q>. Where You can create your own custom student
            portfolio, get access to the newest technologies, and even setup a
            meeting. Where you can ask Artificial Intelligence chatbot any
            question. And much more...
          </p>

          <div className="home-scroll">
            <Image
              src="/images/down.png"
              alt="down-arrow"
              width={30}
              height={30}
            />
            <div className="scroll-title">
              <span className="gradient_text"> explore more</span>
            </div>
            <Image
              src="/images/down.png"
              alt="down-arrow"
              width={30}
              height={30}
            />
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
