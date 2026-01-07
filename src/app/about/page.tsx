"use client";

import ArrowButton from "@/src/components/Ui/ArrowButton";
import Container from "@/src/components/Ui/Container";
import { motion, useAnimation, useInView } from "framer-motion";
import { Eye, Heart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Journey = () => {
  const leftRef1 = useRef(null);
  const leftInView1 = useInView(leftRef1, { amount: 0.1 });
  const leftControls1 = useAnimation();

  useEffect(() => {
    leftControls1.start(
      leftInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
    );
  }, [leftInView1, leftControls1]);

  const rightRef1 = useRef(null);
  const rightInView1 = useInView(rightRef1, { amount: 0.1 });
  const rightControls1 = useAnimation();

  useEffect(() => {
    rightControls1.start(
      rightInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
    );
  }, [rightInView1, rightControls1]);

  return (
    <section>
      <Container>
        <div className="flex md:flex-row flex-col items-center justify-between gap-15 py-30  overflow-hidden md:overflow-visible">
          <motion.div
            ref={leftRef1}
            initial={{ opacity: 0, x: -100 }}
            animate={leftControls1}
            transition={{ duration: 0.6 }}
            className="w-1/2 space-y-5"
          >
            <p className="text-[#ff0100]">Our Journey</p>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">
              Two Decades of Excellence
            </h3>
            <p>
              Founded in 2004, Vantage Group has grown from a boutique
              consulting firm to a leading provider of comprehensive business
              solutions. Our journey has been defined by a relentless pursuit of
              excellence and a deep commitment to our clients' success.
              <br />
              <br />
              Today, we serve clients across multiple industries and
              geographies, bringing together a diverse team of experts who share
              a common passion for solving complex business challenges and
              creating lasting value.
            </p>
            <ArrowButton
              label="Explore Our Services"
              direction="up-right"
              className="ri-arrow-right-up-long-line"
            />
          </motion.div>

          <motion.div
            ref={rightRef1}
            initial={{ opacity: 0, x: 100 }}
            animate={rightControls1}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 w-full flex justify-center items-center"
          >
            <Image
              src="/images/aboutsectionimg1.jpg"
              alt="about image"
              width={700}
              height={300}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, delivering exceptional results that exceed expectations.",
    },
    {
      icon: Eye,
      title: "Integrity",
      description:
        "Honesty and transparency form the foundation of our relationships with clients, partners, and team members.",
    },
    {
      icon: Heart,
      title: "Commitment",
      description:
        "We are deeply invested in our clients' success and go above and beyond to ensure their goals are achieved.",
    },
  ];

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

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

  const valueRef = useRef(null);
  const valueInView = useInView(valueRef, { amount: 0.1 });
  const valueControls = useAnimation();

  useEffect(() => {
    valueControls.start(valueInView ? "show" : "hidden");
  }, [valueInView, valueControls]);

  return (
    <section className="bg-[#f8f6f1] py-30">
      <Container className=" space-y-15  overflow-hidden md:overflow-visible">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#ff0100]">Our values</p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold">
            What Drives Us
          </h3>
        </motion.div>
        <motion.div
          ref={valueRef}
          initial="hidden"
          animate={valueControls}
          variants={containerVariants}
          className="grid md:grid-cols-3 grid-cols-1 gap-10"
        >
          {values.map((value, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="text-center"
            >
              <div className="w-15 h-15 rounded-full bg-[#FF0100] flex items-center justify-center mx-auto mb-6 text-white">
                <value.icon className="text-primary-foreground" size={25} />
              </div>
              <h3 className="font-serif text-2xl font-semibold  mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

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
    <section className="py-30">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's start a conversation about how we can help your business
            thrive.
          </p>

          <Link href="/contact-us">
            <ArrowButton
              label="Contact Us"
              className="ri-arrow-right-long-line"
              direction="right"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

const About = () => {

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { amount: 0.1 });
  const headerControls = useAnimation();

  useEffect(() => {
    headerControls.start(
      headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [headerInView, headerControls]);


  return (
    <section className="">
      <div className="flex flex-col items-center justify-center  text-white space-y-2 bg-[url('/images/serviceimg1.png')] bg-center py-30">
        <Container>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerControls}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <p>About Us</p>
            <h1 className="text-5xl  font-bold  leading-none text-[#FF0100] ">
              Our Story & Mission
            </h1>
            <p>
              Building lasting partnerships through excellence, integrity, and
              innovation for over two decades.
            </p>
          </motion.div>
        </Container>
      </div>


      <Journey />
      <ValuesSection />
      <CTASection />
    </section>
  );
};

export default About;
