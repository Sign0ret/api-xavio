"use client"
import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import useChatSocket from '../_components/socket/functions';
import { Message } from '../_components/messages/message';

import { 
    DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuItem, 
    DropdownMenuContent, 
    DropdownMenu 
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { 
  SelectValue, 
  SelectTrigger, 
  SelectItem, 
  SelectContent, 
  Select 
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { 
  TextIcon, 
  MessageCircleIcon, 
  PencilIcon, 
  XIcon, 
  UploadIcon, 
  FileIcon,
  FileQuestionIcon,
  CheckIcon,
  BookIcon,
  ClipboardIcon,
  BookOpenIcon,
  CameraIcon,
} from '@/components/icons';
import { Boilerplate_message } from '../_components/messages/boilerplate';
import { Right_bar } from '../_components/rightbar';
import { Reply } from '../_components/messages/reply';
import { PostMedia } from '../_components/actions/post_media';
import { PostHomework } from '../_components/actions/post_homework';
import { PostSubject } from '../_components/actions/post_subject';
import { PostQuiz } from '../_components/actions/post_quiz';
import { PatchClass } from '../_components/actions/patch_class';
import { BackgroundBeams } from '@/components/ui/background-gradient-animation';
import { NavbarSession } from '../../../_components/navbar-session';


type Props = {
  params: { 
    id: string,
    clase: string,
 }
};

/* export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Chat de ${params.clase}`
  }
}  */
  
export default function ChatClase( { params }: Props) {
    // start websocket logic
    const {
      socket,
      message,
      setMessage,
      messages,
      selectedMessageId,
      updatedMessage,
      sendMessage,
      selectMessage,
      updateMessage,
      deleteMessage
    } = useChatSocket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add your logic here to handle the form submission, such as sending the message
    if (message.trim() !== '') {
      sendMessage(); // Assuming sendMessage is a function to send the message
    } else {
      // Handle the case where the message is empty
      console.log('Message cannot be empty');
    }
  };

  // end websocket logic

  const [reply, setReply] = useState<Message | null>(null);
  const handleCloseReply = () => {
    // Implement your logic here, such as closing the reply component
    setReply(null);
  };
  const handleOpenReply = (message: Message) => {
    setReply(message);
  };
  
  const [openTasks, setOpenTasks] = useState<boolean>(false);
  const [upInput, setUpInput] = useState<boolean>(false);
  const personas = [
    { value: 'mikejones', label: 'mikejones' },
    { value: 'Person 2', label: 'Person 2' },
    { value: 'Person 3', label: 'Person 3' }
  ];
  const status = [
    { value: 0, label: 'Asignada' },
    { value: 25, label: 'Haciendo' },
    { value: 50, label: 'Hecha' },
    { value: 75, label: 'Revisada' }, 
    { value: 100, label: 'Archivada' }
  ];

  const mensajes = [
    {
      sender: "adolfo",
      tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
      mensaje: "Sure, I'd be happy to help.Sure, I'd be happy to help. Could you please provide your order number? Sure, I'd be happy to help. Could you please provide your order number?",
      bloque: 1,
    },
    {
      sender: "User",
      tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
      mensaje: "I need help with my order.",
      bloque: 4,
    },
    {
      sender: "John Doe",
      tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
      mensaje: "Sure, I'd be happy to help.Sure, I'd be happy to help. Could you please provide your order number? Sure, I'd be happy to help. Could you please provide your order number?",
      bloque: 2,
    },
    {
      sender: "adolfo",
      tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
      mensaje: "Hi there! How can I assist you today?",
      bloque: 3,
    },
    {
        sender: "adolfo",
        tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
        mensaje: "Sure, I'd be happy to help.Sure, I'd be happy to help. Could you please provide your order number? Sure, I'd be happy to help. Could you please provide your order number?",
        bloque: 1,
      },
      {
        sender: "User",
        tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
        mensaje: "I need help with my order.",
        bloque: 4,
      },
      {
        sender: "John Doe",
        tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
        mensaje: "Sure, I'd be happy to help.Sure, I'd be happy to help. Could you please provide your order number? Sure, I'd be happy to help. Could you please provide your order number?",
        bloque: 2,
      },
      {
        sender: "adolfo",
        tiempo: "2024-03-30T10:20:00", // Convertir la hora a timestamp Unix
        mensaje: "Hi there! How can I assist you today?",
        bloque: 3,
      },
    // Los demás mensajes seguirían aquí con la misma estructura
  ];

  return (
    <section className=' relative inset-x-0 z-50'>
        <NavbarSession idUser={params.id} />
        <div className="hidden lg:flex flex-col min-h-screen h-screen pt-[70px]">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-[#18181b] px-6 relative inset-x-0 z-50">
            <Link className="lg:hidden" href={`s/${params.id}/clases/chat`}>
                <MessageCircleIcon className="h-6 w-6"/>
                <span className="sr-only">Classes</span>
            </Link>

            <PatchClass params={params} />
            <Button className="hidden lg:flex ml-2 h-8 w-8 bg-purple-600 border-purple-600 text-white" size="icon" variant="outline" onClick={() => setUpInput(!upInput)}>
                <PencilIcon className="h-4 w-4"/>
                <span className="sr-only">Move up</span>
            </Button>
            {openTasks ? (
                <Button className="hidden lg:flex ml-2 h-8 w-8 bg-purple-600 border-purple-600 text-white" size="icon" variant="outline" onClick={() => setOpenTasks(false)}>
                    <XIcon className="h-4 w-4" />
                    <span className="sr-only">Hide tasksbar</span>
                </Button>
            ) : (
                <Button className="hidden lg:flex ml-2 h-8 w-8 bg-purple-600 border-purple-600 text-white" size="icon" variant="outline" onClick={() => setOpenTasks(true)}>
                    <TextIcon className="h-4 w-4" />
                    <span className="sr-only">open tasks</span>
                </Button>
            )}
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 pr-0 mr-0  bg-zinc-900 md:pr-0 max-h-full overflow-y-hidden">
            {openTasks ? (
                <>
                    <section className='flex flex-row overflow-y-hidden'>
                        <div className="w-4/5 p-4 overflow-y-auto no-scrollbar">
                            <BackgroundBeams />
                            {
                            messages.map((msg: Message, index) => (
                                <Boilerplate_message key={`${index}-mensaje`} message={msg} params={params} onReply={handleOpenReply} />
                            ))
      
                            }
                        </div>
                        <section className='w-[280px] relative inset-x-0 max-w-2xl mx-auto z-50 '>
                            <Right_bar params={params}  />
                        </section>
                    </section>
                </>
                    
            ) : (
                     <div className='p-4 overflow-y-auto no-scrollbar mr-4'>
                        <BackgroundBeams />
                        {
                            messages.map((msg: Message, index) => (
                                <Boilerplate_message key={`${index}-mensaje`} message={msg} params={params} onReply={handleOpenReply} />
                            ))
                        }
                      </div>
            )}
            <div className={`mt-auto pr-6 ${upInput ? 'mb-20' : 'mb-0'} relative inset-x-0 z-50`}>
                {reply && (
                    <div className='mb-2 pl-20'>
                        <Reply message={reply} onClose={handleCloseReply}/>
                    </div>
                )}
                
                <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <PencilIcon className="h-4 w-4 ml-4 text-white"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='flex flex-col ml-14 mb-2 bg-[#18181b] text-white'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {/* Foto/video/Documento nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    <span><CameraIcon className='h-4 w-4 mr-2' /></span>
                                    <p>Media</p>
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll'>
                                <DialogHeader>
                                <DialogTitle>Upload Media</DialogTitle>
                                <DialogDescription>
                                    <PostMedia params={params} />
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* Documento nuevo */}
{/*                         <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    <span><FileIcon className='h-4 w-4 mr-2' /></span>
                                    <p>Documento</p>
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll'>
                                <DialogHeader>
                                <DialogTitle>Subir Documentos</DialogTitle>
                                <DialogDescription>
                                    {/* <Documento_nuevo params={params} /> 
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog> */}
                        {/* Tema nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    <span><BookOpenIcon className='h-4 w-4 mr-2' /></span>
                                    <p >Subject</p>
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll'>
                                <DialogHeader>
                                <DialogTitle>New Subject</DialogTitle>
                                <DialogDescription>
                                   <PostSubject params={params}/>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* Quiz nuevo */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    <span><FileQuestionIcon className='h-4 w-4 mr-2' /></span>
                                    <p>Quiz</p>
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll'>
                                <DialogHeader>
                                <DialogTitle>New Quiz</DialogTitle>
                                <DialogDescription>
                                    <PostQuiz params={params}/>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        {/* tarea nueva */}
                        <Dialog>
                            <DialogTrigger>
                                <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                    <span><CheckIcon className='h-4 w-4 mr-2' /></span>
                                    <p>Homework</p>
                                </DropdownMenuLabel>
                            </DialogTrigger>
                            <DialogContent className='max-h-screen scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll'>
                                <DialogHeader>
                                <DialogTitle>New Homework</DialogTitle>
                                <DialogDescription>
                                    <PostHomework />
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuContent>
                    </DropdownMenu>
                    <Input 
                        value={message}
                        className="flex-1 bg-zinc-200" 
                        placeholder="Type a message..."
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button 
                        variant="outline" 
                        className='bg-purple-600 text-white' 
                        type='submit'
                        >
                        Send
                    </Button>
                </form>
            </div>
            </main>
        </div>
        {/* mobile */}
        <div className="flex lg:hidden flex-col fixed inset-0 scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll pt-[70px] min-h-screen h-screen bg-background z-40">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <Link className="lg:hidden" href={`/s/${params.id}/clases/chat`}>
                    <MessageCircleIcon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Link>
            <PatchClass params={params} />
            <Button className="flex lg:hidden ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setUpInput(!upInput)}>
                <PencilIcon className="h-4 w-4"/>
                <span className="sr-only">Move up</span>
            </Button>
            <Sheet>
                <SheetTrigger>
                    {/* <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline"> */}
                        <TextIcon className="h-4 w-4" />
                        <span className="sr-only">open tasks</span>
                    {/* </Button> */}
                </SheetTrigger>
                <SheetContent>
                    <Right_bar params={params} />
                    {/* <SheetHeader>
                    <SheetDescription>
                        <p>ajustes</p>
                    </SheetDescription>
                    </SheetHeader> */}
                </SheetContent>
            </Sheet>
            
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 max-h-full overflow-y-hidden">
                     <div className='p-4 overflow-y-auto no-scrollbar'>
                        {
                            messages.map((msg: Message, index) => (
                                <Boilerplate_message key={`${index}-mensaje`} message={msg} params={params} onReply={handleOpenReply} />
                            ))
                        }
                      </div>
                    <div className={`mt-auto ${upInput ? 'mb-20' : 'mb-0'}`}>
                        <div className='mb-2 px-5'>
                            {reply && <Reply message={reply} onClose={handleCloseReply} />}
                        </div>
                        <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                            <DropdownMenu>
                            <DropdownMenuTrigger>
                                <PencilIcon className="h-4 w-4"/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='flex flex-col ml-2 mb-2 items-start'>
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {/* Nueva Foto/Video/Documeto Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Media
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
                                    <DrawerContent className='max-h-screen scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll'>
                                        <DrawerHeader>
                                        <DrawerTitle>Upload Media</DrawerTitle>
                                        <DrawerDescription>
                                            <PostMedia params={params} />
                                        </DrawerDescription>
                                        </DrawerHeader>
                                    </DrawerContent>
                                </Drawer>
                                {/* Nuevo Documento Mobil */}
{/*                                 <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Documento
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                        <DrawerTitle>Nuevo Documento</DrawerTitle>
                                        <DrawerDescription>
                                            {/* <Documento_nuevo params={params} /> *
                                        </DrawerDescription>
                                        </DrawerHeader>
                                    </DrawerContent>
                                </Drawer> */}
                                {/* Nuevo Tema Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Subject
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                        <DrawerTitle>New Subject</DrawerTitle>
                                        <DrawerDescription>
                                            <PostSubject params={params} />
                                        </DrawerDescription>
                                        </DrawerHeader>
                                    </DrawerContent>
                                </Drawer>
                                {/* Nuevo Quiz Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Quiz
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                        <DrawerTitle>New Quiz</DrawerTitle>
                                        <DrawerDescription>
                                            <PostQuiz params={params} />
                                        </DrawerDescription>
                                        </DrawerHeader>
                                    </DrawerContent>
                                </Drawer>
                                {/* Nueva Tarea Mobil */}
                                <Drawer>
                                    <DrawerTrigger>
                                        <DropdownMenuLabel className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            Homework
                                        </DropdownMenuLabel>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>New Homework</DrawerTitle>
                                        <DrawerDescription>
                                            <PostHomework />
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    </DrawerContent>
                                </Drawer>
                            </DropdownMenuContent>
                            </DropdownMenu>
                            <Input
                              value={message}
                              className="flex-1" 
                              placeholder="Type a message..."
                              onChange={(e) => setMessage(e.target.value)}
                              />
                            <Button variant="outline" type="submit">Send</Button>
                        </form>
                    </div>
                    </main>
        </div>
        
    </section>
    
    
  );
}