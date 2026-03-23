export default function Bread() {
    return (
        <article className="h-full overflow-auto flex flex-col mb-4 gap-6 p-8">
            <section className="flex flex-col gap-4">
                Here I will show a basic table of ingredient amounts for a hearth loaf. Noting that you should weight the compactable ingredients.
                <div className="grid grid-cols-3 w-1/2 m-auto">
                    <div className="grid-cell">Ingredient</div>
                    <div className="grid-cell">Weight (grams)</div>
                    <div className="grid-cell">Percent (%)</div>
                </div>
            </section>
            <section className="flex flex-col w-full">
                <div>
                    Here will describe the number and times of kneading required to turn the ingredients into a mass that will produce a soft bread loaf.
                </div>
                <div className="grid grid-cols-2 w-1/2 m-auto">
                    <div className="grid-cell">freshly mixed</div>
                    <div className="grid-cell">first turn</div>
                    <div className="grid-cell">second turn</div>
                    <div className="grid-cell">third turn</div>
                </div>
                <div>
                    Final picture of what the loaf should look like when you split it and place it in the banneton.
                </div>
            </section>
            <section>
                This will talk about why my wait times won't necessarily be your wait times.
            </section>
            <section>
                Now bake that loaf. Probably throw in a sex joke about jiggly things. Mention dutch oven, temperature, time, and loaf size. Make sure to note that crisp crust is not dependent on coating a loaf with anything but the amount of time cooked without a lid.
            </section>
        </article>
    )
}