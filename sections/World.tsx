import { motion } from 'framer-motion';
import Title from '../components/homepage/Title';
import { TitleText } from '../components/animations/CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useRef, useEffect } from 'react';

const World = () => {
  const imageRef: React.MutableRefObject<HTMLImageElement | null> =
    useRef(null);

  const mouseoverHandler = (event: MouseEvent) => {
    console.log(event.clientX, event.clientY);
  };

  useEffect(() => {
    if (!imageRef.current) {
      return;
    }
    const image = imageRef.current;

    image.addEventListener('mousemove', mouseoverHandler);
  });

  return (
    <section className="world">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="world-container"
      >
        <div className="animated_title">
          <Title title="| Our customers all over the world " />
        </div>
        <TitleText
          title={<>Over 15000 happy customers all over the globe.</>}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="world-image_container"
        >
          <div className="image-wrapper">
            <img src="/images/map.png" alt="map" ref={imageRef} />
          </div>
          <div className="dot" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
