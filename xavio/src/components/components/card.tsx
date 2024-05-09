"use client";
import { HoverEffect2} from "@/components/ui/card-hover-effect-2";

export function Card() {
  
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect2 items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "Desciption of the topic",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "Desciption of the topic",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "Desciption of the topic",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "Desciption of the topic",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "Desciption of the topic",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "Desciption of the topic",
    link: "https://microsoft.com",
  },
  {
    title: "Epic Games",
    description:
      "Desciption of the topic",
    link: "https://microsoft.com",
  },
  {
    title: "Apple",
    description:
      "Desciption of the topic",
    link: "https://microsoft.com",
  },
];
