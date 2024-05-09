import React from 'react'
import QuizInstructions from './quiz_instructions'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDownIcon, MessageCircleIcon } from '@/components/icons';

type Props = {
  params: {
    id: string;
    clase: string;
    quiz: string;
  };
  quizDescription: {
    topic: string,
    description: string,
    lastUpdated: string,
    contributor: string,
  };
};

function QuizRevision({ params , quizDescription}: Props) {
  return (

    <div>
      <div className="flex flex-row justify-between mb-5">
        <p>Quizz Time: 15:30 min</p>
        <p>8/10 questions</p>
        <p>80/100pts</p>
      </div>
      <div className='flex flex-row justify-left items-center pb-5'>
        <MessageCircleIcon className='w-4 h-4 mr-2' />
        <p>comentario del profesor</p>
      </div>
      <Collapsible>
        <CollapsibleTrigger className='flex flex-row justify-left items-center'>
          <p>Instructions</p>
          <ChevronsUpDownIcon className='h-4 w-4' />
        </CollapsibleTrigger>
        <CollapsibleContent className='bg-zinc-400 bg-opacity-10 rounded-md p-2'>
          <QuizInstructions params={params} quizDescription={quizDescription}/>
        </CollapsibleContent>
      </Collapsible>

    </div>
  )
}

export default QuizRevision