'use client'
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { 
  FileQuestionIcon,
  CheckIcon,
  ClipboardIcon,
  BookOpenIcon,
} from '@/components/icons';
import QuizDescription from './sidebar/quiz-description';
import QuizDoing from './sidebar/quiz-doing';
import QuizRevision from './sidebar/quiz-revision';
import QuizCompare from './sidebar/quiz-compare';

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

export function QuizSideCard({ params, quizDescription }: Props) {
  
  const [value, setValue] = React.useState('description');
  let content;
  switch (value) {
    case 'description':
      content = <QuizDescription params={params} quizDescription={quizDescription}/>;
      break;
    case 'doing':
      content = <QuizDoing params={params} quizDescription={quizDescription}/>;
      break;
    case 'revision':
      content = <QuizRevision params={params} quizDescription={quizDescription}/>;
      break;
      case 'compare':
      content = <QuizCompare params={params} quizDescription={quizDescription}/>;
      break;
    default:
      content = <QuizDescription params={params} quizDescription={quizDescription}/>;
      break;
  }

  return (
    <section className="w-full rounded-md bg-zinc-700 p-8 my-4 overflow-y-auto max-h-[80vh] text-white"> 
      <div className='flex flex-row justify-between items-center mb-8'>
        <h3 className="text-3xl font-semibold">Quiz {quizDescription.topic}</h3>
        <ToggleGroup
                type="single" 
                value={value}
                onValueChange={(value) => {
                  if (value) setValue(value);
                }}
              >
                <ToggleGroupItem value="description"><ClipboardIcon className="h-4 w-4" /></ToggleGroupItem>
                <ToggleGroupItem value="doing"><BookOpenIcon className='h-4 w-4' /></ToggleGroupItem>
                <ToggleGroupItem value="revision"><CheckIcon className='h-4 w-4' /></ToggleGroupItem>
                <ToggleGroupItem value="compare"><FileQuestionIcon className='h-4 w-4' /></ToggleGroupItem>              
              </ToggleGroup>
      </div>
        <div>
          {content}
        </div>
    </section>
  );
}
