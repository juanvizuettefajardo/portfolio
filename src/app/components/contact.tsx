"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  // Enlaces a redes sociales
  const socialLinks = [
    {
      name: "github",
      icon: Github,
      url: "https://github.com/juanvizuettefajardo",
    },
    { name: "twitter", icon: Twitter, url: "https://x.com/VizuetteJuan" },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-amber-50 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
          <p className="max-w-2xl text-amber-700">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría
            saber de ti! Completa el formulario o utiliza los datos de contacto
            a continuación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              Envíame un mensaje
            </h3>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 animate-pulse">
                ¡Mensaje enviado con éxito! Me pondré en contacto contigo
                pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 animate-pulse">
                Hubo un error al enviar el mensaje. Por favor, intenta
                nuevamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-amber-800 mb-1"
                >
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full transition-all focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-800 mb-1"
                >
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full transition-all focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-amber-800 mb-1"
                >
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                  required
                  className="w-full transition-all focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amber-800 mb-1"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  required
                  className="w-full transition-all focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 transform transition-transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              Información de contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start transform transition-transform hover:translate-x-2">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">
                    Correo electrónico
                  </h4>
                  <a
                    href="mailto:juanvizuette58@gmail.com"
                    className="text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    juanvizuette58@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start transform transition-transform hover:translate-x-2">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Teléfono</h4>
                  <a
                    href="tel:+573177875970"
                    className="text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    +573177875970
                  </a>
                </div>
              </div>

              <div className="flex items-start transform transition-transform hover:translate-x-2">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Ubicación</h4>
                  <p className="text-amber-600">Pasto, Nariño, Colombia</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Sígueme en redes sociales
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-all transform hover:scale-110"
                    aria-label={`Visita mi perfil de ${social.name}`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
