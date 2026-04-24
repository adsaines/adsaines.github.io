import { useEffect, useRef, useState } from "react";

export type CarouselPicture = {
    src: string;
    subText?: string;
}

type PictureDirection = 'left' | 'right'

const CAROUSEL_AUTO_GO_TIME = 6000;
const HUMAN_INTERACTION_WAIT_TIME = 60000;

/*
    Lots of things to work out...

    1) the previous picture is still visible, it needs to go away completely
    2) sliding in from the left doesn't work right
    3) opacity isn't applying to animations
*/

export const PictureCarousel = ({ pictures }:{ pictures: CarouselPicture[] }) => {
    const [previousIdx, setPreviousIdx] = useState(0)
    const [picIdx, setPicIdx] = useState(0);
    const [direction, setDirection] = useState<PictureDirection>('right');
    const [trigger, setTrigger] = useState(0);
    const timeOutforNextPic = useRef<NodeJS.Timeout>(null)

    useEffect(() => {
        if(trigger !== 0){
            goToPicture(1);
        } else {
            setupNextPicMove(CAROUSEL_AUTO_GO_TIME);
        }
    }, [trigger])

    const goToPicture = (increment: number,useTime = CAROUSEL_AUTO_GO_TIME) => {
        setDirection(increment < 0 ? 'left' : 'right');
        setPreviousIdx(picIdx);

        const newPicIndex = picIdx + increment;

        if (newPicIndex >= pictures.length){
            setPicIdx(0);
        } else if (newPicIndex < 0){
            setPicIdx(pictures.length -1);
        } else {
            setPicIdx(newPicIndex);
        }

        setupNextPicMove(useTime);
    }

    const setupNextPicMove = (useTime: number) => {
        // TODO-RE: testing only
        console.log(useTime);

        if(timeOutforNextPic.current !== null){
            clearTimeout(timeOutforNextPic.current);
        }
        
        timeOutforNextPic.current = setTimeout(
            () => {
                setTrigger(trigger +1);
            }, 
            useTime
        )
    }

    return (
        <div className="flex flex-col max-sm:w-full w-4/5 p-4">
            <div className="w-full flex overflow-hidden">
                {
                    pictures.map((picture, picNum) => {
                        return (
                            <PictureBox 
                                key={`carousel-pic-${picNum}`}
                                picture={picture} 
                                direction={direction}
                                incoming={picIdx === picNum}
                                previousPic={previousIdx === picNum}
                                />
                        )
                    })
                }
            </div>
            <div className="flex px-8 py-2">
                <button 
                    className="flex shrink mr-auto border border-(--light-primary)" 
                    onClick={() => {
                        goToPicture(-1, HUMAN_INTERACTION_WAIT_TIME);
                    }}
                    >
                    <span className="material-icons ">keyboard_double_arrow_left</span>
                    <span className="material-icons ">keyboard_double_arrow_left</span>
                </button>
                <div className="grow text-center">
                    {pictures[picIdx].subText}({picIdx +1} / {pictures.length})
                </div>
                <button 
                    className="flex shrink ml-auto border border-(--light-primary)" 
                    onClick={() => {
                        goToPicture(1, HUMAN_INTERACTION_WAIT_TIME);
                    }}
                    >
                    <span className="material-icons ">keyboard_double_arrow_right</span>
                    <span className="material-icons ">keyboard_double_arrow_right</span>
                </button>
            </div>
        </div>
    )
}

const PictureBox = ({
    picture,
    direction,
    incoming,
    previousPic
}:{
    picture: CarouselPicture,
    direction: PictureDirection,
    incoming: boolean,
    previousPic: boolean,
}) => {
    return (
        <div 
            data-show={incoming || previousPic}
            data-direction={direction}
            data-incoming={incoming}
            className={`
                w-full 

                data-[show=false]:hidden

                data-[direction=left]:data-[incoming=true]:animate-slideinleft
                data-[direction=right]:data-[incoming=true]:animate-slideinright

                data-[direction=left]:data-[incoming=false]:animate-slideoutright
                data-[direction=right]:data-[incoming=false]:animate-slideoutleft
            `}
            >
            <img src={picture.src} alt={picture.subText ?? 'A bread picture.'} />
        </div>
    )
}