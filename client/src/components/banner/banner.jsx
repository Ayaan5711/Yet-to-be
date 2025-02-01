"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/images/slider/slider-1-1.jpg",
    personImage: "/images/slider/slider-1-2.png",
    title: "Better Technology For Better Health Care",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overview Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
  },
  {
    image: "/images/slider/slider-1-2.jpg",
    personImage: "/images/resources/feature-1-1.png",
    title: "Better Technology For Better Health Care",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overview Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!mounted) return null;

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="banner-one__slide"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="container">
              <motion.img
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                src={slides[currentSlide].personImage}
                alt="Awesome Image"
                className="banner-one__person"
              />
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="banner-one__title banner-one__light-color"
                  >
                    {slides[currentSlide].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="banner-one__text banner-one__light-color"
                  >
                    {slides[currentSlide].text}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Link href="#" className="thm-btn banner-one__btn">
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
      <div className="carousel-btn-block banner-carousel-btn">
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="carousel-btn left-btn"
          onClick={prevSlide}
        >
          <i className="fa fa-angle-left"></i>
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="carousel-btn right-btn"
          onClick={nextSlide}
        >
          <i className="fa fa-angle-right"></i>
        </motion.span>
      </div>
    </div>
  );
}
