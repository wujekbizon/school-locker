import './Home.scss';
import { useState } from 'react';
import Hero from './Hero';
import Footer from './Footer';
import Title from './Title';
import FeatureCard from '../cards/FeatureCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TitleText } from '../animations/CustomTexts';
import { exploreFeatures } from '../../data/data';

const Home = () => {
  const [active, setActive] = useState('feature-2');

  return (
    <>
      <section className="home">
        <Hero />
      </section>
      <section className="about">
        <div className="gradient-02" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="about-content"
        >
          <div className="animated_title">
            <Title title="about school locker" />
          </div>

          <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}>
            <span className="gradient_text school-title">School Locker </span>
            is a new multimedia platform, where user can create and fully
            customize a digital locker. So what is exactly a digital locker then
            ?
          </motion.p>
          <br />

          <motion.p variants={fadeIn('up', 'tween', 0.4, 1)}>
            Imagine digital metaverse, where you can keep all of your{' '}
            <q>stuff</q>. Where You can create your own custom student
            portfolio, get access to the newest technologies, and even setup a
            meeting. Where you can ask Artificial Intelligence chatbot any
            question. And much more...
          </motion.p>

          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="home-scroll"
          >
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
          </motion.div>
        </motion.div>
      </section>
      <div className="gradient_relative">
        <div className="gradient-03" />
      </div>
      <section className="explore" id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="explore-content"
        >
          <div className="animated_title">
            <Title
              title="Explore Endless Possibilities"
              textStyles="text-color"
            />
          </div>
          <TitleText
            title={
              <>
                Let's explore main features of <br /> School Locker
              </>
            }
          />
          <div className="cards_container">
            {exploreFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
