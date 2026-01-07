"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Award, Globe, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

import Container from "../Ui/Container";

const FeaturesSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  const features = [
    {
      icon: Award,
      title: "Industry Leadership",
      description:
        "Two decades of proven excellence in delivering strategic business solutions across diverse sectors.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our seasoned professionals bring deep expertise and fresh perspectives to every engagement.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving clients worldwide with localized insights and international best practices.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description:
        "Data-driven strategies that deliver tangible outcomes and sustainable growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // 👈 delay bawat card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const featureRef = useRef(null);
  const featureInView = useInView(featureRef, { amount: 0.1 });
  const featureControls = useAnimation();

  useEffect(() => {
    featureControls.start(featureInView ? "show" : "hidden");
  }, [featureInView, featureControls]);

  return (
    <section className="py-30" id="featuredsection">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-medium mb-3 text-[#ff0100]">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine strategic thinking with hands-on execution to help
            businesses thrive in today's competitive landscape.
          </p>
        </motion.div>

        <motion.div
          ref={featureRef}
          initial="hidden"
          animate={featureControls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="card-elegant p-8 text-center group bg-gray-100 rounded-lg"
            >
              <div className="w-16 h-16 rounded-full bg-[#ff0100]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff0100] transition-colors duration-300">
                <feature.icon
                  className=" group-hover:text-white transition-colors duration-300"
                  size={28}
                />
              </div>
              <h3 className="font-serif text-xl font-semibold  mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
