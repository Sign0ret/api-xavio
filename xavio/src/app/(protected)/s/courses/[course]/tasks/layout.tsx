
"use client";
import { Button } from "../../../_components/ui/moving-border";

export default function TasksCourseLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: {
    course: string;
  };
}) {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex w-full lg:w-2/5 flex-col items-start justify-end space-y-2 p-[40px] lg:p-0 h-screen">
            <br/>
            <br/>
            <br/>   
        <div className="pl-14 w-full max-h-[90vh] h-full">
          <Button className="p-20">Instructions</Button>
        </div>
        </div>
        <div className="flex w-full lg:w-3/5 flex-col items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
