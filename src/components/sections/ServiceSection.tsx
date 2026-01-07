"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import ArrowButton from "../Ui/ArrowButton";
import Container from "../Ui/Container";
import { Services } from "../constant/Services";
import Icon from "../Ui/Icon";
import { useEffect, useRef } from "react";

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

const ServiceSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  const serviceRef = useRef(null);
  const serviceInView = useInView(serviceRef, { amount: 0.1 });
  const serviceControls = useAnimation();

  useEffect(() => {
    serviceControls.start(serviceInView ? "show" : "hidden");
  }, [serviceInView, serviceControls]);

  return (
    <section className="relative  py-20">
      <div className="bg-red-800 h-96 absolute w-full top-0 -z-5 opacity-75"></div>
      <Image
        src="/images/serviceimg2.png"
        alt="Service Image"
        width={500}
        height={200}
        className="w-full absolute top-0 left-0  object-cover -z-10 h-96 opacity-50"
      />
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-20 text-white space-y-2"
        >
          <h1 className="text-5xl  font-bold  leading-none">
            Service We <span className="text-[#cfa853]">Offer</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </motion.div>

        <motion.div
          ref={serviceRef}
          initial="hidden"
          animate={serviceControls}
          variants={containerVariants}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
        >
          {Services.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center text-center space-y-5 bg-white border border-gray-300 rounded-lg shadow-md p-10"
            >
              <Icon name={item.icon} className="md:text-5xl text-3xl" />
              <h3 className="font-bold uppercase text-lg">{item.title}</h3>
              <p>{item.desc1}</p>
              <Link href={`/services/${item.slug}`}>
                <ArrowButton
                  label="Read more"
                  direction="up-right"
                  className="ri-arrow-right-up-long-line"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceSection;
