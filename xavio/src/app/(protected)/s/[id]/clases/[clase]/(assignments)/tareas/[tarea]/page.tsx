"use client";
import React, { useState } from 'react';

type Props = {
  params: { 
    id: string,
    avance: string,
    tarea: string,
    completado: boolean,
    calificacion?: number // Opcional, ya que solo estará presente si completado es true
 }
};



const tareaInfo = {
  id: "tarea1",
  question: "What is the capital of France?",
  weight: 1, // Importance of the question
  options: [
    { id: "option1", label: "Paris", isCorrect: true },
    { id: "option2", label: "London", isCorrect: false },
    { id: "option3", label: "Berlin", isCorrect: false }
  ]
}

export default function QuizClase({ params }: Props) {
  const [calificacion, setCalificacion] = useState(params.calificacion || null);

  return (
    <div>
      <div
        key={tareaInfo.id}
        className="relative inset-x-0 max-w-2xl mx-auto z-50 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] lg:min-w-[900px] h-full p-8 my-4 overflow-y-auto max-h-[90vh] rounded-3xl bg-slate-800 opacity-80"
      >
        <div className="flex justify-end mb-4 text-right">
          <h1 className="text-white">
            Calificacion: {params.completado ? (calificacion !== null ? `${calificacion}/100` : '--/100') : '--/100'}
          </h1>
        </div>
        <div className="space-y-4">
          <h1 className="text-white">Respuesta por entrada de texto o URL</h1>
          <div className="flex items-center space-x-4">
            <textarea
              className="w-full h-32 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline bg-white"
              placeholder="Escribe aquí tu respuesta"
            ></textarea>
          </div>
          <div>
            <h1 className="text-white">Archivos de la entrega</h1>
            <input type="file" className="border rounded-lg p-2 bg-white" />
          </div>
          <div>
            <h1 className="text-white">Comentarios de la entrega</h1>
            <input
              type="text"
              className="w-[40%] p-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
              placeholder="Escribe aquí tu comentario"
            />
          </div>
          <div className="flex justify-end">
            <button className="hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-3xl bg-slate-900">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
