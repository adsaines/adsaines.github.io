'use client'

import { AmountsAndRatios, BreadOverview, BreadPurpose, KneadingAndWaiting, LetsBake, WaitTimes } from "./sections";

export default function Bread() {
    return (
        <article className="h-full overflow-auto">
            <div className="flex flex-col mb-4 gap-6 p-8 mx-auto max-w-350">
                <BreadPurpose />
                <BreadOverview />
                <AmountsAndRatios />
                <KneadingAndWaiting />
                <WaitTimes />
                <LetsBake />
            </div>
        </article>
    )
}