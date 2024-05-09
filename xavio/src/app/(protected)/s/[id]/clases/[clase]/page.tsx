import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    id: string,
    clase:  string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Clase ${params.clase}`
  }
} 
  
export default function Clases( { params }: Props) {
  return (
    <div>
      <p>selecciona una clase</p>
    </div>
  );
}