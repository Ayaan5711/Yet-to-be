"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  Brain,
  Eye,
  Heart,
  BabyIcon as Kidney,
  SmileIcon as Tooth,
  Baby,
} from "lucide-react";



const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    href: "/services/cardiology",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    href: "/services/neurology",
  },
  {
    icon: Tooth,
    title: "Dental Care",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    href: "/services/dental-care",
  },
  {
    icon: Eye,
    title: "Eyes Care",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    href: "/services/eyes-care",
  },
  {
    icon: Kidney,
    title: "Hepatology",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    href: "/services/hepatology",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    href: "/services/pediatrics",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="service-one thm-gray-bg">
      <div className="container">
        <motion.div
          className="block-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="block-title__title" variants={itemVariants}>
            Our Departments
          </motion.h2>
          <motion.p className="block-title__text" variants={itemVariants}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt uttom <br /> labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida.
          </motion.p>
        </motion.div>

        <motion.div
          className="row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12"
                variants={itemVariants}
              >
                <motion.div
                  className="service-one__single"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="service-one__icon"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Icon className="h-12 w-12" />
                  </motion.div>
                  <div className="service-one__content">
                    <h3 className="service-one__title">
                      <Link href={service.href}>{service.title}</Link>
                    </h3>
                    <p className="service-one__text">{service.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
