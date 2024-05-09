import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    avance: string,
    recurso: string
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Recurso ${params.recurso}`
  }
} 
  
export default function Recurso( { params }: Props) { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Recurso {params.recurso} del track de avance {params.avance}</p>
      {/* Aqui va la sidebar de Bloques */}
    </main>
  );
}