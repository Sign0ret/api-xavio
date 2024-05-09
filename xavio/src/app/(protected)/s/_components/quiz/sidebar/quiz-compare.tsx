import React from 'react'
import { useTransition, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { BookOpenIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const studentsInfo = [
  {
    nombre: "adolfo",
    id: "12345",
  },
  {
    nombre: "Bryan",
    id: "12345",
  },
  {
    nombre: "Jorge",
    id: "12345",
  },
  {
    nombre: "Carlos",
    id: "12345",
  },
  {
    nombre: "Arturo",
    id: "12345",
  },
  {
      nombre: "adolfo",
      id: "12345",
    },
    {
      nombre: "Bryan",
      id: "12345",
    },
    {
      nombre: "Jorge",
      id: "12345",
    },
    {
      nombre: "Carlos",
      id: "12345",
    },
    {
      nombre: "Arturo",
      id: "12345",
    },
    {
      nombre: "adolfo",
      id: "12345",
    },
    {
      nombre: "Bryan",
      id: "12345",
    },
    {
      nombre: "Jorge",
      id: "12345",
    },
    {
      nombre: "Carlos",
      id: "12345",
    },
    {
      nombre: "Arturo",
      id: "12345",
    },
  // Los demás mensajes seguirían aquí con la misma estructura
];

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

function QuizCompare({ params , quizDescription}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <Collapsible>
        <div className="flex flex-row justify-between items-center ">
          <CollapsibleTrigger className="flex flex-row mt-5" >
            <p>Submits</p>
            {/* Icono de despliegue */}
            <span><ChevronDownIcon className="w-4 h-4"/></span>
          </CollapsibleTrigger>
          <button className="flex items-center text-gray-450 font-bold mt-4 rounded">
            <BookOpenIcon className="mr-2" />
            Resources
          </button>
        </div>
        
      <CollapsibleContent>
          {/* Paticipantes */}
          {studentsInfo.map((student, index) => (
            <div 
              key={`${student.id}-s`} 
              className="rounded-md border px-4 py-3 my-2 font-mono text-sm flex flex-row justify-between items-center hover:bg-zinc-600 transition-colors duration-300 bg-opacity-10"
            >
              <div className="flex flex-row items-center justify-start">
                <Avatar>
                    <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <p className="mx-4">{student.nombre}</p>
              </div>
              <p>80/100 pts</p>
              <Button className='bg-zinc-900 hover:bg-black transition-colors duration-300 bg-opacity-50'>
                <Link href='#'>compare</Link>
              </Button>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default QuizCompare