import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    id: 1,
    position: "Explorador digital autodidacta",
    company: "",
    period: "2020 – 2024",
    description:
      "Descubrí el desarrollo de software en cuarentena y desde entonces me he formado con recursos online, aprendiendo sobre HTML, CSS, Figma y fundamentos de diseño UI. He desarrollado interfaces sencillas, prototipos y conceptos de páginas enfocadas en temas que me motivan como la adopción de mascotas o la educación digital.",
  },
  {
    id: 2,
    position: 'Bitácora personal "Códigos con sentido"',
    company: "",
    period: "2024 – 2025",
    description:
      "Espacio digital donde comparto aprendizajes como estudiante de Ingeniería de Software. Incluye ejercicios, fragmentos de código y experimentos visuales en Figma. Es una forma de documentar mi evolución y de crear algo propio mientras aprendo.",
  },
];

const education = [
  {
    id: 1,
    degree: "Ingeniería de Software",
    institution: "Universidad Cooperativa de Colombia – Pasto",
    period: "2023 – 2025",
    description:
      "Formación técnica y conceptual en desarrollo de software, lógica de programación, estructuras de datos, patrones y diseño de interfaces. A medida que avanzo en la carrera, he descubierto que mi interés está más enfocado en cómo las personas interactúan con la tecnología que en profundizar únicamente en el código.",
  },
  {
    id: 2,
    degree: "Bachiller Académico",
    institution: "Colegio San Felipe Neri – Pasto",
    period: "Graduado en 2021",
    description:
      "Durante esta etapa desarrollé valores fundamentales, participé en actividades deportivas y descubrí la importancia de la constancia. Allí comenzó mi interés por aprender de manera independiente.",
  },
  {
    id: 3,
    degree: "Cursos complementarios",
    institution: "Varios",
    period: "2020 – 2024",
    description:
      "He tomado talleres y cursos enfocados en bienestar, deportes y herramientas digitales. Desde 2023 he profundizado por mi cuenta en temas de diseño UI/UX y desarrollo web básico, motivado por mi carrera universitaria y mi deseo de aportar con soluciones digitales enfocadas al bienestar animal.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Experiencia
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
          <p className="max-w-2xl text-amber-700">
            Mi camino en el diseño y desarrollo comenzó durante la pandemia,
            cuando descubrí el mundo del software y el potencial que tiene para
            transformar ideas en soluciones reales. Desde entonces, me he
            enfocado en aprender, practicar y construir una base sólida desde lo
            académico y lo personal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-amber-800">
                Iniciativas y Proyectos Personales
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job) => (
                <div
                  key={job.id}
                  className="relative pl-8 border-l-2 border-amber-200"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-amber-800">
                      {job.position}
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-amber-600">{job.company}</p>
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-amber-700">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-amber-800">
                Formación Académica
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="relative pl-8 border-l-2 border-amber-200"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-amber-800">
                      {edu.degree}
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-amber-600">{edu.institution}</p>
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-amber-700">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
