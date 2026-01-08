"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ArrowButton from "../Ui/ArrowButton";

const CTASection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  return (
    <section className=" bg-[#f8f6f1] section-padding py-30">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleControls}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4">
          Let's Discuss Your Project
        </h2>
        <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation to explore how our services can help
          achieve your business goals.
        </p>
        <Link href="/contact-us">
          <ArrowButton
            label="Schedule Consultation"
            direction="up-right"
            className="ri-arrow-right-up-long-line"
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
