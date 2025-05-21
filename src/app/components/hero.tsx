"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Bone, PawPrint } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <PawPrint
            key={i}
            className="absolute text-amber-500 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Creando experiencias digitales{" "}
              <span className="text-amber-600 relative">
                amigables
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg text-amber-700 max-w-lg">
              Especialista en diseño de interfaces y desarrollo web. Amante de
              los perros y el buen código.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="bg-amber-600 hover:bg-amber-700 transform transition-smooth hover:scale-105">
                  Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float-improved">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-white overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/profile-with-dog.png"
                    alt="Profile with my dog"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>

              {/* Huesos animados alrededor del círculo */}
              {Array.from({ length: 5 }).map((_, i) => (
                <Bone
                  key={i}
                  className="absolute text-amber-600 animate-float"
                  style={{
                    left: `${50 + 45 * Math.cos((2 * Math.PI * i) / 5)}%`,
                    top: `${50 + 45 * Math.sin((2 * Math.PI * i) / 5)}%`,
                    animationDelay: `${i * 0.5}s`,
                    width: "24px",
                    height: "24px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
