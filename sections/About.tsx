import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import Title from '../components/homepage/Title';

const About = () => {
  return (
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
          customize a digital locker. So what is exactly a digital locker then ?
        </motion.p>
        <br />

        <motion.p variants={fadeIn('up', 'tween', 0.4, 1)}>
          Imagine digital metaverse, where you can keep all of your <q>stuff</q>
          . Where you can create your own custom student portfolio, get access
          to the newest technologies, and even setup a meeting. Where you can
          ask Artificial Intelligence chatbot any question. And much more...
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
  );
};
export default About;
