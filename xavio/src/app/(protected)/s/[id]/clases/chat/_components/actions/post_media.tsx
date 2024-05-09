'use client'
import React, { useState } from 'react';

import { Button } from "@/components/ui/button"  
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { TextIcon, MessageCircleIcon, PencilIcon, XIcon, UploadIcon, FileIcon} from '@/components/icons';
// type Props = {
//   fotos: {
//     url: string;
//     description: string;
//   }[],
//   elegida: string;
// };

type Props = {
    params: {
      id: string;
      clase: string;
    };
  };

export function PostMedia({ params }: Props) {
    return (
        <div className="space-y-2">
        <div key="1" className="border-dashed border-2 rounded-md p-6 w-full max-w-md mx-auto relative">
            <Button className="absolute top-2 right-2" variant="ghost">
                <XIcon className="h-4 w-4" />
            </Button>
            <div className="flex flex-col items-center space-y-4">
                <UploadIcon className="h-8 w-8 text-gray-400" />
                <p className="text-gray-500 dark:text-gray-400">Drag & drop your files here, or</p>
                <Label className="cursor-pointer" htmlFor="file-upload">
                <Button variant="outline">Browse</Button>
                </Label>
                <Input className="sr-only" id="file-upload" multiple type="file" />
            </div>
            <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-semibold">Selected Files:</h3>
                <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <img
                        alt="file1"
                        className="object-cover rounded-full hover:scale-150 transition-transform duration-200"
                        height={24}
                        src="/placeholder.svg"
                        style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                        }}
                        width={24}
                    />
                    <span className="font-medium">file1.jpg</span>
                    <span className="text-sm text-gray-500 ml-2">(1.2 MB)</span>
                    </div>
                    <Button size="sm" variant="ghost">
                    Remove
                    </Button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <img
                        alt="file2"
                        className="object-cover rounded-full"
                        height={24}
                        src="/placeholder.svg"
                        style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                        }}
                        width={24}
                    />
                    <span className="font-medium">file2.png</span>
                    <span className="text-sm text-gray-500 ml-2">(2.5 MB)</span>
                    </div>
                    <Button size="sm" variant="ghost">
                    Remove
                    </Button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <FileIcon className="h-6 w-6 text-gray-400" />
                    <span className="font-medium">file3.pdf</span>
                    <span className="text-sm text-gray-500 ml-2">(500 KB)</span>
                    </div>
                    <Button size="sm" variant="ghost">
                    Remove
                    </Button>
                </div>
                </div>
            </div>
            <div className="mt-6">
                <Button>Submit Files</Button>
            </div>
            </div>
        </div>
    )
}