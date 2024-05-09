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
    title: `Quiz de ${params.clase}`
  }
} 
  
export default function QuizzesClase( { params }: Props) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>{params.id}, bienvenido a tus quizzes de {params.clase}</p>
    </main>
  );
}