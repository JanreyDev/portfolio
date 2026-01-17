"use client"


import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 lg:px-8"
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 -z-10 bg-background">
                {/* Large Gradient Orbs */}
                <div
                    className="absolute top-20 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl"
                    style={{
                        animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-3xl"
                    style={{
                        animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        animationDelay: '2s'
                    }}
                ></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl"></div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                ></div>
            </div>

            <div className="mx-auto max-w-7xl w-full text-center relative z-10">
                {/* Profile Image with fadeIn animation */}
                <div className="mb-6 inline-block animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    <div className="relative h-32 w-32">
                        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-xl ring-4 ring-accent-dynamic/20">
                            <Image src="/profile.jpg" alt="Janrey Mina" fill className="object-cover" />
                        </div>
                        <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full border-4 border-background bg-accent-dynamic shadow-lg animate-pulse"></div>
                    </div>
                </div>

                {/* Greeting text */}
                <p className="mb-4 text-lg text-muted-foreground animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                    Hi! I'm Janrey! 👋
                </p>

                {/* Main heading */}
                <h1 className="mb-6 font-serif text-balance text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    Full-Stack Web Developer
                    <br />
                    Based in the Philippines.
                </h1>

                {/* Description */}
                <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                    With 6 years of experience, I've contributed to scalable web applications and responsive frontend designs across multiple projects.
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    <Button
                        size="lg"
                        className="min-w-[180px] gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105 shadow-lg hover:shadow-xl"
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Connect with me
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="min-w-[180px] gap-2 rounded-full bg-transparent transition-transform hover:scale-105 shadow-sm"
                        asChild
                    >
                        <a href="/Janrey Mina CV.pdf" download="Janrey_Mina_CV.pdf">
                            My resume
                            <Download className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}