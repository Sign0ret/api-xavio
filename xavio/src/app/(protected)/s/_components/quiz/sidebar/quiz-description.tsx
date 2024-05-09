import Link from 'next/link'
import React from 'react'
import QuizInstructions from './quiz-instructions';
import QuizData from './quiz-data';

type Props = {
    params: {
      course: string;
      quiz: string;
    };
    quizDescription: {
      topic: string,
      description: string,
      lastUpdated: string,
      contributor: string,
    };
  };

function QuizDescription({ params , quizDescription}: Props) {
  return (
    <div>
        <QuizData params={params} quizDescription={quizDescription}/>
        <QuizInstructions params={params} quizDescription={quizDescription}/>
        <Link
          href={`/s/courses/${params.course}/quizzes/${params.quiz}/doing`}
          className="flex items-center border-2 border-white text-white font-bold mt-4 rounded-lg px-4 py-2"
        >
          Begin quiz
        </Link>
    </div>
  )
}

export default QuizDescription