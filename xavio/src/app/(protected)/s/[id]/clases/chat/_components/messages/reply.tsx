import { XIcon } from '@/components/icons';
import React from 'react'


type Props = {
    message: {
      _id: string;
      sender: string;
      message: string;
      block : number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    },
    onClose: () => void;
  };

export function Reply({ message, onClose }: Props) {
    return (
      <section className='min-w-full max-h-[60px] flex flex-row border border-black bg-slate-200 rounded-lg p-2 justify-between'>
        <div className=' text-left grid grid-cols-1'>
            <p className='font-bold text-xs'>
              Sender: {message.sender}
            </p>
            <p className="text-xs overflow-hidden whitespace-nowrap overflow-ellipsis">
              Message: {message.message}
            </p>
        </div>
        <div className='flex items-center px-4'>
          <button onClick={onClose} className="hover:bg-slate-700 rounded-lg p-1">
            <XIcon className='w-8 h-8 text-slate-400' />
          </button>
        </div>
      </section>
    )
}