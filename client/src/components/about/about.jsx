"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const features = [
  ["Medical Quality", "Modern Technology"],
  ["Natural Environment", "Experienced Doctors"],
];

const images = [
  {
    src: "/images/resources/about-1-1.jpg",
    alt: "Medical Facility",
    width: 500,
    height: 400,
    className: "col-lg-7 col-md-7 col-sm-7",
  },
  {
    src: "/images/resources/about-1-2.jpg",
    alt: "Medical Equipment",
    width: 300,
    height: 200,
    className: "col-lg-5 col-md-5 col-sm-5",
  },
  {
    src: "/images/resources/about-1-3.jpg",
    alt: "Medical Staff",
    width: 300,
    height: 200,
    className: "col-lg-5 col-md-5 col-sm-5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section className="about-one">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <motion.div
              className="about-one__content-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h3 className="about-one__title" variants={itemVariants}>
                About Us
              </motion.h3>
              <motion.p className="about-one__tag-line" variants={itemVariants}>
                Better health care with efficient cost is the main focus of our
                hospital.
              </motion.p>
              <motion.p className="about-one__text" variants={itemVariants}>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution.
              </motion.p>
              <motion.p className="about-one__text" variants={itemVariants}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </motion.p>

              <motion.div className="row" variants={containerVariants}>
                {features.map((column, columnIndex) => (
                  <div key={columnIndex} className="col-lg-6">
                    <motion.ul
                      className="about-one__features"
                      variants={containerVariants}
                    >
                      {column.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="about-one__features-item"
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/about" className="thm-btn about-one__btn">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="about-one__image-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="row no-gutters">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className={image.className}
                    variants={imageVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="about-one__image">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        layout="responsive"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
