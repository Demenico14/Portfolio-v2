'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#why-mdl' },
    { name: 'Contact', href: '#contact' },
]

type HeroHeaderProps = {
    onColorPresetChange?: (colors: string[]) => void
}

export const HeroHeader = ({ onColorPresetChange: _onColorPresetChange }: HeroHeaderProps) => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    const closeMenu = () => setMenuState(false)

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : undefined}
                className="fixed z-20 w-full pt-2 px-4">
                <div className={cn(
                    'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
                    scrolled && 'bg-white/70 backdrop-blur-2xl shadow-sm'
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex items-center justify-between gap-6 py-3 duration-200 lg:py-6', scrolled && 'lg:py-4')}>

                        {/* Logo */}
                        <Link href="#home" className="flex items-center gap-2 shrink-0">
                            <span className={cn('font-serif font-bold text-lg tracking-tight', scrolled ? 'text-foreground' : 'text-white')}>MDL</span>
                            <span className={cn('hidden sm:block h-4 w-px', scrolled ? 'bg-foreground/20' : 'bg-white/30')} />
                            <span className={cn('hidden sm:block font-sans text-xs tracking-widest uppercase', scrolled ? 'text-foreground/65' : 'text-white/60')}>Modern Digital Labs</span>
                        </Link>

                        {/* Desktop nav links */}
                        <ul className="hidden lg:flex gap-8 text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={cn('block duration-150', scrolled ? 'text-foreground/60 hover:text-foreground' : 'text-white/70 hover:text-white')}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop right: Contact Us button */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                asChild
                                size="sm"
                                className={cn(
                                    'rounded-full px-5 font-semibold text-sm',
                                    scrolled
                                        ? 'bg-foreground text-background hover:bg-foreground/90'
                                        : 'bg-white text-foreground hover:bg-white/90'
                                )}
                            >
                                <Link href="#contact">Contact Us</Link>
                            </Button>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            aria-expanded={menuState}
                            aria-controls="mobile-menu"
                            className="relative z-20 -m-2 p-2 block lg:hidden">
                            {menuState
                                ? <X className={cn('size-6', scrolled ? 'text-foreground' : 'text-white')} />
                                : <Menu className={cn('size-6', scrolled ? 'text-foreground' : 'text-white')} />
                            }
                        </button>
                    </motion.div>

                    {/* Mobile menu drawer */}
                    {menuState && (
                        <div id="mobile-menu" className="lg:hidden pb-6 rounded-2xl mb-3 border px-4 pt-4 bg-white/90 backdrop-blur-xl border-black/10">
                            <ul className="flex flex-col divide-y divide-border">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block py-3.5 text-base font-medium duration-150 text-foreground/70 hover:text-foreground">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5">
                                <Button
                                    asChild
                                    size="sm"
                                    className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm"
                                >
                                    <Link href="#contact" onClick={closeMenu}>Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}
