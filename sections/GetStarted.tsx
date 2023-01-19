import { startingFeatures } from '../data/data';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, titleVariants } from '../utils/motion';
import StartSteps from '../components/homepage/StartSteps';
import Title from '../components/homepage/Title';
import { TitleText } from '../components/animations/CustomTexts';

const GetStarted = () => {
  return (
    <section className="get-started">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="get-started_content"
      >
        <motion.div
          variants={titleVariants('left')}
          className="get-started_image-container"
        >
          <img src="/images/l7.png" alt="get-started" />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="get-started_content-features"
        >
          <div className="animated_title">
            <Title title="How School Locker Works" />
          </div>
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="get-started_wrapper">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default GetStarted;
