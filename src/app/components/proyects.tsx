"use client";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Generador JMVF",
    description:
      "Aplicación web para generar y administrar contraseñas seguras, protegiendo tus cuentas y evitando olvidarlas.",
    image: "/images/generadorJMVF.png",
    tags: ["Next.js", "React", "Tailwind CSS", "LocalStorage"],
    demoUrl: "https://generador-jmvf.vercel.app/",
    githubUrl: "",
    showDemoOnly: true,
  },
  {
    id: 2,
    title: "Actor Repository",
    description:
      "Repositorio de actores que permite explorar información detallada sobre diferentes actores y sus trabajos en la industria del cine.",
    image: "/images/github-logo.png",
    tags: ["React", "JavaScript", "API Integration"],
    demoUrl: "#",
    githubUrl: "https://github.com/juanvizuettefajardo/Actor-Repository",
    showGithubOnly: true,
  },
  {
    id: 3,
    title: "My App",
    description:
      "Aplicación personal desarrollada como proyecto de aprendizaje, implementando diversas funcionalidades y prácticas de desarrollo moderno.",
    image: "/images/github-logo.png",
    tags: ["React", "JavaScript", "Web Development"],
    demoUrl: "#",
    githubUrl: "https://github.com/juanvizuettefajardo/my-app",
    showGithubOnly: true,
  },
  {
    id: 4,
    title: "Para Mamita",
    description:
      "Sitio web dedicado especialmente para mamá, con mensajes personalizados y contenido especial para celebrar su importancia.",
    image: "/images/mothers-day.png",
    tags: ["Next.js", "React", "CSS"],
    demoUrl: "https://para-mamita.vercel.app/",
    githubUrl: "",
    showDemoOnly: true,
  },
  {
    id: 5,
    title: "Un Loggeo Game Easy",
    description:
      "Sistema de inicio de sesión simplificado con interfaz amigable, diseñado para ser intuitivo y fácil de usar.",
    image: "/images/login-screen.png",
    tags: ["JavaScript", "HTML", "CSS", "Authentication"],
    demoUrl: "https://un-loggeo-game-easy.vercel.app/",
    githubUrl: "",
    showDemoOnly: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-amber-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          >
            🐾
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Mis Proyectos
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-2 duration-300 relative group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={350}
                  height={350}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-amber-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-2">
                  {!project.showGithubOnly && project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center py-2 px-4 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors w-full"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Link>
                  )}

                  {!project.showDemoOnly && project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center py-2 px-4 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors w-full"
                    >
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
