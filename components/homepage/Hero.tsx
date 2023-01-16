import './Hero.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="hero_container"
        >
          <div className="hero-title">
            <motion.h1 variants={textVariant(1.1)}>School</motion.h1>

            <motion.h1 variants={textVariant(1.2)}>Locker</motion.h1>
          </div>

          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="image_motion"
          >
            <div className="image_container submenu-gradient" />
            <img
              src="/images/home_locker.avif"
              alt="locker"
              className="image-locker"
            />
          </motion.div>

          <div className="hero-links">
            <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
              <Image src="/images/bot.svg" alt="bot" width={30} height={30} />
            </a>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              <Image
                src="/images/discord.svg"
                alt="bot"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://twitter.com/tweeter"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/images/tweet.svg" alt="bot" width={30} height={30} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/images/insta.svg" alt="bot" width={30} height={30} />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default Hero;
