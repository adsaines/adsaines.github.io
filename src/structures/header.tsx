'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import linkedIn from "@/images/linked-in-white-background.png"
import gitHubLight from "@/images/github-inertocat-light.png"
import { Dispatch, SetStateAction, useState } from "react"

export const Header = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="h-screen w-full flex flex-col bg-(--dark-primary) text-(--light-primary)">
            <WideMediaHeader />
            {children}
            <SmallMediaHeader />
        </div>
    )
}

const SmallMediaHeader = () => {
    const path = usePathname()

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <nav
                aria-label="Open page navigation overlay"
                data-show={path !== '/'} 
                data-expanded={expanded}
                className={`md:hidden data-[show="false"]:hidden px-2 py-6 bg-(--dark-tertiary) h-12 flex items-center`}
                >
                    <button className="material-icons" onClick={() => setExpanded(!expanded)}>menu</button>
            </nav>
            <div data-show={expanded} className="data-[show=false]:hidden py-6 flex flex-col gap-6 justify-center items-center border-b-4 border-double border-(--light-primary)">
                <HamburgerMenuLink 
                    title="home" 
                    path="/" 
                    selected={path === 'localhost:3000/'}
                    setExpanded={setExpanded}
                    />
                <HamburgerMenuLink
                    title="resume" 
                    path="resume" 
                    selected={path.includes('resume')}
                    setExpanded={setExpanded}
                    />
                <HamburgerMenuLink
                    title="thanks" 
                    path="thanks" 
                    selected={path.includes('thanks')}
                    setExpanded={setExpanded}
                    />
                <HamburgerMenuLink
                    title="story_time" 
                    path="stories" 
                    selected={path.includes('stories')}
                    setExpanded={setExpanded}
                    />
                <HamburgerMenuLink
                    title="settings" 
                    path="settings" 
                    selected={path.includes('settings')}
                    setExpanded={setExpanded}
                    />
            </div>
        </>
    )
}

const HamburgerMenuLink = ({title, path, selected, setExpanded}:{title: string, path: string, selected: boolean, setExpanded: Dispatch<SetStateAction<boolean>>}) => {
    if(selected){
        return (
            <span
                className="bg-(--dark-tertiary) py-2 px-4 w-2/3 text-center font-semibold text-xl border-1"
                >
                {title}
            </span>
        )
    }

    return (
        <Link 
            className="bg-(--dark-secondary) py-2 px-4 w-2/3 text-center font-semibold text-xl border-1 border-(--light-primary)" 
            href={`/${path}`}
            onClick={() => setExpanded(false)}
            >
                {title}
        </Link>
    )
}

const WideMediaHeader = () => {
    const path = usePathname()

    return (
        <nav 
            aria-label="Pages"
            data-show={path !== '/'} 
            className={`max-sm:hidden data-[show="false"]:hidden px-2 py-6 gap-2 bg-(--dark-tertiary) h-12 b-2 flex items-center overflow-x-auto overflow-y-hidden`}
            >
            <HeaderLink 
                name="home" 
                path="/" 
                selected={path === 'localhost:3000/'}
                hoverText="landing page navigation"
                />
            <HeaderLink
                name="resume" 
                path="resume" 
                selected={path.includes('resume')}
                hoverText="learn more about my career and experience"
                />
            <HeaderLink
                name="thanks" 
                path="thanks" 
                selected={path.includes('thanks')}
                hoverText="technological libraries that I'm thankful for"
                />
            <HeaderLink
                name="story_time" 
                path="stories" 
                selected={path.includes('stories')}
                hoverText="entertaining and elucidating stories about my experiences"
                />
            <HeaderLink
                name="settings" 
                path="settings" 
                selected={path.includes('settings')}
                hoverText="could find some fun switches"
                />
            <div className="grow">
            </div>
            <SocialLinks />
        </nav>
    )
}

const HeaderLink = ({path, name, hoverText, selected}: {path: string, name: string, hoverText: string, selected: boolean}) => {
    if(selected){
        return (
            <span
                className="py-1 px-2 border-2 font-bold border-1 text-(--light-primary) border-(--light-primary)"
                aria-label={hoverText}
                >
                {name}
            </span>
        )
    }

    return (
        <Link 
            className="py-1 px-2 border-2 font-bold border-1 text-(--light-tertiary) border-(--dark-tertiary) hover:border-(--light-tertiary) "
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