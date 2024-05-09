import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    clase: string,
    tema: string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Tema ${params.tema}`
  }
} 
  
export default function Tema( { params }: Props) {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Este es el tema {params.tema} de la clase {params.clase}</p>
      {/* Aqui va la sidebar de Bloques */}
    </main>
  );
}