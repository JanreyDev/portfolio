"use client"

import { useState, useEffect, useRef } from "react"
import { Palette, Check } from "lucide-react"

function hexToOKLCH(hex: string): string {
    hex = hex.replace("#", "")
    const r = parseInt(hex.substring(0, 2), 16) / 255
    const g = parseInt(hex.substring(2, 4), 16) / 255
    const b = parseInt(hex.substring(4, 6), 16) / 255

    const lightness = 0.2126 * r + 0.7152 * g + 0.0722 * b
    const chroma = Math.max(r, g, b) - Math.min(r, g, b)

    let hue = 0
    if (chroma !== 0) {
        const max = Math.max(r, g, b)
        if (max === r) {
            hue = ((g - b) / chroma) % 6
        } else if (max === g) {
            hue = (b - r) / chroma + 2
        } else {
            hue = (r - g) / chroma + 4
        }
        hue = hue * 60
        if (hue < 0) hue += 360
    }

    const l = Math.min(0.75, Math.max(0.45, lightness * 1.2))
    const c = Math.min(0.25, Math.max(0.15, chroma * 0.8))

    return `${l.toFixed(2)} ${c.toFixed(2)} ${hue.toFixed(2)}`
}

function hslToHex(h: number, s: number, l: number): string {
    l /= 100
    const a = s * Math.min(l, 1 - l) / 100
    const f = (n: number) => {
        const k = (n + h / 30) % 12
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color).toString(16).padStart(2, '0')
    }
    return `#${f(0)}${f(8)}${f(4)}`
}

function hexToHSL(hex: string): { h: number, s: number, l: number } {
    hex = hex.replace("#", "")
    const r = parseInt(hex.substring(0, 2), 16) / 255
    const g = parseInt(hex.substring(2, 4), 16) / 255
    const b = parseInt(hex.substring(4, 6), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0, s = 0, l = (max + min) / 2

    if (max !== min) {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
            case g: h = ((b - r) / d + 2) / 6; break
            case b: h = ((r - g) / d + 4) / 6; break
        }
    }

    return { h: h * 360, s: s * 100, l: l * 100 }
}

