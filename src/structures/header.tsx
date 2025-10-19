'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import linkedIn from "@/images/linked-in-white-background.png"

export const Header = ({children}: {children: React.ReactNode}) => {
    const path = usePathname()

    return (
        <div className="h-screen w-full flex flex-col">
            <nav 
                aria-label="Pages and contact links."
                data-show={path !== '/'} 
                className={`p-2 bg-cyan-600 h-10 b-2 flex w-full data-[show="false"]:hidden justify-between items-center`}
                >
                <div className="flex gap-1">
                    <HeaderLink hoverText="Resume" name="Resume" path="resume" />
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

const HeaderLink = ({path, name, hoverText}: {path: string, name: string, hoverText: string}) => {
    return (
        <Link 
            className="bg-slate-100 rounded-lg py-1 px-2 border hover:border-2 font-medium font-black hover:font-bold hover:bg-slate-200 border-slate-700"
            href={path} 
            aria-label={hoverText}
            >
            {name}
        </Link>
    )
}