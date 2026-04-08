import { GridFactory } from "@/projections/gridTableGenerators"

export const AmountsAndRatios = () => {
    return (
        <section className="flex gap-4">
            <div className="flex flex-col gap-4">
                <div className="text-center text-xl text-(--light-secondary)">
                    Amounts & Ratios
                </div>
                <div className="flex justify-start gap-4">
                    <div className="flex flex-col gap-2">
                        <p>
                            The importance of measurements cannot be overstated in the world of baking. Any ingredient that can be compacted will not provide the same amount when mesaured using volumes (cups / tablespoons / liters). For flour measurements you must add by weight. I use grams becuase my sources all use grams; thus my notes are also in grams.
                        </p>
                        <p>
                            Percentages in baking are represented as ingredient weight / total flour weight. Thus, in this pages example, the total flour weight is 500 grams, and the percentages are all (ingredient weight) / 500.
                        </p>
                    </div>
                    <div className="flex justify-start w-1/2 shrink-0">
                        <div className="grid grid-cols-3 w-full m-auto">
                            <GridFactory.Headers 
                                headers={['Ingredient', 'Weight (grams)', 'Percent (%)']} 
                                />
                            <hr className="col-span-3 pb-2 mt-2" />
                            <GridFactory.Row 
                                data={['Flour: All Purpose','400','80']}
                                />
                            <GridFactory.Row 
                                data={['Flour: Whole Wheat','100','20']}
                                />
                            <GridFactory.Row 
                                data={['Water','350','70']}
                                />
                            <GridFactory.Row 
                                data={['Starter','75','15']}
                                />
                            <GridFactory.Row 
                                data={['Salt','10','2']}
                                />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>
                        Hearth breads (classic sourdough loaves) have much in common with each other. Bakers over the years have zeroed in on several common practices that you will find helpful to acknowledge and not adjust as you begin your bread baking journey.
                    </p>
                    <p className="pl-4">
                        Commonality #1: you need salt. Around 2% is standard. Without salt your loaf will be bland.
                    </p>
                    <p className="pl-4">
                        Commonality #2: most of your loaf should consist of all purpose flour. That is white flour with a protein percentage of 11-12%. This provides the best rise and allows for stretchier less crumbly bread.
                    </p>
                    <p className="pl-4">
                        Commonality #3: If adding additional ingredients to you bread, soak those ingredients before adding them. This includes any nuts, seeds, dried fruits, herbs... etc. The moisture content in the additions must exist and not mess with the liquid percentage of the base loaf.
                    </p>
                </div>
            </div>
        </section>
    )
}