export function ColorPicker() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState("#0891b2")
    const [hue, setHue] = useState(190)
    const [saturation, setSaturation] = useState(88)
    const [lightness, setLightness] = useState(37)
    const [copied, setCopied] = useState(false)
    const [isDragging, setIsDragging] = useState<'gradient' | 'hue' | null>(null)

    const gradientRef = useRef<HTMLDivElement>(null)
    const hueRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const stored = localStorage.getItem("accentColorHex")
        if (stored) {
            setSelectedColor(stored)
            const hsl = hexToHSL(stored)
            setHue(hsl.h)
            setSaturation(hsl.s)
            setLightness(hsl.l)
            const oklch = hexToOKLCH(stored)
            document.documentElement.style.setProperty("--accent", oklch)
        } else {
            const defaultOKLCH = hexToOKLCH("#0891b2")
            document.documentElement.style.setProperty("--accent", defaultOKLCH)
        }
    }, [])

    const changeAccentColor = (hex: string) => {
        setSelectedColor(hex)
        localStorage.setItem("accentColorHex", hex)
        const oklch = hexToOKLCH(hex)
        document.documentElement.style.setProperty("--accent", oklch)
    }

    const updateColorFromHSL = (h: number, s: number, l: number) => {
        const hex = hslToHex(h, s, l)
        changeAccentColor(hex)
    }

    const handleGradientClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!gradientRef.current) return
        const rect = gradientRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
        const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))

        const newSaturation = (x / rect.width) * 100
        const newLightness = 100 - (y / rect.height) * 100

        setSaturation(newSaturation)
        setLightness(newLightness)
        updateColorFromHSL(hue, newSaturation, newLightness)
    }

    const handleHueClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!hueRef.current) return
        const rect = hueRef.current.getBoundingClientRect()
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
        const newHue = (x / rect.width) * 360

        setHue(newHue)
        updateColorFromHSL(newHue, saturation, lightness)
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging === 'gradient' && gradientRef.current) {
            const rect = gradientRef.current.getBoundingClientRect()
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
            const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))

            const newSaturation = (x / rect.width) * 100
            const newLightness = 100 - (y / rect.height) * 100

            setSaturation(newSaturation)
            setLightness(newLightness)
            updateColorFromHSL(hue, newSaturation, newLightness)
        } else if (isDragging === 'hue' && hueRef.current) {
            const rect = hueRef.current.getBoundingClientRect()
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
            const newHue = (x / rect.width) * 360

            setHue(newHue)
            updateColorFromHSL(newHue, saturation, lightness)
        }
    }

    const handleMouseUp = () => {
        setIsDragging(null)
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDragging, hue, saturation, lightness])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(selectedColor.toUpperCase())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const gradientX = (saturation / 100) * 100
    const gradientY = (1 - lightness / 100) * 100
    const hueX = (hue / 360) * 100

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background transition-all hover:bg-accent/10 hover:scale-105"
                aria-label="Change accent color"
                style={{ color: selectedColor }}
            >
                <Palette className="h-5 w-5" />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 top-14 z-50 w-[280px] rounded-xl border border-border/40 bg-background p-4 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Hex Display */}
                        <div
                            className="mb-4 flex items-center justify-center gap-2 rounded-lg bg-muted/50 px-4 py-2.5 cursor-pointer hover:bg-muted/70 transition-colors group"
                            onClick={copyToClipboard}
                        >
                            <span className="text-base font-mono font-semibold tracking-wider">
                                {selectedColor.toUpperCase()}
                            </span>
                            {copied ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <svg className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            )}
                        </div>

                        {/* 2D Gradient Picker */}
                        <div
                            ref={gradientRef}
                            className="relative h-44 w-full cursor-crosshair rounded-lg overflow-hidden border-2 border-border/40 mb-3"
                            style={{
                                background: `linear-gradient(to bottom, transparent, black),
                                            linear-gradient(to right, white, hsl(${hue}, 100%, 50%))`
                            }}
                            onMouseDown={(e) => {
                                setIsDragging('gradient')
                                handleGradientClick(e)
                            }}
                            onClick={handleGradientClick}
                        >
                            {/* Color Picker Cursor */}
                            <div
                                className="absolute w-5 h-5 border-2 border-white rounded-full shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    left: `${gradientX}%`,
                                    top: `${gradientY}%`,
                                    boxShadow: '0 0 0 1.5px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                                }}
                            >
                                <div
                                    className="w-full h-full rounded-full"
                                    style={{ backgroundColor: selectedColor }}
                                />
                            </div>
                        </div>

                        {/* Hue Slider */}
                        <div
                            ref={hueRef}
                            className="relative h-3 w-full cursor-pointer rounded-full overflow-hidden border-2 border-border/40 mb-4"
                            style={{
                                background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
                            }}
                            onMouseDown={(e) => {
                                setIsDragging('hue')
                                handleHueClick(e)
                            }}
                            onClick={handleHueClick}
                        >
                            {/* Hue Slider Cursor */}
                            <div
                                className="absolute top-1/2 w-5 h-5 bg-white border-2 border-white rounded-full shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    left: `${hueX}%`,
                                    boxShadow: '0 0 0 1.5px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
                                    backgroundColor: `hsl(${hue}, 100%, 50%)`
                                }}
                            />
                        </div>

                        {/* Current Color Display */}
                        <div className="flex items-center justify-between rounded-lg border border-border/40 bg-muted/30 px-3 py-2.5 mb-3">
                            <span className="text-xs font-medium text-muted-foreground">Current</span>
                            <div
                                className="h-7 w-14 rounded-md border-2 border-border/40 shadow-sm"
                                style={{ backgroundColor: selectedColor }}
                            />
                        </div>

                        <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                            Pick any color and it updates instantly across the entire site
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}