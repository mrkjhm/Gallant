"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../Ui/Container";
import Image from "next/image";
import ArrowButton from "../Ui/ArrowButton";
import Link from "next/link";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { amount: 0.1 });
  const leftControls = useAnimation();

  useEffect(() => {
    leftControls.start(
      leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
    );
  }, [leftInView, leftControls]);

  /* RIGHT COLUMN */
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { amount: 0.1 });
  const rightControls = useAnimation();

  useEffect(() => {
    rightControls.start(
      rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
    );
  }, [rightInView, rightControls]);

  return (
    <section
      className="flex items-center py-20 overflow-hidden"
      id="aboutsection"
    >
      <Container className="flex flex-col lg:flex-row gap-10 items-center w-full">
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={leftControls}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Image
            src="/images/aboutsectionimg1.jpg"
            alt="About Us"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 100 }}
          animate={rightControls}
          transition={{ duration: 0.6 }}
          className="w-full space-y-6"
        >
          <h2 className="text-[clamp(2rem,2vw,5rem)] font-bold text-red-500">
            Lorem ipsum dolor.
          </h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            necessitatibus reprehenderit natus temporibus, deleniti quibusdam
            beatae voluptatem pariatur reiciendis, consequuntur esse, laboriosam
            iste ducimus dolorem nisi. Facere magni harum ullam!
          </p>

          <Link href="/about">
            <ArrowButton
              label="Read more"
              direction="up-right"
              className="ri-arrow-right-up-long-line"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
