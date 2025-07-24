'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Navigation } from "../components/nav";

const GitHubCalendar = dynamic<any>(
  () => import('react-github-calendar').then(mod => mod.default),
  { ssr: false }
);



export default function GitHubPage() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="max-w-4xl mx-auto py-16 px-4">
                    <div className="text-zinc-100 flex justify-center">
                        <GitHubCalendar username="its-varad" />
                    </div>
                </div>
            </div>

        </div>
    );
}
