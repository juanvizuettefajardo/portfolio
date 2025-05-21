"use client";

import React, { useState, useEffect } from "react";
import { Quote, Send, Star, X, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  // Inicializar con datos de localStorage si existen
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("testimonials");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    content: "",
    rating: 5,
  });

  // Guardar en localStorage cada vez que testimonials cambie
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que no estén vacíos
    if (
      formData.name.trim() === "" ||
      formData.position.trim() === "" ||
      formData.content.trim() === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: formData.name,
      position: formData.position,
      content: formData.content,
      rating: formData.rating,
    };

    setTestimonials((prev) => [...prev, newTestimonial]);

    setFormData({
      name: "",
      position: "",
      content: "",
      rating: 5,
    });

    setShowForm(false);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-amber-500 mb-6"></div>
          <p className="max-w-2xl text-amber-700">
            ¿Has compartido algún momento conmigo? Tu opinión puede inspirar a
            otros. ¡Déjame tu testimonio!
          </p>

          <Button
            onClick={() => setShowForm(!showForm)}
            className="mt-6 bg-amber-600 hover:bg-amber-700 transform transition-transform hover:scale-105"
          >
            {showForm ? "Cancelar" : "Añadir testimonio"}
          </Button>
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto mb-16 bg-amber-50 p-8 rounded-lg shadow-md relative animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-amber-600 hover:text-amber-800"
              aria-label="Cerrar formulario"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold text-amber-800 mb-4">
              Comparte tu experiencia
            </h3>

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
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-amber-800 mb-1"
                >
                  Relación o contexto
                </label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Compañero, amigo, familiar, etc."
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-amber-800 mb-1"
                >
                  Tu testimonio
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Comparte tu experiencia o impresion..."
                  rows={4}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Calificación
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= formData.rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-amber-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                <Send className="mr-2 h-4 w-4" /> Enviar testimonio
              </Button>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-amber-50 p-6 rounded-lg relative transform transition-all hover:shadow-lg hover:-translate-y-1 animate-fadeIn"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-200 opacity-50" />

              <p className="text-amber-700 mb-6 relative z-10">
                {testimonial.content}
              </p>

              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-amber-500 fill-amber-500"
                        : "text-amber-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-amber-200 flex items-center justify-center">
                  <User className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-amber-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
