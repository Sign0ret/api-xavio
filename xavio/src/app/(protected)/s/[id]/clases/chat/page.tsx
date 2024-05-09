"use client"
import { BackgroundBeams } from '@/components/ui/background-gradient-animation';
import React from 'react';
import { NavbarSession } from '../../_components/navbar-session';

type Props = {
  params: { 
    id: string,
 }
};
  
export default function Chat( { params }: Props) {
    return (
        <div className='bg-zinc-900 h-full w-full'>
          <NavbarSession idUser={params.id} />
        </div>
    )
}