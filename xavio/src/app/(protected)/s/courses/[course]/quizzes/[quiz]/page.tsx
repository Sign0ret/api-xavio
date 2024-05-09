import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    course: string,
    quiz: string,
 }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Quiz de ${params.quiz}`
  }
} 

export default function QuizClase( { params }: Props) {
 
  return (        
    <div className="text-white">
      <p>Haz Click en iniciar para comenzar con tu Quiz.</p>

    </div>
  );
}