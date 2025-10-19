'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = ({children}: {children: React.ReactNode}) => {
    const path = usePathname()

    return (
        <div className="h-screen w-full flex flex-col">
            <div data-show={path !== '/'} className={`h-8 b-2 w-full data-[show="false"]:hidden`}>
                <Link href='resume'>Resume</Link>
            </div>
            {children}
        </div>
    )
}