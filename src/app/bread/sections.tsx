import { GridFactory } from "@/projections/gridTableGenerators"
import knead1 from '@/images/Bread_Knead_1.jpg'
import knead2 from '@/images/Bread_Knead_2.jpg'
import knead3 from '@/images/Bread_Knead_3.jpg'
import knead4 from '@/images/Bread_Knead_4.jpg'
import rise1 from '@/images/Bread_Rise_1.jpg'

export const AmountsAndRatios = () => {
    return (
        <section className="flex gap-4 px-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-xl text-(--light-secondary)">
                    Amounts & Ratios
                </h2>
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

export const KneadingAndWaiting = () => {
    return (
        <section className="flex flex-col w-full gap-4 px-8">
            <h2 className="text-center text-xl text-(--light-secondary)">
                Kneading and Folding
            </h2>
            <p>
                Once the ingredients are chosen and selected... 
            </p>
            <ul className="list-decimal pl-8">
                <li>
                    <span className="text-(--light-tertiary)">MIX AND WAIT</span>: mix all of the ingreadients together in a big bowl. Mix until there is no loose flour in the bowl. I use a fork and then turn it over with my hands when the fork no longer works. Yes, you can use a stand mixer. Cover, then wait 30 minutes.
                </li>
                <li>
                    <span className="text-(--light-tertiary)">FOLD AND WAIT (1/3)</span>: uncover the dough and wet your hands. Stick them under the faucet and get 'em dripping wet. Then take your hands and reach under the dough, grab the bottom center of the dough ball, and pull it up and over so that the bottom of the dough goes all of the way across the top. Turn the bowl a quarter turn and pull the bottom over the top again. Repeat for all of the cardinal directions until you have fully turned over the dough and it is starting to resist your folds. Cover the dough and wait another 30 minutes.
                </li>
                <li>
                    <span className="text-(--light-tertiary)">FOLD AND WAIT (2/3)</span>: Repeat the previous step.
                </li>
                <li>
                    <span className="text-(--light-tertiary)">FOLD AND WAIT (3/3)</span>: Repeat the previous step.
                </li>
                <li>
                    <span className="text-(--light-tertiary)">&#191;&#191; fold and wait ?? (4/3)</span>: If after three folds and waits the dough is loose and lacks tension on the edges then you want to do some more iterations of folding and waiting, hopefully just one more.
                </li>
                <li>
                    <span className="text-(--light-tertiary)">Move to a banneton</span>: Once the dough is mostly smooth and has some tension after a waiting period it is ready for the final fold. You want to use a <a className="text-(--external-link) hover:underline" href="https://www.youtube.com/watch?v=1HN4heVooA0" target="_blank">letter fold</a> and then dust the dough with flour and move it to a <a className="text-(--external-link) hover:underline" href="https://letmegooglethat.com/?q=banneton+basket" target="_blank">banneton basket.</a> For good measure, and no sticking issues, flour the banneton as well.
                </li>
            </ul>
            <div className="grid grid-cols-2 w-3/4 m-auto gap-4 p-4">
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead1.src} alt="freshly mixed"/>
                    <p>freshly mixed</p>
                </div>
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead2.src} alt="first fold"/>
                    <p>first fold</p>
                </div>
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead3.src} alt="second fold"/>
                    <p>second fold</p>
                </div>
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead4.src} alt="third fold"/>
                    <p>third fold</p>
                </div>
            </div>
            <p>
                After all of the work, you'll end up with a dough lump in a basket. It doesn't look very pretty now, but once it has risen it will smooth out and you'll begin to behold the beauty of a well done bread loaf.
            </p>
            <div className="flex flex-col text-center gap-2 w-1/2 mx-auto">
                <img src={rise1.src} alt="folded and in it's banneton"/>
                <p>folded and in it's banneton</p>
            </div>
        </section>
    )
}