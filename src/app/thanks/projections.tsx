import { useState } from "react"
import NextJsLightBackground from '@/images/nextjs-icon-light-background.png'
import GoogleIcon from '@/images/google-logo.png'
import NpmIcon from '@/images/npm.png'
import Javascript from '@/images/javascript.png'

const AvowalBox = ({name, blurb, logoSrc}:{name: string, blurb: string, logoSrc: string}) => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setShow(!show);
        setClicked(!clicked);
    }

    return (
        <button onClick={onClick} className="flex flex-col gap-4 border-2 border-dashed hover:border-double hover:border-(--must-see-me) group p-6 m-6 max-w-[550px] min-w-[350px] justify-center items-center cursor-pointer">
            <div className="flex flex-col">
                <GeneralLogo isOpen={clicked} name={name} />
            </div>
            <div data-show={clicked} className="text-center items-center data-[show='false']:hidden w-12">
                <img src={logoSrc} alt={`${name} logo`} />
            </div>
            <div data-show={show} className="text-wrap data-[show='false']:hidden">
                {blurb}
            </div>
        </button>
    )
}

const GeneralLogo = ({isOpen,name}:{isOpen: boolean,name: string}) => {
    return ((
        <>
            <div className="flex justiy-start items-center">
                <hr className="grow border border-4 border-double" />
            </div>
            <div className="flex justify-between items-center">
                <div className="group-hover:invisible flex text-center items-center">
                    <span className="material-icons ">keyboard_double_arrow_right</span>
                </div>
                <div 
                    data-show={!isOpen}
                    className="group-hover:visible invisible flex text-center items-center data-[show='false']:hidden"
                    >
                    <span className="material-icons">keyboard_double_arrow_down</span>
                </div>
                <div 
                    data-show={isOpen}
                    className="group-hover:visible invisible flex text-center items-center data-[show='false']:hidden"
                    >
                    <span className="material-icons">keyboard_double_arrow_up</span>
                </div>
                
                <div className="p-4 text-xl">{name}</div>

                <div 
                    data-show={!isOpen}
                    className="group-hover:visible invisible flex text-center items-center data-[show='false']:hidden"
                    >
                    <span className="material-icons">keyboard_double_arrow_down</span>
                </div>
                <div 
                    data-show={isOpen}
                    className="group-hover:visible invisible flex text-center items-center data-[show='false']:hidden"
                    >
                    <span className="material-icons">keyboard_double_arrow_up</span>
                </div>
                <div className="group-hover:invisible flex text-center items-center">
                    <span className="material-icons ">keyboard_double_arrow_left</span>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <hr className="grow border border-4 border-double" />
            </div>
        </>
    )
    )
}

export const GoogleMaterialIconsThanks = () => {
    const blurb = `It sure is nice to have a professional grade library with a free tier that doesn't make me sign up for it. I only need a few of these and it's saves a lot of time and effort that would have been spent generating SVG's for commonly used items.`

    return (
        <AvowalBox blurb={blurb} name="Google Icons" logoSrc={GoogleIcon.src}/>
    )
}

export const ReactThanks = () => {
    const blurb = `I do enjoy being able to code in a functional paradigm. I was lost before I existed in this world of functions.`

    return (
        <AvowalBox blurb={blurb} name="React" logoSrc='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'/>
    )
}

export const NextJsThanks = () => {
    const blurb = `I don't know how to write a server. This works right out of the box and can be ported to cloud environments very easily. Sending love.`

    return (
        <AvowalBox blurb={blurb} name="NextJs" logoSrc={NextJsLightBackground.src}/>
    )
}

export const NpmThanks = () => {
    const blurb = `I was pleasantly surprised when I started coding that I didn't have to worry that much about keeping packages up to date. One of my formative memories from middle and high school was juggling all of the installs it took to bring my computer back to life every time I deleted the wrong folder or screwed up the registry pirating a game for our next LAN party. My appreciation for a reliable low level service that keeps all of the odds and ends in check.`

    return (
        <AvowalBox blurb={blurb} name="NPM" logoSrc={NpmIcon.src}/>
    )
}

export const LiveScriptThanks = () => {
    const blurb = `Javascript is my #1 language. Typescript is a close second. I would be a sad man if I couldn't use the magic trio of array functionality. I give my heart to you... map, filter, and reduce.`

    return (
        <AvowalBox blurb={blurb} name="Javascript" logoSrc={Javascript.src}/>
    )
}