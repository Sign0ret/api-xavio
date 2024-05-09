import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    course: string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Quiz de ${params.course}`
  }
} 
  
export default function QuizzesClase( { params }: Props) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>bienvenido a tus quizzes de {params.course}</p>
    </main>
  );
}