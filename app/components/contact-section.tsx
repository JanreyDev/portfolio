// contact-section.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { Card } from "./ui/card"

export function ContactSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted')
    }

    return (
        <section id="contact" className="relative px-6 py-24 lg:px-8 bg-muted/30 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/3 h-[600px] w-[600px] rounded-full bg-accent-dynamic/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-[600px] w-[600px] rounded-full bg-muted/50 blur-3xl"></div>
                {/* Diagonal lines pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808006_1px,transparent_1px),linear-gradient(-45deg,#80808006_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
                    <div className="h-1 w-20 bg-accent-dynamic mx-auto rounded-full mb-4"></div>
                    <p className="text-lg text-muted-foreground">Let's discuss your next project or opportunity</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div>
                            <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
                            <p className="leading-relaxed text-muted-foreground">
                                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                                just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        <Card className="border-border bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dynamic/10 group-hover:bg-accent-dynamic/20 transition-colors">
                                        <Mail className="h-5 w-5 text-accent-dynamic" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Email</div>
                                        <a
                                            href="mailto:janreyminadev@gmail.com"
                                            className="text-sm text-muted-foreground hover:text-accent-dynamic transition-colors hover:underline cursor-pointer"
                                        >
                                            janreyminadev@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dynamic/10 group-hover:bg-accent-dynamic/20 transition-colors">
                                        <Phone className="h-5 w-5 text-accent-dynamic" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Phone</div>
                                        <a
                                            href="tel:+639476664793"
                                            className="text-sm text-muted-foreground hover:text-accent-dynamic transition-colors hover:underline cursor-pointer"
                                        >
                                            09476664793
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dynamic/10 group-hover:bg-accent-dynamic/20 transition-colors">
                                        <MapPin className="h-5 w-5 text-accent-dynamic" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Location</div>
                                        <div className="text-sm text-muted-foreground">Tarlac City</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="border-border bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    Name
                                </label>
                                <Input id="name" placeholder="John Doe" />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                                    Subject
                                </label>
                                <Input id="subject" placeholder="Project inquiry" />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                                    Message
                                </label>
                                <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                            </div>

                            <Button
                                onClick={handleSubmit}
                                className="w-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                            >
                                Send Message
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}