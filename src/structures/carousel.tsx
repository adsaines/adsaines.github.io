import { useEffect, useRef, useState } from "react";

export type CarouselPicture = {
    src: string;
    subText?: string;
}

type PictureDirection = 'left' | 'right'

const CAROUSEL_AUTO_GO_TIME = 2000;
// set this to, like, a minute, once things are working
const HUMAN_INTERACTION_WAIT_TIME = 6000;

/*
    Lots of things to work out...

    1) the previous picture is still visible, it needs to go away completely
    2) sliding in from the left doesn't work right
    3) opacity isn't applying to animations
    4) standard loop does not actually iterate the picture beyond the first one
*/

export const PictureCarousel = ({ pictures }:{ pictures: CarouselPicture[] }) => {

    const [useStandardTime, setUseStandardTime] = useState(false);
    const [previousIdx, setPreviousIdx] = useState(0)
    const [picIdx, setPicIdx] = useState(0);
    const [direction, setDirection] = useState<PictureDirection>('right');
    const timeOutforNextPic = useRef<NodeJS.Timeout>(null)

    useEffect(() => {
        // TODO-RE: testing only
        console.log('carousel use effect, timeOutforNextPic', timeOutforNextPic);

        if(timeOutforNextPic.current === null){
            goToNextPicture();
        }
    }, [])

    const goToNextPicture = () => {
        // TODO-RE: testing only
        console.log('goToNextPicture, picIdx: ', picIdx);
        
        setPreviousIdx(picIdx);
        setDirection('right');
        if(picIdx >= pictures.length){
            // TODO-RE: testing only
            console.log('goToNextPicture, picIdx >= pictures.length: ', picIdx >= pictures.length);

            setPicIdx(0);
        } else {
            // TODO-RE: testing only
            console.log('goToNextPicture, picIdx + 1: ', picIdx + 1);

            setPicIdx(picIdx + 1);
        }
        
        defineNextPicMove();
    }

    const goToPreviousPicture = () => {
        // TODO-RE: testing only
        console.log('goToPreviousPicture, picIdx: ', picIdx);
        
        setPreviousIdx(picIdx);
        setDirection('left');
        if(picIdx <= 0){
            setPicIdx(pictures.length -1);
        } else {
            setPicIdx(picIdx - 1);
        }
        
        defineNextPicMove();
    }

    const defineNextPicMove = () => {
        if(timeOutforNextPic.current !== null){
            clearTimeout(timeOutforNextPic.current);
        }
        
        if(useStandardTime){
            timeOutforNextPic.current = setTimeout(
                () => {
                    goToNextPicture()
                }, 
                CAROUSEL_AUTO_GO_TIME
            )
        } else {
            timeOutforNextPic.current = setTimeout(
                () => {
                    goToNextPicture();
                    setUseStandardTime(true);
                }, 
                HUMAN_INTERACTION_WAIT_TIME
            )
        }
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
                <button className="flex shrink mr-auto border border-(--light-primary)" onClick={goToPreviousPicture}>
                    <span className="material-icons ">keyboard_double_arrow_left</span>
                    <span className="material-icons ">keyboard_double_arrow_left</span>
                </button>
                <div className="grow text-center">
                    {pictures[picIdx].subText}({picIdx +1} / {pictures.length})
                </div>
                <button className="flex shrink ml-auto border border-(--light-primary)" onClick={goToNextPicture}>
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
            data-incoming={true}
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