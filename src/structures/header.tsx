'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import linkedIn from "@/images/linked-in-white-background.png"
import gitHubLight from "@/images/github-inertocat-light.png"

export const Header = ({children}: {children: React.ReactNode}) => {
    const path = usePathname()

    return (
        <div className="h-screen w-full flex flex-col bg-(--background-theme-primary) text-(--text-theme-primary)">
            <nav 
                aria-label="Pages and contact links."
                data-show={path !== '/'} 
                className={`px-2 max-sm:py-6 md:py-6 gap-2 bg-(--background-theme-tertiary) h-12 b-2 flex data-[show="false"]:hidden items-center overflow-x-auto overflow-y-hidden`}
                >
                <div className="md:hidden">
                    <span className="material-icons">swap_horizontal_circle</span>
                </div>
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
                    name="thanks" 
                    path="thanks" 
                    selected={path.includes('thanks')}
                    />
                <HeaderLink 
                    hoverText="Stories of my dev career" 
                    name="story_time" 
                    path="stories" 
                    selected={path.includes('stories')}
                    />
                <HeaderLink 
                    hoverText="Things that will alter the contents or flow of the pages." 
                    name="settings" 
                    path="settings" 
                    selected={path.includes('settings')}
                    />
                <div className="grow max-sm:hidden">
                </div>
                <SocialLinks />
                <div className="md:hidden">
                    <span className="material-icons">swap_horizontal_circle</span>
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

export const SocialLinks = () => {
    return (
        <>
            <a 
                href="https://www.linkedin.com/in/AlexSaines"
                target="_blank"
                className="flex justify-center items-center w-8"
                >
                <img className="w-8" src={linkedIn.src} alt={'Linked In'} />
            </a>
            <a 
                href="https://github.com/adsaines"
                target="_blank"
                className="flex justify-center items-center w-8"
                >
                <img className="w-8" src={gitHubLight.src} alt={'Github'} />
            </a>
        </>
    )
}