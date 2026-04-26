import { useEffect, useRef, useState } from "react";

/*
    There is on issue to fix for this carousel...

    When the outgoing picture get's smooshed it's exit animation is being cancelled. So, the existing picture dissappears as the new one slides in instead of the exist happening simultaneously to the entry.
*/

export type CarouselPicture = {
    src: string;
    subText?: string;
}

type PictureDirection = 'left' | 'right'

const CAROUSEL_AUTO_GO_TIME = 6000;
const HUMAN_INTERACTION_WAIT_TIME = 60000;

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
        <div className="flex flex-col max-sm:w-full lg:w-4/5 sm:p-4">
            <div className="flex h-fit justify-center items-center overflow-hidden">
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
            <div className="flex sm:px-8 py-2 items-center">
                <MoveButton action={() => goToPicture(-1, HUMAN_INTERACTION_WAIT_TIME)} goLeft={true} />
                <div className="grow text-center flex flex-col max-sm:text-(--light-tertiary)">
                    <div>{pictures[picIdx].subText}</div>
                    <div>({picIdx +1} / {pictures.length})</div>
                </div>
                <MoveButton action={() => goToPicture(1, HUMAN_INTERACTION_WAIT_TIME)} goLeft={false} />
            </div>
        </div>
    )
}

const MoveButton = ({action, goLeft}:{action: () => void, goLeft: boolean}) => {
    const icon = goLeft ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right';
    return (
        <button 
            className="flex shrink mr-auto border sm:border-dashed hover:border-solid border-(--light-primary) h-1/2 cursor-pointer" 
            onClick={action}
            >
            <span className="material-icons ">{icon}</span>
            <span className="material-icons ">{icon}</span>
        </button>
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
                transition-transform
                data-[show=false]:hidden
                data-[incoming=false]:w-0

                data-[direction=left]:data-[incoming=true]:animate-slideinleft
                data-[direction=right]:data-[incoming=true]:animate-slideinright

                data-[direction=left]:data-[incoming=false]:animate-slideoutright
                data-[direction=right]:data-[incoming=false]:animate-slideoutleft
            `}
            >
            <img className="max-h-200 min-h-100" src={picture.src} alt={picture.subText ?? 'A bread picture.'} />
        </div>
    )
}

/*
    data-[direction=left]:data-[incoming=false]:animate-slideoutright
    data-[direction=right]:data-[incoming=false]:animate-slideoutleft

*/