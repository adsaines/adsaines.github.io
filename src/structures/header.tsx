'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import linkedIn from "@/images/linked-in-white-background.png"

export const Header = ({children}: {children: React.ReactNode}) => {
    const path = usePathname()

    return (
        <div className="h-full w-full flex flex-col bg-(--background-theme-primary) text-(--text-theme-primary)">
            <nav 
                aria-label="Pages and contact links."
                data-show={path !== '/'} 
                className={`p-2 bg-(--background-theme-tertiary) h-12 b-2 flex w-full data-[show="false"]:hidden justify-between items-center`}
                >
                <div className="flex gap-1">
                    <HeaderLink 
                        hoverText="Home" 
                        name="home" 
                        path="/" 
                        selected={path === 'localhost:3000/'}
                        />
                    <HeaderLink 
                        hoverText="Resume" 
                        name="resume" 
                        path="resume" 
                        selected={path.includes('resume')}
                        />
                    <HeaderLink 
                        hoverText="Libraries I used to make this page, and why I like them" 
                        name="kudos" 
                        path="kudos" 
                        selected={path.includes('kudos')}
                        />
                    <HeaderLink 
                        hoverText="Stories of my dev career" 
                        name="story_time" 
                        path="stories" 
                        selected={path.includes('stories')}
                        />
                </div>
                <div className="flex">
                    <a 
                        href="https://www.linkedin.com/in/AlexSaines"
                        target="_blank"
                        >
                        <img className="w-8" src={linkedIn.src} alt={'Linked In'} />
                    </a>
                </div>
            </nav>
            {children}
        </div>
    )
}

const HeaderLink = ({path, name, hoverText, selected}: {path: string, name: string, hoverText: string, selected: boolean}) => {
    if(selected){
        return (
            <span
                className="py-1 px-2 border-2 font-bold border-1 text-(--must-see-me) border-(--must-see-me)"
                aria-label={hoverText}
                >
                {name}
            </span>
        )
    }

    return (
        <Link 
            className="py-1 px-2 border-2 font-bold border-1 text-(--text-theme-tertiary) border-(--background-theme-tertiary) hover:border-(--text-theme-tertiary) "
            href={path} 
            aria-label={hoverText}
            >
            {name}
        </Link>
    )
}