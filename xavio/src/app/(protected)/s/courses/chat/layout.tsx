'use client'
import { useState } from 'react';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { MessageCircleIcon, BellIcon, XIcon,  } from '@/components/icons';

export default function ClasesLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [open, setOpen] = useState<boolean>(true);
    const chatsInfo = [
        /* 
            message should be queried 
            badge should  be queried
        */
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'bbbbbb', name: 'fisica', message: 'Lets meet tomorrow at...', badge: 2 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },
        { id: 'aaa', name: 'Mate', message: 'Can you send me the file?...', badge: 5 },

      ];
      const houses = {
        "Process": [
          { value: "house1", label: "House 1" },
          { value: "house2", label: "House 2" },
          { value: "house3", label: "House 3" },
          { value: "house4", label: "House 4" }
        ],
        "Done": [
          { value: "house5", label: "House 5" },
          { value: "house6", label: "House 6" },
          { value: "house7", label: "House 7" },
          { value: "house8", label: "House 8" }
        ],
        "Pending": [
          { value: "house9", label: "House 9" },
          { value: "house10", label: "House 10" },
          { value: "house11", label: "House 11" }
        ]
      };
      const roles = {
        "Roles": [
          { value: "admin", label: "Admin" },
          { value: "moderator", label: "Moderator" },
          { value: "user", label: "User" },
          { value: "guest", label: "Guest" },
          { value: "developer", label: "Developer" }
        ]
      };
    return (
      <section>
        {open ? (
            <div className="grid max-h-full h-4/5 lg:min-h-screen w-full lg:grid-cols-[280px_1fr] ">
            <div className="border-r bg-[#18181b] lg:block relative inset-x-0 z-20">
                <div className="flex h-full max-h-screen pt-[70px] flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold  text-white" href={`/s/courses/chat`}>
                    <MessageCircleIcon className="h-6 w-6" />
                    <span className="">Clases</span>
                    </Link>
                    <Button className="ml-auto h-8 w-8 bg-purple-600 border-purple-600 text-white" size="icon" variant="outline">
                        <BellIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <Button className="hidden lg:flex ml-2 h-8 w-8 bg-purple-600 border-purple-600 text-white" size="icon" variant="outline" onClick={() => setOpen(false)}>
                        <XIcon className="h-4 w-4" />
                        <span className="sr-only">Hide sidebar</span>
                    </Button>
    
                </div>
                <div className="flex-1 scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll py-2">
                    <div className="px-4 mb-4 flex items-center gap-2 ">
                        <Input placeholder="Buscar clases..." className='bg-purple-100 text-gray-950' />
                    </div>
                    <div className="px-4 mb-4 flex items-center gap-2 lg:max-w-[280px]">

                        <Select>
                            <SelectTrigger className='max-w-[150px] lg:max-w-[120px] bg-purple-100'>
                                <SelectValue placeholder="filtrar tema" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(houses).map(([status, options]) => (
                                    <SelectGroup key={status}>
                                    <SelectLabel>{status}</SelectLabel>
                                    {options.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                    ))}
                                    </SelectGroup>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className='max-w-[150px] lg:max-w-[120px] bg-purple-100'>
                                <SelectValue placeholder="filtrar status" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(roles).map(([group, options]) => (
                                    <SelectGroup key={group}>
                                    <SelectLabel>{group}</SelectLabel>
                                    {options.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                    ))}
                                    </SelectGroup>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {/* lg */}
                    <nav className="grid items-start px-4 text-sm font-medium ">
                        {chatsInfo.map((chat, index) => (
                            <Link
                            key={index}
                            className={`flex items-center gap-3 rounded-lg ${selectedChat === index ? 'bg-zin-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50' : 'px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
                            href={`/s/courses/chat/${chat.id}`}
                            onClick={() => setSelectedChat(index)}
                            >
                            <Avatar className="z-0"> {/* Change z-[-20] to z-0 */}
                                <AvatarImage alt={`@${chat.id}`} src="/placeholder-avatar.jpg" />
                                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className='text-white hover:text-white-400'>{chat.name}</div>
                                <div className="text-xs text-white">{chat.message}</div>
                            </div>
                            <Badge className="ml-auto bg-purple-600 hover:bg-white hover:text-black">{chat.badge}</Badge>
                            </Link>
                        ))}
                    </nav>
                </div>
                </div>
            </div>

            <section >
              {children}
            </section>
            </div>
        ) : (
            <section>
            <div className="hidden lg:grid max-h-full h-4/5 lg:min-h-screen w-full lg:grid-cols-[40px_1fr]  ">
                <div className="flex h-full max-h-screen flex-col gap-2 ">
                <div className="flex h-[60px] items-center border-b bg-gray-100/40 dark:bg-gray-800/40">
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline" onClick={() => setOpen(true)}>
                        <MessageCircleIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                </div>
            <section >
              {children}
            </section>
            </div>
            <div className="grid lg:hidden max-h-full h-4/5 lg:min-h-screen w-full lg:grid-cols-[280px_1fr] pt-[70px]  ">
                <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 ">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" href={`/s/chat`}>
                        <MessageCircleIcon className="h-6 w-6" />
                        <span className="">JMO</span>
                        </Link>
                        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                        <Button className="hidden lg:flex ml-2 h-8 w-8" size="icon" variant="outline" onClick={() => setOpen(false)}>
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Hide sidebar</span>
                        </Button>
        
                    </div>
                    <div className="flex-1 scrollbar-thumbrounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-zinc-900 scrollbar-track-zinc-900 h-32 overflow-y-scroll py-2">
                        <div className="px-4 mb-4">
                            <Input placeholder="Search contacts..." />
                        </div>
                        {/* mobile */}
                        <nav className="grid items-start px-4 text-sm font-medium">
                            {chatsInfo.map((chat, index) => (
                                <Link
                                key={index}
                                className={`flex items-center gap-3 rounded-lg ${selectedChat === index ? 'bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50' : 'px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
                                href={`/s/courses/chat/${chat.id}`}
                                onClick={() => setSelectedChat(index)}
                                >
                                <Avatar>
                                    <AvatarImage alt={`@${chat.id}`} src="/placeholder-avatar.jpg" />
                                    <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div>{chat.name}</div>
                                    <div className="text-xs text-gray-400">{chat.message}</div>
                                </div>
                                <Badge className="ml-auto bg-purple-600 hover:bg-white hover:text-black">{chat.badge}</Badge>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <section >
              {children}
            </section>
            </div>
            </section>
        )}
      </section>
      
    )
  }  