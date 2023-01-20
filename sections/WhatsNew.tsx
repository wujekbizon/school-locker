import { newFeatures } from '../data/data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, titleVariants } from '../utils/motion';
import Title from '../components/homepage/Title';
import { TitleText } from '../components/animations/CustomTexts';
import NewFeature from '../components/homepage/NewFeature';

const WhatsNew = () => {
  return (
    <section className="whats-new">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="whats-new_container"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="whats-new-title"
        >
          <div className="animated_title">
            <Title title="Whats New ?" />
          </div>
          <TitleText title={<> What's new about School Locker ?</>} />
          <div className="new-features_wrapper">
            {newFeatures.map((feature) => (
              <NewFeature key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={titleVariants('right')}
          className="whats-new_image-container"
        >
          <img
            src="/images/vr.avif"
            alt="get-started"
            className="whats-new_image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default WhatsNew;
