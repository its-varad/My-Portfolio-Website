import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import GitHubCalendar from "react-github-calendar";
import dynamic from "next/dynamic";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
    {name:"GitHub", href: "/github"}
];


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
       \Hi, Its-Varad
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h1 className="text-xl text-zinc-500 ">
            A Full Stack Developer with a strong foundation in designing, developing, and deploying applications with quick solutions.
        </h1>
      </div>
        <div className="animate-fade-in text-zinc-500" >
            <GitHubCalendar username="its-varad" hideBorder={true} />
        </div>
    </div>
  );

}
