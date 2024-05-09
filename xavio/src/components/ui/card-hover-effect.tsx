import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { 
  TextIcon,
  FileQuestionIcon,
  CheckIcon,
  BookIcon,
  ClipboardIcon,
  BookOpenIcon,
} from '@/components/icons';

export const HoverEffect = ({
  params,
  items,
  className,
}: {
  params: {
    course: string,
  }
  items: {
    id: string,
    type: string;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [value, setValue] = React.useState('tareas');

  return (
    <div
      className={cn(
        "row py-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={`/s/courses/${params.course}/${item.type}/${item.id}`}
          key={item?.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="flex flex-row">
              <span className="w-4 h-4 mt-1">
                {item.type == 'temas' && <BookOpenIcon className="w-4 h-4" />}
                {item.type == 'tareas' && <ClipboardIcon className="w-4 h-4" />}
                {item.type == 'quizzes' && <FileQuestionIcon className="w-4 h-4" />}
              </span>
              <p className="ml-2">
                {item.title}
              </p>
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-10">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
