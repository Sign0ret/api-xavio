import Link from 'next/link'
import React from 'react'

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

function QuizData({ params , quizDescription}: Props) {
  return (
    <div>
        <div className="flex flex-row justify-between mb-5">
            <p>Duration: 15:30 min</p>
            <p>10 questions</p>
            <p>100pts</p>
            
        </div>
    </div>
  )
}

export default QuizData