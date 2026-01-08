"use client";

import ArrowButton from "@/src/components/Ui/ArrowButton";
import Container from "@/src/components/Ui/Container";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  BarChart3,
  CheckCircle,
  Cog,
  Globe,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const PageHeader = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  return (
    <section>
      <div className="flex flex-col items-center justify-center text-white bg-[url('/images/serviceimg1.png')] bg-cover bg-center bg-no-repeat py-30 h-96">
        <Container>
          <div ref={titleRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={titleControls}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-2 text-center"
            >
              <p className="text-lg">Our Services</p>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)]  font-bold  leading-none text-[#FF0100] font-serif">
                Comprehensive Solutions
              </h2>
              <p className="text-center md:text-lg text-sm max-w-2xl mx-auto">
                Tailored services designed to address your unique challenges and drive sustainable growth.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
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

  const services = [
    {
      icon: Lightbulb,
      title: "Strategic Consulting",
      description:
        "Develop winning strategies that align your business objectives with market opportunities and drive long-term success.",
      features: [
        "Business Strategy Development",
        "Market Entry Planning",
        "Competitive Analysis",
        "Growth Roadmap Creation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description:
        "Accelerate your growth through targeted initiatives that expand market presence and increase revenue.",
      features: [
        "Partnership Strategy",
        "Revenue Optimization",
        "Client Acquisition",
        "Market Expansion",
      ],
    },
    {
      icon: Cog,
      title: "Digital Transformation",
      description:
        "Modernize your operations with cutting-edge technology solutions and innovative digital strategies.",
      features: [
        "Technology Assessment",
        "Digital Strategy Design",
        "Process Automation",
        "Change Management",
      ],
    },
    {
      icon: Globe,
      title: "International Expansion",
      description:
        "Navigate global markets with confidence through our localized expertise and international network.",
      features: [
        "Market Research",
        "Regulatory Compliance",
        "Local Partnerships",
        "Cross-cultural Strategy",
      ],
    },
    {
      icon: Users,
      title: "Organizational Development",
      description:
        "Build high-performing teams and create organizational structures that support your growth ambitions.",
      features: [
        "Leadership Development",
        "Team Building",
        "Culture Transformation",
        "Talent Strategy",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Leverage data-driven insights to optimize performance and make informed strategic decisions.",
      features: [
        "KPI Development",
        "Data Analytics",
        "Performance Dashboards",
        "Predictive Modeling",
      ],
    },
  ];

  return (
    <section className="py-30">
      <Container>
        <motion.div
          ref={valueRef}
          initial="hidden"
          animate={valueControls}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 "
        >
          {services.map((service, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="card-elegant p-8 lg:p-10 group border border-gray-200 rounded-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-[#ff0100]/30 text-white flex items-center justify-center shrink-0 group-hover:bg-[#ff0100] transition-colors duration-300">
                  <service.icon
                    className=" transition-colors duration-300"
                    size={28}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle
                          size={16}
                          className="text-accent shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

const ProcessSection = () => {
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

  const processRef = useRef(null);
  const processInView = useInView(processRef, { amount: 0.1 });
  const processControls = useAnimation();

  useEffect(() => {
    processControls.start(processInView ? "show" : "hidden");
  }, [processInView, processControls]);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { amount: 0.1 });
  const titleControls = useAnimation();

  useEffect(() => {
    titleControls.start(
      titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [titleInView, titleControls]);

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, challenges, and goals through in-depth consultation.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our experts develop a tailored strategy aligned with your objectives and market opportunities.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "We work alongside your team to implement solutions with precision and agility.",
    },
    {
      number: "04",
      title: "Results",
      description:
        "We measure outcomes, optimize performance, and ensure sustainable long-term success.",
    },
  ];

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
          <p className="font-medium mb-3 text-[#ff0100]">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers consistent results across every
            engagement.
          </p>
        </motion.div>

        <motion.div
          ref={processRef}
          initial="hidden"
          animate={processControls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-[#cfa853] mb-4 ">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-semibold  mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

const CTASection = () => {
  const ctaTitleRef = useRef<HTMLDivElement | null>(null);
  const ctaTitleInView = useInView(ctaTitleRef, { amount: 0.1 });
  const ctaTitleControls = useAnimation();

  useEffect(() => {
    ctaTitleControls.start(
      ctaTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [ctaTitleInView, ctaTitleControls]);

  return (
    <section className="hero-gradient section-padding py-30">
      <motion.div
        ref={ctaTitleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={ctaTitleControls}
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

const Services = () => {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
};

export default Services;
