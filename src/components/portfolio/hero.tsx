
"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden pt-20 md:flex-row"
    >
      {/* Background Split Section */}
      <div className="absolute inset-0 -z-10 flex">
        {/* Left Yellow Background */}
        <div className="h-full w-1/2 bg-[#f5b813]" />

        {/* Right Image Background */}
        <div className="relative h-full w-1/2 overflow-hidden bg-gray-200">
          <img
            src="/banner.jfif"
            alt="Portfolio hero background"
            className="absolute inset-0 h-full w-full object-contain object-top md:object-cover md:object-[center_25%]"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Hero Content Section */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-12 sm:px-8">
        <div className="max-w-lg text-white">
          {/* Main Heading */}
          <h1 className="mb-3 text-4xl font-black uppercase tracking-wider sm:text-5xl md:text-6xl">
            LET&apos;S BEGIN
          </h1>

          {/* Typewriter Text */}
          <div className="mb-3 flex h-8 items-center text-xl font-bold uppercase tracking-wide text-black sm:text-2xl">
            <Typewriter
              options={{
                strings: [
                  "WEB DEVELOPER",
                  "FULL STACK DEVELOPER",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          {/* Description */}
          <p className="mb-8 text-xs font-medium tracking-wide text-gray-800 sm:text-sm">
            Building modern, responsive, and user-friendly web experiences.
          </p>

          {/* Premium Action Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Hire Me Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md border-2 border-black bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] active:translate-y-0"
            >
              {/* Sliding White Background */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Hire Me
              </span>

              <span className="relative z-10 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
                →
              </span>
            </a>

            {/* Get CV Button */}
            <a
              href="/cv.pdf"
              download="Jubail-CV.pdf"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md border-2 border-black bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] active:translate-y-0"
            >
              {/* Sliding Black Background */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get CV
              </span>

              <Download
                size={18}
                className="relative z-10 transition-all duration-300 group-hover:translate-y-1 group-hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
