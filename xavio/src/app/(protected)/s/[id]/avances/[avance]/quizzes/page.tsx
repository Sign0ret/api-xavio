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
    title: `Quizzes ${params.avance}`
  }
} 
  
export default function QuizAvance( { params }: Props) {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{params.id}, bienvenido a tus quizzes de {params.avance}</p>
      
    </main>
  );
}