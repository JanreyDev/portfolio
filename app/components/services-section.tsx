// services-section.tsx
"use client"

import { ArrowRight } from "lucide-react"

export function ServicesSection() {
    const services = [
        {
            id: "web-design",
            icon: "🌐",
            title: "Web design",
            description:
                "I build fast, responsive, and scalable web applications using modern frameworks and best practices. From landing pages to complex dashboards, I focus on performance, accessibility, and clean code.",
            featured: false,
        },
        {
            id: "mobile-app",
            icon: "📱",
            title: "Mobile app",
            description:
                "I develop cross-platform and web-based mobile applications with a focus on usability and performance, ensuring seamless experiences across devices.",
            featured: true,
        },
        {
            id: "ui-ux",
            icon: "🎨",
            title: "UI/ UX design",
            description: "I design intuitive and user-centered interfaces that balance aesthetics with usability. My goal is to create experiences that are simple, engaging, and effective.",
            featured: false,
        },
        {
            id: "backend-api",
            icon: "💾",
            title: "Backend & API Development",
            description: "I build secure and scalable backend systems and RESTful APIs, ensuring efficient data handling and seamless integration with frontend applications.",
            featured: false,
        },
    ]

    return (
        <section
            id="services"
            className="relative py-20 px-4 overflow-hidden bg-background"
            style={{
                backgroundImage: `
                    radial-gradient(circle 500px at 25% 0%, rgba(6, 182, 212, 0.3), transparent),
                    radial-gradient(circle 500px at 75% 100%, rgba(168, 85, 247, 0.3), transparent),
                    radial-gradient(circle 400px at 50% 50%, rgba(59, 130, 246, 0.15), transparent)
                `,
                backgroundSize: '100% 100%, 100% 100%, 100% 100%',
                backgroundPosition: '0 0, 0 0, 0 0'
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="text-sm text-muted-foreground mb-2">What I offers</p>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">My services</h2>
                    <div className="h-1 w-20 bg-accent-dynamic mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I am a Full-Stack Developer with 6 years of experience, specializing in building scalable, high-performance web and mobile applications. I work across the entire stack from clean, intuitive user interfaces to secure, efficient backend systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group p-8 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col ${service.featured
                                ? "border-2 border-foreground bg-accent-dynamic/5"
                                : "border border-border bg-card hover:border-accent-dynamic/50"
                                }`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent-dynamic flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                            <button className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all group-hover:text-accent-dynamic mt-auto">
                                Read more
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}