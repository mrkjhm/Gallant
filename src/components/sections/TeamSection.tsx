import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../Ui/Container";

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

  const team = [
    {
      name: "James Mitchell",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sarah Chen",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Torres",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emily Johnson",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
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

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { amount: 0.1 });
  const teamControls = useAnimation();

  useEffect(() => {
    teamControls.start(teamInView ? "show" : "hidden");
  }, [teamInView, teamControls]);

  return (
    <div className="py-20">
      <Container>


        <div className="container-narrow">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <p className="text-[#ff0100] font-medium mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience to help you navigate complex challenges.
            </p>
          </motion.div>

          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamControls}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div variants={cardVariants}
                key={index}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0  from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#cfa853] mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>


        </div>

      </Container>
    </div>
  );
};

export default TeamSection;
