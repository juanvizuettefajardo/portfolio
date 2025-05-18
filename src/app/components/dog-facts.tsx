"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  PawPrintIcon as Paw,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Bone,
} from "lucide-react";

const dogFacts = [
  "Los perros pueden entender hasta 250 palabras y gestos.",
  "El olfato de un perro es 40 veces más potente que el de un humano.",
  "Los perros sueñan igual que los humanos.",
  "Los perros tienen tres párpados.",
  "La nariz de un perro es como su huella digital, única e irrepetible.",
  "Los perros pueden detectar enfermedades como el cáncer y la diabetes.",
  "Los perros pueden oír sonidos a una distancia cuatro veces mayor que los humanos.",
  "Los perros tienen 18 músculos en cada oreja para controlar su movimiento.",
  "Un perro puede aprender más de 100 palabras y señales.",
  "Los perros pueden sentir el estado de ánimo de sus dueños.",
  "Los perros tienen una capa de células reflectantes en sus ojos que les ayuda a ver en la oscuridad.",
  "Los perros sudan a través de las almohadillas de sus patas.",
];

const dogBreeds = [
  {
    name: "Pug",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-09%20at%208.16.03%20AM-ndjtEAMew6TVmuxkgWPoHZDQUln3Em.jpeg",
    fact: "Los pugs son perros de compañía excelentes, conocidos por su lealtad y personalidad juguetona.",
  },
  {
    name: "Labrador Retriever",
    image: "/placeholder.svg?height=300&width=300",
    fact: "Es una de las razas más populares como perro de familia y asistencia.",
  },
  {
    name: "Pastor Alemán",
    image: "/placeholder.svg?height=300&width=300",
    fact: "Excelente perro de trabajo, usado en policía y rescate.",
  },
  {
    name: "Bulldog",
    image: "/placeholder.svg?height=300&width=300",
    fact: "A pesar de su apariencia, son perros muy cariñosos y tranquilos.",
  },
  {
    name: "Golden Retriever",
    image: "/placeholder.svg?height=300&width=300",
    fact: "Conocidos por su inteligencia y temperamento amigable.",
  },
  {
    name: "Beagle",
    image: "/placeholder.svg?height=300&width=300",
    fact: "Tienen un olfato excepcional, usado para detectar alimentos en aduanas.",
  },
];

export default function DogFacts() {
  const [currentFact, setCurrentFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeBreed, setActiveBreed] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const getRandomFact = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dogFacts.length);
      setCurrentFact(dogFacts[randomIndex]);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  const nextBreed = () => {
    setActiveBreed((prev) => (prev === dogBreeds.length - 1 ? 0 : prev + 1));
    setIsFlipped(false);
  };

  const prevBreed = () => {
    setActiveBreed((prev) => (prev === 0 ? dogBreeds.length - 1 : prev - 1));
    setIsFlipped(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    if (diff > 50) {
      nextBreed();
      setIsDragging(false);
    } else if (diff < -50) {
      prevBreed();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="dog-facts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Datos Curiosos de Perros
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
          <p className="max-w-2xl text-amber-700">
            Como amante de los perros, me encanta compartir datos interesantes
            sobre estos maravillosos animales. ¡Descubre algo nuevo sobre los
            mejores amigos del hombre!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-amber-50 p-8 rounded-lg relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center animate-bounce">
              <Bone className="h-6 w-6 text-amber-600" />
            </div>

            <Paw className="absolute top-4 right-4 h-8 w-8 text-amber-200" />

            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              ¿Sabías que...?
            </h3>

            <div className="bg-white p-6 rounded-lg shadow-sm min-h-[150px] flex items-center justify-center mb-6 relative overflow-hidden">
              {isLoading ? (
                <RefreshCw className="h-8 w-8 text-amber-500 animate-spin" />
              ) : (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-amber-500"></div>
                  <p className="text-lg text-amber-700 italic">
                    "{currentFact}"
                  </p>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-300"></div>
                </>
              )}
            </div>

            <Button
              onClick={getRandomFact}
              className="w-full bg-amber-600 hover:bg-amber-700 transform transition-transform hover:scale-105"
              disabled={isLoading}
            >
              <Paw className="mr-2 h-4 w-4" />
              {isLoading ? "Cargando..." : "Otro dato curioso"}
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center lg:text-left">
              Razas Populares
            </h3>

            <div
              className="relative"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="perspective-1000 relative h-80 w-full">
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="relative overflow-hidden rounded-lg aspect-video h-full bg-amber-50">
                      <img
                        src={dogBreeds[activeBreed].image || "/placeholder.svg"}
                        alt={dogBreeds[activeBreed].name}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-amber-600 py-2 px-4">
                        <h4 className="text-white text-xl font-bold">
                          {dogBreeds[activeBreed].name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-amber-100 rounded-lg p-6 flex flex-col justify-center items-center">
                    <h4 className="text-amber-800 text-xl font-bold mb-4">
                      {dogBreeds[activeBreed].name}
                    </h4>
                    <p className="text-amber-700 text-center">
                      {dogBreeds[activeBreed].fact}
                    </p>
                    <Paw className="mt-6 h-10 w-10 text-amber-500" />
                  </div>
                </div>
              </div>

              <Button
                onClick={prevBreed}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 rounded-full p-2 z-10"
                size="icon"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                onClick={nextBreed}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-800 rounded-full p-2 z-10"
                size="icon"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <div className="flex justify-center mt-4 space-x-1">
                {dogBreeds.map((_, key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveBreed(key);
                      setIsFlipped(false);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      activeBreed === key ? "bg-amber-600" : "bg-amber-200"
                    }`}
                    aria-label={`Ver raza ${key + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
