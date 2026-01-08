"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ArrowButton from "../Ui/ArrowButton";




const LandingPage = () => {
  const headline = "Elevating Business Through Excellence";
  const words = headline.split(" ");

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { amount: 0.1 });
  const headerControls = useAnimation();

  useEffect(() => {
    headerControls.start(
      headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [headerInView, headerControls]);

  const textRef = useRef(null);
  const textInView = useInView(textRef, { amount: 0.1 });
  const textControls = useAnimation();

  useEffect(() => {
    textControls.start(
      textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [textInView, textControls]);

  const welcomeRef = useRef(null);
  const welcomeInView = useInView(welcomeRef, { amount: 0.1 });
  const welcomeControls = useAnimation();

  useEffect(() => {
    welcomeControls.start(
      welcomeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [welcomeInView, welcomeControls]);

  return (
    <section className="h-screen bg-[url('/images/landingImg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="relative flex flex-col justify-center items-center h-full bg-black/50 text-white p-4 text-center space-y-8">
        <motion.div className="flex flex-col items-center space-y-6">
          <motion.p
            ref={welcomeRef}
            initial={{ opacity: 0, y: 30 }}
            animate={welcomeControls}
            transition={{ duration: 0.5 }}
          >
            Welcome to Gallant Knight Group
          </motion.p>
          <h1 className="flex flex-wrap w-2/3 text-[clamp(3.5rem,5vw,6rem)]  text-[#e3bd6a] font-bold leading-none justify-center ">
            {words.map((word, i) => (
              <motion.div
                key={i}
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerControls}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                {word}&nbsp;
              </motion.div>
            ))}
          </h1>

          <motion.p
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={textControls}
            transition={{ duration: 0.5 }}
            className="md:w-165 text-lg md:text-xl"
          >
            Vestibulum condimentum dignissim augue, et lacinia nunc commodo a.
            Sed quis massa in purus tincidunt venenatis.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 mb-15">
          <a href="#featuredsection">
            <ArrowButton
              label="Explore"
              direction="down"
              className="ri-arrow-down-long-line rounded-full text-sm flex items-center justify-center transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
