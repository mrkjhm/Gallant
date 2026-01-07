"use client";

import ArrowButton from "@/src/components/Ui/ArrowButton";
import Container from "@/src/components/Ui/Container";
import { Input } from "@/src/components/Ui/input";
import { Textarea } from "@/src/components/Ui/textArea";
import { motion, useAnimation, useInView } from "framer-motion";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business Avenue, Suite 100", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@vantagegroup.com", "support@vantagegroup.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-[#aa0202] text-white flex items-center justify-center shrink-0">
            <item.icon className="text-primary-foreground" size={20} />
          </div>
          <div>
            <h3 className="font-serif font-semibold  mb-2">{item.title}</h3>
            {item.details.map((detail, dIndex) => (
              <p key={dIndex} className="text-muted-foreground text-sm">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium  mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className=""
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium  mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className=""
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium  mb-2">
            Company
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className=""
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium  mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="How can we help?"
            className=""
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium  mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project or inquiry..."
          className=" min-h-[150px]"
        />
      </div>
      <ArrowButton
        label="Submit"
        direction="up-right"
        className="ri-arrow-right-up-long-line"
      />
    </form>
  );
};

const ContactSection = () => {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { amount: 0.1 });
  const leftControls = useAnimation();

  useEffect(() => {
    leftControls.start(
      leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
    );
  }, [leftInView, leftControls]);

  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { amount: 0.1 });
  const rightControls = useAnimation();

  useEffect(() => {
    rightControls.start(
      rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
    );
  }, [rightInView, rightControls]);

  return (
    <section className="py-30">
      <div className=" overflow-hidden md:overflow-visible">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -100 }}
            animate={leftControls}
            transition={{ duration: 0.6 }}
          >
            <p className=" font-medium mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold  mb-6">
              We're Here to Help
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you have a question about our services, need a
              consultation, or want to discuss a partnership opportunity, our
              team is ready to assist you.
            </p>
            <ContactInfo />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 100 }}
            animate={rightControls}
            transition={{ duration: 0.6 }}
            className="card-elegant p-8 lg:p-10 border rounded-lg border-gray-300"
          >
            <h3 className="font-serif text-2xl font-semibold  mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { amount: 0.3 });
  const mapControls = useAnimation();

  useEffect(() => {
    mapControls.start(mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 });
  }, [mapInView, mapControls]);

  return (
    <section className="bg-muted overflow-hidden">
      <motion.div
        ref={mapRef}
        initial={{ opacity: 0, y: 30 }}
        animate={mapControls}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7723.658615035051!2d121.04265873323682!3d14.55175178114507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f1580fffd5%3A0x9ed9ec11067bc57f!2sMyOffice%20Bonifacio%20Global%20City!5e0!3m2!1sen!2sph!4v1767340154466!5m2!1sen!2sph"
          width="800"
          height="400"
          loading="lazy"
          className="w-full"
        ></iframe>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { amount: 0.1 });
  const headerControls = useAnimation();

  useEffect(() => {
    headerControls.start(
      headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
    );
  }, [headerInView, headerControls]);
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white bg-[url('/images/serviceimg1.png')] bg-center py-30">
        <Container>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerControls}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <p>Contact Us</p>
            <h1 className="text-5xl  font-bold  leading-none text-[#FF0100] ">
              Let's Start a Conversation
            </h1>
            <p>
              Have a question or want to discuss a project? We'd love to hear
              from you.
            </p>
          </motion.div>
        </Container>
      </div>
      <Container>
        <ContactSection />
      </Container>
      <MapSection />
    </>
  );
};

export default Contact;
