import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

type TypingTextProps = {
  title: string;
  textStyles?: string; 
};

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-bold text-[25px] text-indigo-500 ${textStyles || ''}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

type TitleTextProps = {
  title: string;
  textStyles?: string; 
};

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles || ''}`}
  >
    {title}
  </motion.h2>
);
