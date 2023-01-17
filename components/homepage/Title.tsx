import './Title.scss';
import { TypingText } from '../animations/CustomTexts';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const Title = ({ title }: { title: string }) => {
  return (
    <div className="title-wrapper">
      <motion.div
        variants={fadeIn('left', 'tween', 1.1, 1.5)}
        className="divider"
      />
      <TypingText title={title} />
    </div>
  );
};
export default Title;
