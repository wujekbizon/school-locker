import { motion } from 'framer-motion';
import Title from '../components/homepage/Title';
import { TitleText } from '../components/animations/CustomTexts';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { customers } from '../data/customers';

const World = () => {
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
          <Title title="Our customers all over the world" />
        </div>
        <TitleText
          title={<>Over 15000 happy customers all over the globe.</>}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="world-image_container"
        >
          <img src="/images/map.png" alt="map" />
          {customers.map((customer, index) => (
            <motion.div
              variants={zoomIn(index * 0.1, 0.5)}
              key={customer.name}
              className="dot"
              style={{ top: customer.top, left: customer.left }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
