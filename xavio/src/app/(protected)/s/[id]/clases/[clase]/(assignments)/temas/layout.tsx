"use client"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
import { ChevronsUpDownIcon } from "@/components/icons";

const topicsInfo = [
    {
      topic: "Algebra",
      description: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Algebra",
      description: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Algebra",
      description: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Algebra",
      description: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    },
    {
      topic: "Geometry",
      description: "Geometry is a branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "User"
    },
    {
      topic: "Calculus",
      description: "Calculus is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "John Doe"
    },
    {
      topic: "Statistics",
      description: "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.",
      lastUpdated: "2024-03-30T10:20:00",
      contributor: "adolfo"
    }
  ];
  

export default function TemaClaseLayout({
    children,
    params, // will be a page or nested layout
  }: {
    children: React.ReactNode,
    params: { 
        id: string,
        clase: string,
    }
  }) {

    return (
      <div className="h-screen w-full">
        <div className="hidden lg:flex">
            <div className="flex w-1/5 flex-col items-start justify-start space-y-2 p-4 overflow-y-auto pt-[70px]">
                <Collapsible className="w-[350px] space-y-2">
                  <div className="flex items-center justify-between space-x-4 px-4">
                      <h4 className="text-sm font-semibold">Temas | {params.clase}</h4>
                      <CollapsibleTrigger asChild>
                      <Button className="w-9 p-0" size="sm" variant="ghost">
                          <ChevronsUpDownIcon className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                      </Button>
                      </CollapsibleTrigger>
                  </div>  
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">{topicsInfo[0].topic}</div>
                  <CollapsibleContent className="space-y-2">
                      {topicsInfo.map((topic, index) => (
                          <Link key={`${topic.topic}-large`} href={`/s/${params.id}/clases/${params.clase}/temas/${topic.topic}`}>
                              <div className="rounded-md border px-4 py-3 my-2 font-mono text-sm">{topic.topic}</div>
                          </Link>
                      ))}
                  </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="flex w-4/5 flex-col items-center justify-center bg-white p-8">
                {children}
            </div>
        </div>
        <div className="lg:hidden flex w-full flex-col items-center justify-center bg-white p-8">
          <Drawer>
              <DrawerTrigger>
                <Button className="w-9 flex flex-row" size="sm" variant="ghost">
                    <ChevronsUpDownIcon className="h-4 w-4" />
                    <h4 className="text-sm font-semibold">Temas | {params.clase}</h4>
                    <span className="sr-only">Toggle</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className='max-h-screen overflow-y-auto'>
                  <DrawerHeader>
                  <DrawerTitle>Temas | {params.clase}</DrawerTitle>
                  <DrawerDescription>
                    {topicsInfo.map((topic, index) => (
                          <Link key={`${topic.topic}small`} href={`/s/${params.id}/clases/${params.clase}}/temas/${topic.topic}`}>
                              <div className="rounded-md border px-4 py-3 my-2 font-mono text-sm">{topic.topic}</div>
                          </Link>
                    ))}
                  </DrawerDescription>
                  </DrawerHeader>
              </DrawerContent>
          </Drawer>
          <div>
                {children}
          </div>
        </div>
      </div>
    )
}
