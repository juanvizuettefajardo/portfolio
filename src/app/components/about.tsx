import React from "react";
import { PawPrintIcon as Paw, Code, Palette, Lightbulb } from "lucide-react";
import Image from "next/image";

const skills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "HTML/CSS", level: 75 },
  { name: "C++", level: 70 },
];

export default function about() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
          <p className="max-w-2xl text-amber-700">
            Apasionado por el diseño de interfaces y el desarrollo web, con un
            enfoque en crear experiencias digitales intuitivas y atractivas.
            Amante de los perros y defensor de las buenas prácticas de
            programación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 -z-10 bg-amber-100 rounded-lg transform rotate-3 transition-transform group-hover:rotate-0 duration-300"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-md transition-transform group-hover:translate-y-1 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-amber-50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-09%20at%208.05.08%20AM%20%282%29-MzRwlUVsn2apwY5TM50SOcSERyrRXU.jpeg"
                    alt="Mi foto"
                    width={180}
                    height={180}
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-amber-50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-09%20at%208.05.09%20AM-xrjDfFQPdNZ0Fb6Vord92X9mzbrT9y.jpeg"
                    alt="Con mi perrita"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    width={180}
                    height={180}
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-amber-50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-09%20at%208.05.08%20AM%20%281%29-5coUb89BCzddxrKZkaFHzuiuu4nS8P.jpeg"
                    alt="Mi perrita durmiendo"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    width={180}
                    height={180}
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden relative bg-amber-50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-09%20at%208.16.03%20AM-ndjtEAMew6TVmuxkgWPoHZDQUln3Em.jpeg"
                    alt="En memoria de mi perrita"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    width={180}
                    height={180}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-40">
                      <svg
                        width="120"
                        height="80"
                        viewBox="0 0 120 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="filter drop-shadow-lg"
                      >
                        <path
                          d="M60 0C60 0 45 20 20 25C20 25 30 45 10 60C10 60 35 65 45 80C45 80 75 65 85 80C85 80 95 65 120 60C120 60 100 45 110 25C110 25 85 20 70 0C70 0 65 10 60 0Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-amber-100 rounded-full px-2 py-1 text-xs font-semibold text-amber-800 opacity-80">
                      En memoria ❤️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-800">¿Quién soy?</h3>
              <p className="text-amber-700">
                Soy estudiante de Ingeniería de Software con enfoque en diseño
                de interfaces. Me apasiona crear experiencias digitales
                funcionales, accesibles y estéticamente agradables. Aunque aún
                me encuentro en proceso de formación, me esfuerzo por entender
                cómo las personas interactúan con la tecnología y cómo hacer que
                esa interacción sea clara, útil y agradable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <Code className="h-5 w-5 text-amber-600" />
                  <h4 className="font-semibold text-amber-800">Desarrollo</h4>
                </div>
                <p className="text-sm text-amber-700">
                  Formo parte tanto del mundo del frontend como del backend.
                  Trabajo principalmente con tecnologías como Next.js, React y
                  TypeScript.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <Palette className="h-5 w-5 text-amber-600" />
                  <h4 className="font-semibold text-amber-800">Diseño</h4>
                </div>
                <p className="text-sm text-amber-700">
                  Exploro el diseño como una forma de conectar personas con
                  soluciones digitales. Me inspiran los sistemas de diseño
                  limpios.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  <h4 className="font-semibold text-amber-800">Soluciones</h4>
                </div>
                <p className="text-sm text-amber-700">
                  Me gusta resolver problemas. Disfruto analizando situaciones
                  complejas y buscando formas de simplificarlas mediante
                  soluciones digitales elegantes.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <Paw className="h-5 w-5 text-amber-600" />
                  <h4 className="font-semibold text-amber-800">
                    Amante de los perros
                  </h4>
                </div>
                <p className="text-sm text-amber-700">
                  Los perros han sido una constante en mi vida. Crecí junto a mi
                  perrita Princesa y ahora convivo con Luna y Lulu, ambas
                  adoptadas.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-800">
                Mis habilidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full font-medium text-sm hover:bg-amber-200 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <p className="text-amber-700 italic mt-2">
                Dominio de múltiples lenguajes de programación y tecnologías
                para crear soluciones completas y eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
