"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">

        <motion.h1
          initial={{ opacity:0,y:50 }}
          animate={{ opacity:1,y:0 }}
          className="text-6xl font-bold max-w-5xl"
        >
          COLLEGE ADVENTIST STUDENTS ORGANIZATION
        </motion.h1>

        <h2 className="text-3xl mt-4 text-yellow-400">
          ARISE AND SHINE
        </h2>

        <p className="max-w-2xl mt-6 text-lg">
          Preparing Students for Service and
          Christ's Soon Return
        </p>

        <div className="flex gap-4 mt-8">

          <button className="bg-yellow-500 px-8 py-3 rounded-xl">
            Join CASO
          </button>

          <button className="border border-white px-8 py-3 rounded-xl">
            Explore Zones
          </button>

        </div>

      </div>
    </section>
  );
}