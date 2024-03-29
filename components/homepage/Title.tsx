import './Title.scss';
import { TypingText } from '../animations/CustomTexts';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const Title = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles?: string;
}) => {
  return (
    <div>
      <motion.div
        variants={fadeIn('left', 'tween', 1.1, 1.5)}
        className="divider"
      />
      <TypingText title={title} textStyles={textStyles} />
    </div>
  );
};
export default Title;
