'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roadmaps } from "@/lib/roadmaps";

export default function RoadmapsPage() {
    const [search, setSearch] = useState('');
    const [level, setLevel] = useState('All Levels');
    const [category, setCategory] = useState('All Categories');
    const [duration, setDuration] = useState('All Durations');

    const filteredRoadmaps = roadmaps.filter(roadmap => {
        const matchesSearch = roadmap.title.toLowerCase().includes(search.toLowerCase()) || roadmap.description.toLowerCase().includes(search.toLowerCase());
        const matchesLevel = level === 'All Levels' || roadmap.level === level;
        const matchesCategory = category === 'All Categories' || roadmap.category === category;
        const matchesDuration = duration === 'All Durations' || roadmap.duration === duration;
        return matchesSearch && matchesLevel && matchesCategory && matchesDuration;
    });

  return (
    <section className="w-full px-4 md:px-8 py-10">
        <div className="max-w-6xl mx-auto">
            {/* Header Card */}
            <div className="rounded-xl border border-cyan-400/70 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-8 md:p-10 shadow-[0_0_0_1px_rgba(34,211,238,0.15)]">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Roadmaps
                </h2>

                <p className="mt-3 text-base md:text-xl text-body max-w-3xl">
                    Browse guided paths with structured milestones, projects, and real-world skills.
                </p>
            </div>

            {/* Filter Bar */}
            <div className="mt-8 rounded-xl border border-white/10 bg-card/60 backdrop-blur px-4 md:px-6 py-5 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Search */}
                    <div className="md:col-span-1">
                        <label className="sr-only" htmlFor="roadmap-search">Search</label>
                        <input
                            id="roadmap-search"
                            type="text"
                            placeholder='Search: "frontend", "devops", "java"...'
                            className="w-full rounded-lg border border-white/10 bg-gray-900/40 px-4 py-3 text-text placeholder:text-muted outline-none focus:border-cyan-400/60"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </div>

                    {/* Level */}
                    <div>
                        <label className="sr-only" htmlFor="roadmap-level">Level</label>
                        <select
                            id="roadmap-level"
                            className="w-full rounded-lg border border-white/10 bg-gray-900/40 px-4 py-3 text-text outline-none focus:border-cyan-400/60"
                            onChange={(e) => setLevel(e.target.value)}
                            value={level}
                        >
                            <option>All Levels</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="sr-only" htmlFor="roadmap-category">Category</label>
                        <select
                            id="roadmap-category"
                            className="w-full rounded-lg border border-white/10 bg-gray-900/40 px-4 py-3 text-text outline-none focus:border-cyan-400/60"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        >
                            <option>All Categories</option>
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>DevOps</option>
                            <option>Data</option>
                        </select>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="sr-only" htmlFor="roadmap-duration">Duration</label>
                        <select
                            id="roadmap-duration"
                            className="w-full rounded-lg border border-white/10 bg-gray-900/40 px-4 py-3 text-text outline-none focus:border-cyan-400/60"
                            onChange={(e) => setDuration(e.target.value)}
                            value={duration}
                        >
                            <option>All Durations</option>
                            <option>1–2 weeks</option>
                            <option>1 month</option>
                            <option>2–3 months</option>
                            <option>3+ months</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredRoadmaps.map((roadmap) => (
                <Card key={roadmap.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300 bg-card border-white/10 text-text">
                    <CardHeader>
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                        {roadmap.icon}
                        <CardTitle className="font-headline text-2xl">
                            {roadmap.title}
                        </CardTitle>
                        </div>
                        {roadmap.status && (
                        <Badge variant={roadmap.status === 'New' ? 'default' : 'secondary'}> {roadmap.status}</Badge>
                        )}
                    </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <p className="text-muted">{roadmap.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                    <div className="flex justify-between items-center text-sm text-muted">
                        <div className="flex items-center gap-2">
                        <span>{roadmap.level}</span>
                        </div>
                        <span>{roadmap.duration}</span>
                    </div>
                    </div>
                </Card>
                ))}
            </div>

        </div>
    </section>
  );
}
