"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { Button } from '@/components/ui/button';

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

type Props = {
    params: { 
        id: string,
        clase: string,
        quiz: string,
    }
};

export function QuizDo({ params }: Props) {
    return (
        <div className='max-h-[84vh] overflow-y-auto pb-20'>
                <h2 className="mb-4 text-4xl font-bold text-white">Quiz {params.quiz}</h2>
                    {quizInfo.map((question, qIndex) => (
                        <section key={question.id} className="relative inset-x-0  mx-auto z-50 w-full min-w-[85vw] lg:min-w-[55vw] rounded-md bg-gray-200 p-8 my-4 overflow-y-auto max-h-[80vh]"> 
                        <h3 className="mb-8 text-3xl font-semibold">Question {qIndex+1}</h3>
                            <p className="mb-8 text-lg">{question.question}</p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 z-100">
                                {question.options?.map((option, oIndex) => (
                                    <>
                                    <input className="h-6 w-6" id={`option${oIndex}`} name={`question${qIndex}`} type="radio" />
                                    <label className="text-xl" htmlFor="option1">
                                        {option.label}
                                    </label>
                                    </>
                                ))}
                                </div>
                            </div>
                        </section>
                    ))}
                <Button className="relative inset-x-0  mx-auto z-50 hover:bg-zinc-700 transition-colors duration-300">
                    Submit
                </Button>
                </div>
    );
}
