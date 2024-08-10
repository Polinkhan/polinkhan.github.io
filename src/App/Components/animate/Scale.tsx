import { AnimatePresence, AnimationProps, MotionStyle, motion } from "framer-motion";
import { ReactNode } from "react";

type SlideType = "Up" | "Down" | "Left" | "Right";

const defaultAnimations = {
  initial: { scale: 1.01 },
  animate: { scale: 1 },
  exit: { scale: 1.01 },
};

interface SlideProps extends AnimationProps {
  children: ReactNode;
  id?: string;
  from?: SlideType;
  value?: number;
  duration?: number;
  style?: MotionStyle;
}

const Scale = (props: SlideProps) => {
  const { id, from, value, duration, ...rest } = props;
  return (
    <AnimatePresence mode="wait" key={id}>
      <motion.div
        variants={defaultAnimations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: duration || 0.3 }}
        style={{ width: "100%", height: "100%" }}
        {...rest}
      />
    </AnimatePresence>
  );
};

export default Scale;
