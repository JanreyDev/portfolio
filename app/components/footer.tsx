import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border/10 bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold tracking-tight font-mono">
                                <span className="text-accent-dynamic">&lt;</span>
                                <span className="mx-1">JanreyDev</span>
                                <span className="text-accent-dynamic">/&gt;</span>
                            </h3>
                        </div>
                        <p className="mb-6 max-w-md text-muted-foreground leading-relaxed">
                            Creating exceptional digital experiences with clean code and thoughtful design. Let's build something
                            amazing together.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/janreymina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-accent-dynamic hover:bg-accent-dynamic hover:text-white"
                            >
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/janreymina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-accent-dynamic hover:bg-accent-dynamic hover:text-white"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://twitter.com/janreymina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-accent-dynamic hover:bg-accent-dynamic hover:text-white"
                            >
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="mailto:janreyminadev@gmail.com"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-accent-dynamic hover:bg-accent-dynamic hover:text-white"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
                        {/* Quick Links */}
                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#home"
                                        className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        Home
                                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        About me
                                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        Services
                                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#work"
                                        className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        My work
                                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#services"
                                        className="text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        Web Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        Mobile App
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        UI/UX Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="text-sm text-muted-foreground transition-colors hover:text-accent-dynamic"
                                    >
                                        Backend & API
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="mailto:janreyminadev@gmail.com"
                                        className="text-sm text-muted-foreground transition-colors hover:text-accent-dynamic hover:underline"
                                    >
                                        janreyminadev@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+639476664793"
                                        className="text-sm text-muted-foreground transition-colors hover:text-accent-dynamic hover:underline"
                                    >
                                        09476664793
                                    </a>
                                </li>
                                <li>
                                    <p className="text-sm text-muted-foreground">Tarlac City, Philippines</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/10 pt-8 text-sm text-muted-foreground sm:flex-row">
                    <p>© {currentYear} Janrey Mina. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="transition-colors hover:text-accent-dynamic">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors hover:text-accent-dynamic">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}