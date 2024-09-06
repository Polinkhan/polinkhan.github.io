import { AnimatePresence, AnimationProps, MotionStyle, motion } from "framer-motion";
import { ReactNode } from "react";

const getAnimations = (value: number = 0) => ({
  initial: { opacity: value },
  animate: { opacity: 1 },
  exit: { opacity: value },
});

interface FadeProps extends AnimationProps {
  children: ReactNode;
  id?: string;
  value?: number;
  duration?: number;
  style?: MotionStyle;
}

const Fade = ({ id, value, duration, ...rest }: FadeProps) => {
  return (
    <AnimatePresence mode="wait" key={id}>
      <motion.div
        variants={getAnimations(value)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: duration ?? 1 }}
        style={{ width: "100%", height: "100%", flex: 1 }}
        {...rest}
      />
    </AnimatePresence>
  );
};

export default Fade;
