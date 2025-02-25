import React, { FC, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Wrapper.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {

  return (
    <motion.div
      className="wrapper"
      exit={{
        scale: 0.9,
        opacity: 0,
      }}
      initial={{
        scale: 0.9,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        x: { type: "spring", stiffness: 100 },
        duration: 0.2,
        delay: 0.1,
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
