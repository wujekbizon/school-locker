import './CustomText.scss';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../utils/motion';
import { ReactNode } from 'react';

type TypingTextProps = {
  title: string;
  textStyles?: string;
};
type TextProps = {
  title: ReactNode;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p variants={textContainer} className={`${textStyles} text_typed`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`text-title ${textStyles}`}
  >
    {title}
  </motion.h2>
);
