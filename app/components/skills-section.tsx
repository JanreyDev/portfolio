"use client"
import { useState } from "react"

const skillCategories = [
    {
        name: "Frontend",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 88 },
            { name: "Tailwind CSS", level: 92 },
            { name: "Vue.js", level: 75 },
            { name: "JavaScript", level: 95 },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 78 },
            { name: "GraphQL", level: 82 },
            { name: "REST APIs", level: 90 },
            { name: "PostgreSQL", level: 80 },
            { name: "MongoDB", level: 75 },
        ],
    },
    {
        name: "Tools",
        skills: [
            { name: "Git", level: 92 },
            { name: "Docker", level: 75 },
            { name: "Figma", level: 88 },
            { name: "VS Code", level: 95 },
            { name: "Vercel", level: 90 },
            { name: "AWS", level: 70 },
        ],
    },
]

export function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("Frontend")
    const currentSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || []

    return (
        <section
            id="skills"
            className="relative py-24 px-6 overflow-hidden bg-background"
            style={{
                backgroundImage: `
                    radial-gradient(circle 600px at 100% 20%, rgba(6, 182, 212, 0.3), transparent),
                    radial-gradient(circle 600px at 0% 100%, rgba(168, 85, 247, 0.3), transparent),
                    radial-gradient(circle 500px at 50% 50%, rgba(59, 130, 246, 0.15), transparent)
                `,
                backgroundSize: '100% 100%, 100% 100%, 100% 100%',
                backgroundPosition: '0 0, 0 0, 0 0'
            }}
        >
            <div className="mx-auto max-w-6xl relative z-10">
                <div className="mb-4 text-center text-sm font-medium tracking-wide text-muted-foreground">
                    Skills & Expertise
                </div>
                <h2 className="mb-4 text-center font-serif text-4xl text-balance md:text-5xl">
                    Technologies and tools I work with
                </h2>
                <div className="h-1 w-20 bg-accent-dynamic mx-auto rounded-full mb-6"></div>
                <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
                    Specialized in modern web technologies with a focus on creating exceptional user experiences
                </p>

                {/* Category Tabs */}
                <div className="mb-12 flex justify-center gap-2">
                    {skillCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${activeCategory === category.name
                                ? "bg-accent-dynamic text-white shadow-lg"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {currentSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group rounded-2xl border bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mb-4 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-dynamic/10 text-accent-dynamic group-hover:bg-accent-dynamic/20 transition-colors">
                                    <span className="text-xl font-bold">{skill.name.charAt(0)}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{skill.name}</h3>
                                    <p className="text-sm text-muted-foreground">{skill.level}% proficiency</p>
                                </div>
                            </div>
                            <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                                <div
                                    className="h-full bg-accent-dynamic transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Pills */}
                <div className="mt-16">
                    <h3 className="mb-6 text-center text-lg font-semibold">Also familiar with</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Redux", "Jest", "Webpack", "Sass", "Material-UI", "Prisma", "Supabase", "Framer Motion"].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border bg-muted/50 backdrop-blur-sm px-4 py-2 text-sm font-medium transition-all hover:border-accent-dynamic/50 hover:bg-accent-dynamic/10 hover:scale-105"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}