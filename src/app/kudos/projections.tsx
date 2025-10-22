import { useState } from "react"
import NextJsLightBackground from '@/images/nextjs-icon-light-background.png'
import GoogleIcon from '@/images/google-logo.png'

// TODO: might have to figure out how to keep kudos from moving down a line, possible grow it into a pop-up

const KudosBox = ({name, blurb, logoSrc}:{name: string, blurb: string, logoSrc: string}) => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setShow(!show);
        setClicked(!clicked);
    }

    return (
        <button onClick={onClick} className="flex flex-col gap-4 border-2 border-dashed hover:border-double hover:border-(--must-see-me) group p-6 m-6 max-w-[550px] justify-center items-center cursor-pointer">
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

export const GoogleMaterialIconsKudos = () => {
    const blurb = `It sure it nice to have a professional grade library with a free tier that doesn't make me sign up for it. I only need a few of these and it's saves a lot of time and effort that would have been spent generating SVG's for commonly used items.`

    return (
        <KudosBox blurb={blurb} name="Google Material Icons" logoSrc={GoogleIcon.src}/>
    )
}

export const ReactKudos = () => {
    const blurb = `I do enjoy being able to code in a functional paradigm. Seriously, it is really nice to have access and recognition for all of the front end work so that you don't break everything because you mistyped or capitlized the wrong letter.`

    return (
        <KudosBox blurb={blurb} name="React" logoSrc='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'/>
    )
}

export const NextJsKudos = () => {
    const blurb = `I didn't major in computer science. I don't know how to write a server. This works and does what I don't have the time to figure out.`

    return (
        <KudosBox blurb={blurb} name="NextJs" logoSrc={NextJsLightBackground.src}/>
    )
}