import React from 'react';

import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    avance: string,
    quiz: string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Quiz de ${params.quiz}`
  }
} 
  
export default function QuizAvance( { params }: Props) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{params.id}, listo para el quiz {params.quiz} de {params.avance}</p>
      
    </main>
  );
}