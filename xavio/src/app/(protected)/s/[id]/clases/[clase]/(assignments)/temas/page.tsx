import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    clase: string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Temas de ${params.clase}`
  }
} 
  
export default function Temas( { params }: Props) {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-full w-full">
      <p>Estos son los temas de la clase {params.clase}</p>
      {/* Aqui va la sidebar de Bloques */}
    </main>
  );
}