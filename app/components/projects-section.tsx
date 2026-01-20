// projects-section.tsx
"use client"


import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useMemo } from "react"
import { Button } from "./ui/button"

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "A modern e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.",
        image: "/modern-ecommerce-website-on-laptop-screen.jpg",
        tags: ["WordPress", "WooCommerce", "PHP"],
        technology: "wordpress",
        year: "2024",
    },
    {
        title: "Design System",
        category: "UI/UX Design",
        description: "Comprehensive design system with 50+ components, built for scalability and accessibility.",
        image: "/design-system-components-interface.png",
        tags: ["Next.js", "React", "Tailwind"],
        technology: "nextjs",
        year: "2024",
    },
    {
        title: "AI Chat Application",
        category: "Full Stack",
        description: "Real-time AI-powered chat application with natural language processing and contextual responses.",
        image: "/AI Chat Application.png",
        tags: ["Next.js", "TypeScript", "OpenAI"],
        technology: "nextjs",
        year: "2023",
    },
    {
        title: "Portfolio CMS",
        category: "Web Development",
        description: "Headless CMS solution for creative professionals to showcase their work with drag-and-drop simplicity.",
        image: "/cms-dashboard-with-portfolio-projects.jpg",
        tags: ["WordPress", "Gutenberg", "REST API"],
        technology: "wordpress",
        year: "2023",
    },
    {
        title: "Enterprise Dashboard",
        category: "Full Stack",
        description: "Analytics dashboard for enterprise clients with real-time data visualization and reporting.",
        image: "/Enterprise Dashboard.png",
        tags: ["Laravel", "Vue.js", "MySQL"],
        technology: "laravel",
        year: "2024",
    },
    {
        title: "Social Media App",
        category: "Mobile Development",
        description: "Cross-platform social networking application with real-time messaging and content sharing.",
        image: "/ai-chat-interface-on-mobile-and-desktop.jpg",
        tags: ["Next.js", "React Native", "Firebase"],
        technology: "nextjs",
        year: "2023",
    },
    {
        title: "Booking System",
        category: "Web Development",
        description: "Online booking and reservation system with payment integration and automated notifications.",
        image: "/cms-dashboard-with-portfolio-projects.jpg",
        tags: ["Laravel", "Livewire", "Stripe"],
        technology: "laravel",
        year: "2024",
    },
    {
        title: "Blog Platform",
        category: "Content Management",
        description: "Custom blog platform with advanced SEO features and multi-author support.",
        image: "/design-system-components-interface.png",
        tags: ["WordPress", "Elementor", "SEO"],
        technology: "wordpress",
        year: "2023",
    },
    {
        title: "API Gateway",
        category: "Backend Development",
        description: "Microservices API gateway with authentication, rate limiting, and request routing.",
        image: "/modern-ecommerce-website-on-laptop-screen.jpg",
        tags: ["Laravel", "Redis", "Docker"],
        technology: "laravel",
        year: "2024",
    },
]

const filters = [
    { label: "All", value: "all" },
    { label: "WordPress", value: "wordpress" },
    { label: "Next.js", value: "nextjs" },
    { label: "Laravel", value: "laravel" },
]

export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return projects
        return projects.filter((project) => project.technology === activeFilter)
    }, [activeFilter])

    // Pagination
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentProjects = filteredProjects.slice(startIndex, endIndex)

    // Reset to page 1 when filter changes
    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        setCurrentPage(1)
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        // Smooth scroll to top of section
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="work" className="relative px-6 py-32 lg:px-8 bg-muted/30 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Orbs */}
                <div className="absolute top-20 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent-dynamic/20 via-purple-500/10 to-transparent blur-3xl"></div>
                <div className="absolute bottom-20 left-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10 blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Dots Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                {/* Diagonal Lines */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-dynamic/20 to-transparent"></div>
                    <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">My portfolio</p>
                    <h2 className="mb-6 font-serif text-5xl font-normal tracking-tight sm:text-6xl lg:text-7xl">Selected work</h2>
                    <div className="h-1 w-20 bg-accent-dynamic rounded-full mb-6"></div>
                    <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        A curated collection of projects that showcase my approach to solving complex problems with elegant,
                        user-centered design.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="mb-12 flex flex-wrap gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => handleFilterChange(filter.value)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.value
                                ? "bg-foreground text-background shadow-lg scale-105"
                                : "bg-background border border-border text-foreground hover:border-accent-dynamic/50 hover:shadow-md"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Counter */}
                <div className="mb-6 text-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[600px]">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-accent-dynamic/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 flex flex-col"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
                        >
                            {/* Project Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* View Project Button on Image */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Button className="gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg">
                                        View project
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                                    <span className="font-medium">{project.year}</span>
                                    <span className="h-1 w-1 rounded-full bg-current" />
                                    <span>{project.category}</span>
                                </div>

                                <h3 className="font-serif text-2xl font-normal tracking-tight group-hover:text-accent-dynamic transition-colors mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tags - Always at bottom */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="rounded-full disabled:opacity-50"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <Button
                                    key={page}
                                    variant={currentPage === page ? "default" : "outline"}
                                    size="icon"
                                    onClick={() => handlePageChange(page)}
                                    className={`rounded-full w-10 h-10 ${currentPage === page
                                        ? "bg-foreground text-background hover:bg-foreground/90"
                                        : ""
                                        }`}
                                >
                                    {page}
                                </Button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="rounded-full disabled:opacity-50"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}