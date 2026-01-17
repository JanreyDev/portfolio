"use client"

import Link from "next/link"
// import { Button } from "@/components/ui/button"
import { Moon, Sun, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { ColorPicker } from "./color-picker"
import { Button } from "./ui/button"


export function Navigation() {
    const [isDark, setIsDark] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const stored = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const shouldBeDark = stored === "dark" || (!stored && prefersDark)

        setIsDark(shouldBeDark)
        if (shouldBeDark) {
            document.documentElement.classList.add("dark")
        }

        const savedColor = localStorage.getItem("accentColor")
        if (savedColor) {
            document.documentElement.style.setProperty("--accent", savedColor)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "work", "skills", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleTheme = () => {
        const newIsDark = !isDark
        setIsDark(newIsDark)

        if (newIsDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/10 bg-background backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link href="#home" className="flex items-center group">
                    <span className="text-2xl font-bold tracking-tight font-mono">
                        <span className="text-accent-dynamic transition-transform group-hover:scale-110 inline-block">&lt;</span>
                        <span className="mx-1">JanreyDev</span>
                        <span className="text-accent-dynamic transition-transform group-hover:scale-110 inline-block">/&gt;</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#home"
                        className={`text-sm font-medium transition-colors hover:text-accent-dynamic ${activeSection === "home" ? "text-accent-dynamic" : "text-muted-foreground"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        className={`text-sm font-medium transition-colors hover:text-accent-dynamic ${activeSection === "about" ? "text-accent-dynamic" : "text-muted-foreground"
                            }`}
                    >
                        About me
                    </Link>
                    <Link
                        href="#services"
                        className={`text-sm font-medium transition-colors hover:text-accent-dynamic ${activeSection === "services" ? "text-accent-dynamic" : "text-muted-foreground"
                            }`}
                    >
                        Services
                    </Link>
                    <Link
                        href="#work"
                        className={`text-sm font-medium transition-colors hover:text-accent-dynamic ${activeSection === "work" ? "text-accent-dynamic" : "text-muted-foreground"
                            }`}
                    >
                        My work
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <ColorPicker />
                    <button
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background transition-colors hover:bg-accent"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                    <Link href="#contact">
                        <Button variant="outline" className="gap-2 rounded-full bg-transparent">
                            Connect
                            <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}