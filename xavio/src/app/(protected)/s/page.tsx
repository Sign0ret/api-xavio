import React from 'react';
import { Metadata } from 'next';
import { Proyects } from './_components/profile/proyects';
import { SparklesPreview } from './_components/profile/spark-bg';
import { AnimatedTooltipPreview } from './_components/profile/avatar-circle';
import { Portafolio } from './_components/profile/portfolio';
import { currentUser } from '@/lib/auth';

export const generateMetadata = (): Metadata => {
  return {
    title: `Profile`
  }
} 
  
export default async function Perfil() {
    const user = await currentUser();
 
  return (
    <div className="relative min-h-[2000px] z-0">
      <SparklesPreview/>
      <section className=' z-10 flex flex-grow m-10 mt-16 absolute inset-0 flex-col justify-center items-center'>
        <div className="flex flex-grow m-14 max-h-96 w-full">
          <div className="flex-1 mr-4">
            <h1 className='text-white text-3xl p-1'>Portafolio de Proyectos {user?.name}</h1>
            <div className='bg-gray-0 h-full w-full border-0 hover:border-[4px] transition-all duration-150 border-white rounded-3xl'>
              <div className='w-full h-full max-h-max overflow-hidden hover:overflow-y-auto'>
                <Portafolio/>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <div className='p-1 justify-end text-right'>
              <div className="relative inline-flex h-10 w-52 overflow-hidden rounded-full p-1">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Fecha: 1/05/2024
                </span>
              </div>
            </div>
            <div className='bg-gray-0 h-full w-full border-0 hover:border-[4px] transition-all duration-150 border-white rounded-3xl '>
              <div className='p-6 relative justify-center align-middle text-center w-full h-full grid place-items-center'>
                <div className='grid grid-cols-2'>
                  <div>
                    <AnimatedTooltipPreview/>
                  </div>
                  <div className='grid text-white p-6 justify-center border-l-2 border-gray-700'>
                    <h1 className='font-bold text-3xl py-'>Jorge Blasquez</h1>
                    <p className='py-'>Ingeniero en Tecnologias Computacionales</p>
                    <p className='py-'>Tecnologico de Monterrey</p>
                  </div>
                </div>
                <button className="px-16 py-2 rounded-md bg-purple-600 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-purple-600">
                  CV o Link a redes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
            <h1 className='text-white text-3xl p-1'>Cursos Terminados y certificaciones</h1>
            <div className='bg-gray-0 h-full w-full border-0 hover:border-[4px] transition-all duration-150 border-white rounded-3xl max-h-96'>
              <div className='w-full h-full max-h-max overflow-hidden hover:overflow-y-auto'>
                <Proyects/>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}