import { useState } from 'react';
import FeatureCard from '../components/cards/FeatureCard';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { exploreFeatures } from '../data/data';
import Title from '../components/homepage/Title';
import { TitleText } from '../components/animations/CustomTexts';

const Explore = () => {
  const [active, setActive] = useState('feature-2');

  return (
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
  );
};
export default Explore;
