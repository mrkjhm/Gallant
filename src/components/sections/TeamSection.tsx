import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../Ui/Container";
import Image from "next/image";
import { TeamMembers } from "../constant/TeamMembers";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 👈 delay bawat card
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

const TeamSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { amount: 0.1 });
  const teamControls = useAnimation();

  useEffect(() => {
    teamControls.start(teamInView ? "show" : "hidden");
  }, [teamInView, teamControls]);

  return (
    <div className="py-20 bg-[#f8f6f1]">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-20 space-y-2"
        >
          <h1 className="text-5xl  font-bold  leading-none">
            Our Team <span className="text-[#ff0100]">Members</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
        </motion.div>
        <motion.div
          ref={teamRef}
          initial="hidden"
          animate={teamControls}
          variants={containerVariants}
          className="flex gap-5 flex-wrap justify-center"
        >
          {TeamMembers.map((item, index) => (
            <motion.div variants={cardVariants} key={index}>
              <Image
                src={item.image}
                alt="Team Member Image"
                width={200}
                height={400}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2">{item.name}</h3>
              <p>{item.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default TeamSection;
