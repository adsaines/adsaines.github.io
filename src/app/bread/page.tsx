import { GridFactory } from "@/projections/gridTableGenerators";
import { AmountsAndRatios, KneadingAndWaiting, WaitTimes } from "./sections";

export default function Bread() {
    return (
        <article className="h-full overflow-auto flex flex-col mb-4 gap-6 p-8">
            <AmountsAndRatios />
            <hr />
            <KneadingAndWaiting />
            <hr />
            <WaitTimes />
            <hr />
            <section>
                Now bake that loaf. Probably throw in a sex joke about jiggly things. Mention dutch oven, temperature, time, and loaf size. Make sure to note that crisp crust is not dependent on coating a loaf with anything but the amount of time cooked without a lid.
            </section>
        </article>
    )
}