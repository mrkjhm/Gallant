import { CheckCircle } from "lucide-react";
import Link from "next/link";
import ArrowButton from "../Ui/ArrowButton";
import Container from "../Ui/Container";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ServicesPreview = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description:
        "Comprehensive business strategy development to align your vision with market opportunities.",
      features: ["Market Analysis", "Growth Planning", "Risk Assessment"],
    },
    {
      title: "Digital Transformation",
      description:
        "Modernize your operations with cutting-edge technology solutions and digital strategies.",
      features: ["Tech Integration", "Process Automation", "Digital Strategy"],
    },
    {
      title: "Business Development",
      description:
        "Expand your market presence and build lasting partnerships for sustainable growth.",
      features: ["Market Entry", "Partnership Strategy", "Revenue Growth"],
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

  const serviceRef = useRef(null);
  const serviceInView = useInView(serviceRef, { amount: 0.1 });
  const serviceControls = useAnimation();

  useEffect(() => {
    serviceControls.start(serviceInView ? "show" : "hidden");
  }, [serviceInView, serviceControls]);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  const buttonRef = useRef(null);
  const buttonInView = useInView(buttonRef, { amount: 0.1 });
  const buttonControls = useAnimation();

  useEffect(() => {
    buttonControls.start(
      buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [buttonInView, buttonControls]);

  return (
    <section className="py-30 bg-[#f8f6f1]">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleControls}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#ff0100] font-medium mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold  mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tailored services designed to address your unique challenges and
            unlock new opportunities.
          </p>
        </motion.div>

        <motion.div
          ref={serviceRef}
          initial="hidden"
          animate={serviceControls}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="card-elegant p-8 group hover:border-primary/30 border-gray-200 bg-white border rounded-lg"
            >
              <div className="w-12 h-1 bg-[#ff0100] mb-6 group-hover:w-20 transition-all duration-300" />
              <h3 className="font-serif text-2xl font-semibold  mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <CheckCircle size={16} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href="/services"
                  className="inline-flex gap-2 items-center  font-medium hover:text-accent transition-colors text-[12px]"
                >
                  <p className="group-hover:text-[#ff0100]">Learn More</p>
                  <i className="ri-arrow-right-long-line group-hover:text-[#ff0100]"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={buttonControls}
          transition={{ duration: 0.6 }}
          className="text-center flex justify-center mt-12"
        >
          <Link href="/services">
            <ArrowButton
              label="View All Services"
              direction="right"
              className="ri-arrow-right-long-line"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
