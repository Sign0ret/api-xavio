import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: { 
    course:  string,
 }
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Curso ${params.course}`
  }
} 
  
export default function Clases( { params }: Props) {
  return (
    <div>
      <p>selecciona un curso</p>
    </div>
  );
}