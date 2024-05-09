import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    clase: string,
    quiz: string,
 }
};

const quizDescription = {
  topic: "Algebra",
  description: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.",
  lastUpdated: "2024-03-30T10:20:00",
  contributor: "adolfo"
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Quiz de ${params.quiz}`
  }
} 

const quizInfo = [
  {
    id: "question1",
    question: "What is the capital of France?",
    weight: 1, // Importance of the question
    options: [
      { id: "option1", label: "Paris", isCorrect: true },
      { id: "option2", label: "London", isCorrect: false },
      { id: "option3", label: "Berlin", isCorrect: false }
    ]
  },
  {
    id: "question1",
    question: "What is the capital of France?",
    weight: 1, // Importance of the question
    options: [
      { id: "option1", label: "Paris", isCorrect: true },
      { id: "option2", label: "London", isCorrect: false },
      { id: "option3", label: "Berlin", isCorrect: false }
    ]
  },
  {
    id: "question1",
    question: "What is the capital of France?",
    weight: 1, // Importance of the question
    options: [
      { id: "option1", label: "Paris", isCorrect: true },
      { id: "option2", label: "London", isCorrect: false },
      { id: "option3", label: "Berlin", isCorrect: false }
    ]
  },
  {
    id: "question1",
    question: "What is the capital of France?",
    weight: 1, // Importance of the question
    options: [
      { id: "option1", label: "Paris", isCorrect: true },
      { id: "option2", label: "London", isCorrect: false },
      { id: "option3", label: "Berlin", isCorrect: false }
    ]
  }
];

  
export default function QuizClase( { params }: Props) {
 
  return (        
    <div className="text-white">
      <p>Haz Click en iniciar para comenzar con tu Quiz.</p>

    </div>
  );
}