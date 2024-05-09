"use client";

import * as z from "zod";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TareasSchema } from "@/schemas/xavio";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { TextIcon, MessageCircleIcon, PencilIcon, XIcon, UploadIcon, FileIcon} from '@/components/icons';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { CardWrapper } from "@/components/auth/card-wrapper"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

import { login } from "@/actions/login";
import Link from "next/link";

type Props = {
    params: {
      id: string;
      clase: string;
    };
  };

export function PostSubject({ params }: Props) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked" 
      ? "Email already in use with different provider!" 
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof TareasSchema>>({
      resolver: zodResolver(TareasSchema),
      defaultValues: {
          title: "",
          description: "",
          delivery_date: new Date(),
      }
  })

  const onSubmit = (values: z.infer<typeof TareasSchema>) => {
      setError("");
      setSuccess("");

      /* startTransition(() => {
          login(values, callbackUrl)
              .then((data) => {
                  if (data?.error) {
                      form.reset();
                      setError(data.error);
                  }
                  if (data?.success) {
                      form.reset();
                      setSuccess(data.success);
                  }
                  if (data?.twoFactor) {
                      setShowTwoFactor(true);
                  }
              })
              .catch(() => setError("Something went wrong"));
      }) */
      
  }

  return (
          <Form {...form}>
              <form 
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
              >
                  <div className="space-y-4">
                    <FormField 
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Title"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Description"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="space-y-2">
                    <FormLabel>Resources</FormLabel>
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
                        </div>
                      </div>
                      <FormField 
                        control={form.control}
                        name="delivery_date"
                        render={({ field }) => (
                            <FormItem>
                              <FormLabel>Discussion date</FormLabel>
                              <FormControl>
                                <Input 
                               /* {...field}*/ 
                               disabled={isPending}
                                  type="date"
                                />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                      )}
                    />                 
                  </div>
                  <FormError message={error || urlError} />
                  <FormSuccess message={success} />
                  <Button
                      disabled={isPending}
                      type="submit"
                      className="w-full"
                  >
                      {showTwoFactor ? "Confirm" : "Submit"} 
                  </Button>
              </form>
          </Form>    
  )
}