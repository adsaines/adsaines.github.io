import { AmountsAndRatios, KneadingAndWaiting, LetsBake, WaitTimes } from "./sections";

export default function Bread() {
    return (
        <article className="h-full overflow-auto flex flex-col mb-4 gap-6 p-8">
            <AmountsAndRatios />
            <hr />
            <KneadingAndWaiting />
            <hr />
            <WaitTimes />
            <hr />
            <LetsBake />
        </article>
    )
}