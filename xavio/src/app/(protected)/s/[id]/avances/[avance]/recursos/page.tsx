import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    avance: string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Avance ${params.avance}`
  }
} 
  
export default function Recursos( { params }: Props) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Estos son los recursos del avance {params.avance}</p>
      {/* Aqui va la sidebar de Bloques */}
    </main>
  );
}