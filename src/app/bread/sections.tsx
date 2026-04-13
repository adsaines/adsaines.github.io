import { GridFactory } from "@/projections/gridTableGenerators"
import knead1 from '@/images/Bread_Knead_1.jpg'
import knead2 from '@/images/Bread_Knead_2.jpg'
import knead3 from '@/images/Bread_Knead_3.jpg'
import knead4 from '@/images/Bread_Knead_4.jpg'
import rise1 from '@/images/Bread_Rise_1.jpg'
import rise2 from '@/images/Bread_Rise_2.jpg'
import rise4 from '@/images/Bread_Rise_4.jpg'
import Marking2 from '@/images/Bread_Marking_2.jpg'
import Baking1 from '@/images/Bread_Baking_1.jpg'
import Baking2 from '@/images/Bread_Baking_2.jpg'
import Baking3 from '@/images/Bread_Baking_3.jpg'
import Baked1 from '@/images/Bread_Baked_1.jpg'
import Baked2 from '@/images/Bread_Baked_2.jpg'
import Baked4 from '@/images/Bread_Baked_4.jpg'

const AmountsTable = () => {
    return (
        <div className="grid grid-cols-3 w-full m-auto">
            <GridFactory.Headers 
                headers={['Ingredient', 'Weight (grams)', 'Percent (%)']} 
                />
            <hr className="col-span-3 pb-2 mt-2 sm:border-t-2" />
            <GridFactory.Row 
                data={['Flour: All Purpose','400','80']}
                />
            <hr className="col-span-3 pb-2 mt-2 border-dashed lg:hidden" />
            <GridFactory.Row 
                data={['Flour: Whole Wheat','100','20']}
                />
            <hr className="col-span-3 pb-2 mt-2 border-dashed lg:hidden" />
            <GridFactory.Row 
                data={['Water','350','70']}
                />
            <hr className="col-span-3 pb-2 mt-2 border-dashed lg:hidden" />
            <GridFactory.Row 
                data={['Starter','75','15']}
                />
            <hr className="col-span-3 pb-2 mt-2 border-dashed lg:hidden" />
            <GridFactory.Row 
                data={['Salt','10','2']}
                />
        </div>
    )
}

export const AmountsAndRatios = () => {
    return (
        <section className="flex gap-4 px-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-xl text-(--light-secondary)">
                    Amounts & Ratios
                </h2>
                <div className="flex max-sm:flex-col justify-start gap-4">
                    <div className="flex flex-col gap-2">
                        <p>
                            The importance of measurements cannot be overstated in the world of baking. Any ingredient that can be compacted will not provide the same amount when mesaured using volumes (cups / tablespoons / liters). For flour measurements you must add by weight. I use grams becuase my sources all use grams; thus my notes are also in grams.
                        </p>
                        <p>
                            Percentages in baking are represented as ingredient weight / total flour weight. Thus, in this pages example, the total flour weight is 500 grams, and the percentages are all (ingredient weight) / 500.
                        </p>
                    </div>
                    <div className="flex justify-start sm:w-1/2 shrink-0">
                        <AmountsTable />
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
            <ul className="list-decimal max-sm:pl-4 sm:pl-8">
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
            <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:w-3/4 max-sm:w-full m-auto gap-4 sm:p-4">
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead1.src} alt="freshly mixed"/>
                    <p className="max-sm:text-(--light-tertiary)">freshly mixed</p>
                </div>
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead2.src} alt="first fold"/>
                    <p className="max-sm:text-(--light-tertiary)">first fold</p>
                </div>
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead3.src} alt="second fold"/>
                    <p className="max-sm:text-(--light-tertiary)">second fold</p>
                </div>
                <div className="grid-cell flex flex-col text-center gap-2">
                    <img src={knead4.src} alt="third fold"/>
                    <p className="max-sm:text-(--light-tertiary)">third fold</p>
                </div>
            </div>
            <p>
                After all of the work, you'll end up with a dough lump in a basket. It doesn't look very pretty now, but once it has risen it will smooth out and you'll begin to behold the beauty of a well done bread loaf.
            </p>
            <div className="flex flex-col text-center gap-2 w-1/2 max-sm:w-full max-lg:w-3/4 mx-auto">
                <img src={rise1.src} alt="folded and in it's banneton"/>
                <p className="max-sm:text-(--light-tertiary)">folded and in it's banneton</p>
            </div>
        </section>
    )
}

export const WaitTimes = () => {
    return (
        <section className="flex flex-col w-full gap-4 px-8">
            <h2 className="text-center text-xl text-(--light-secondary)">
                Waiting / Proofing
            </h2>
            <h3 className="text-lg text-(--light-tertiary)">
                TLDR
            </h3>
            <p>
                It your kitchen hovers around ~60 deg f, give your bread ~10 hours.
            </p>
            <p>
                It your kitchen hovers around ~70 deg f, give your bread ~7 hours.
            </p>
            <p>
                It your kitchen is hotter than 75 deg f, give it ~4 hours, and check every hour after if it's not done.
            </p>
            <h3 className="text-lg text-(--light-tertiary)">
                Proofing is highly reliant on temperature.
            </h3>
            <p>
                In the winter I mix and fold after the kids are in bed. Then let the dough proof overnight on the counter; 9-12 hours. I start the oven when I wake up and bake over the course of the morning.
            </p>
            <p>
                In the spring I mix (1-2pm), fold (done around 4pm), and proof (until 10 or midnight) in the afternoon/evening. I have to refrigerate the dough overnight or bake late.
            </p>
            <p>
                The difference? In the winter my kitchen's ambient temperature is 60-65. In the spring it's 70-75. About a 10 degree difference means that my proofing time goes from ~10 to ~7 hours. If you also have a cold winter kitchen and want to speed up the process; buy a <a className="text-(--external-link) hover:underline max-sm:underline" href="https://www.amazon.com/proofing-box/s?k=proofing+box" target="_blank">proofing box</a>. They aren't too expensive and can fit 2 loaves of bread comfortably.
            </p>
            <p>
                Do note, that the amount of time your bread proofs does effect the overall flavor. A loaf that has proofed longer at lower temperatures has a more "sour" flavor.
            </p>
            <h3 className="text-lg text-(--light-tertiary)">
                When your dough is ready you can refrigerate it...
            </h3>
            <p>
                ...for up to two days without changing baking times or conditions. I haven't tried it any longer and the folks that I read and watch generally don't refrigerate the loaves for more than 24 hours purposefully.
            </p>
            <p>
                I like to mix, fold, and proof over the course of one day, then refrigerate over night. It adds some flavor to the bread and makes it very easy to mark (score).
            </p>
        </section>
    )
}

export const LetsBake = () => {
    return (
        <section className="flex flex-col w-full gap-4 px-8">
            <h2 className="text-center text-xl text-(--light-secondary)">
                Baking Time
            </h2>
            <div className="flex max-sm:flex-col gap-4">
                <div className="flex flex-col gap-4 justify-center">
                    <p>
                        It's risen! What was lumpy is now smooth and unblemished.
                    </p>
                    <p>
                        Note that the dough has expanded and fills the basket fully, but is not overflowing.
                    </p>
                    <p>
                        If you poke it gently, the indentation will bounce back, slowly.
                    </p>
                    <p>
                        It should not be sticky or dry.
                    </p>
                </div>
                <div className="flex flex-col text-center gap-2 w-full lg:w-2/5">
                    <img src={rise2.src} alt="properly proofed"/>
                    <p className="max-sm:text-(--light-tertiary)">poperly proofed loaf in it's banneton</p>
                </div>
            </div>
            <div className="flex max-sm:flex-col gap-4">
                <div className="flex flex-col text-center gap-2 max-sm:w-full max-lg:w-4/2 lg:w-2/5 lg:shrink-0">
                    <img src={Baking1.src} alt="hot pan in a hot oven"/>
                    <p className="max-sm:text-(--light-tertiary)">hot oven, hot pan</p>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <p>
                        Start your oven. Set it to 500 deg F / 260 deg C and place a <a className="text-(--external-link) hover:underline max-sm:underline" href="https://en.wikipedia.org/wiki/Dutch_oven" target="_blank">Dutch Oven</a> or <a className="text-(--external-link) hover:underline max-sm:underline" href="https://www.amazon.com/Lodge-Cooker-Pre-seasoned-Skillet-Convertible/dp/B0009JKG9M" target="_blank">Combo Cooker</a> in the center. It also helps to have a baking stone (pizza stone) on the bottom of the oven.
                    </p>
                    <p>
                        Let your oven heat up for at least 30 minutes so that the pot is piping hot.
                    </p>
                </div>
            </div>
            <div className="flex max-sm:flex-col gap-4">
                <div className="flex flex-col gap-4 justify-center">
                    <p>
                        Once the oven and pan are both hot, we need to remove the dough and score it.
                    </p>
                    <p>
                        If you have a combo cooker you can flip the dough right into the cooker. If you have a dutch oven then you'll want to use some parchment paper so that you can move the dough into the deeper well.
                    </p>
                    <p>
                        Scoring / marking your loaf is required to allow the loaf to expand as it desires. The design that is made will effect how well the loaf expands. But you don't need to worry too much. A long slash from one side to the other will let it expand just fine.
                    </p>
                </div>
                <div className="flex flex-col text-center gap-2 max-sm:w-full max-lg:w-6/2 lg:w-2/5 lg:shrink-0">
                    <img src={rise4.src} alt="properly proofed"/>
                    <p className="max-sm:text-(--light-tertiary)">proper proofing should retain the basket shape</p>
                </div>
            </div>
            <p>
                When you score your loaf, don't be gentle. Make sure to cut a good line. Use a very sharp knife or a razor. I have a <a className="text-(--external-link) hover:underline max-sm:underline" href="https://www.amazon.com/Lccowot-Bread-Lame-Stainless-Sourdough/dp/B0C369NX7C/ref=sr_1_25?sr=8-25" target="_blank">razor</a>. I like to do one off-center line from end to end on all of my loaves. After that I'm just trying to draw pretty designs.
            </p>
            <div className="flex flex-col text-center gap-2 mx-auto shrink-0">
                <img src={Marking2.src} alt="properly proofed"/>
                <p className="max-sm:text-(--light-tertiary)">design is mostly your choice</p>
            </div>
            <p>
                Note that the inside of the loaf is not solid. There should be lots of little bubbles and what looks like a set of webbed connections. This is a mark of proper yeast gestation. The internal strength of your bread is determined by this web. If it's good and strong you get a soft bouncy interior.
            </p>
            <p>
                Place your loaf into your cooker. <span className="text-(--light-tertiary)">MAKE SURE TO PLACE THE LID ONTO YOUR POT</span>. And set a timer for 20 minutes.
            </p>
            <p>
                It is crucial that you put the lid on the pot for the first half of the baking time because the rise of your loaf requires a moist environment. Professional ovens accomplish this by adding steam into the oven directly. Using a lidded pot traps all of the moisture in your loaf and steams it without the need to add any to your oven.
            </p>
            <div className="flex max-sm:flex-col gap-4">
                <div className="flex flex-col text-center gap-2 max-sm:w-full max-lg:w-4/2 lg:w-2/5 lg:shrink-0">
                    <img src={Baking3.src} alt="halfway through"/>
                    <p className="max-sm:text-(--light-tertiary)">halfway through</p>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <p>
                        After 20 minutes, open the oven, remove the pot lid, and set the temperature to 450 deg F / 230 deg C.
                    </p>
                    <p>
                        Close up the oven and set the timer for another 20 minutes.
                    </p>
                </div>
            </div>
            <div className="flex max-sm:flex-col gap-4">
                <div className="flex flex-col text-center gap-2 max-sm:w-full max-lg:w-full lg:w-2/5 lg:shrink-0">
                    <img src={Baking2.src} alt="steamed bread expands well"/>
                    <p className="max-sm:text-(--light-tertiary)">steamed bread expands well</p>
                </div>
                <div className="flex flex-col gap-4 justify-center w-3/5">
                    <p>
                        Steaming a loaf helps it expand and sets you up for a good springy interior.
                    </p>
                </div>
            </div>
            <p>
                It's done! A crunchy-crisp outside hiding a soft and stretchy inside. The expanded crisp edge to the primary lengthwise cut is called an "ear." It should be dark, but not burnt. The height of the ear indicates the amount of expansion the loaf has experienced.
            </p>
            <div className="flex max-sm:flex-col justify-center gap-4 lg:w-4/5 mx-auto">
                <div className="flex flex-col text-center gap-2 w-full lg:w-2/5 lg:shrink-0">
                    <img src={Baked1.src} alt="dark carmel crust is done"/>
                    <p className="max-sm:text-(--light-tertiary)">dark carmel crust is done</p>
                </div>
                <div className="flex flex-col text-center gap-2 w-full lg:w-2/5 lg:shrink-0">
                    <img src={Baked2.src} alt="the web is now stretched"/>
                    <p className="max-sm:text-(--light-tertiary)">the web is now stretched</p>
                </div>
            </div>
            <p>
                Try not to cut into your bread for at least one hour. When it's fresh out of the oven the interior needs time to set. If you cut it immedietely the interior will dry out and become crumbly. Your knife will also catch on the moist interior and make for an uneven cut.
            </p>
            <div className="flex flex-col text-center gap-2 mx-auto">
                <img src={Baked4.src} alt="properly proofed"/>
                <p className="max-sm:text-(--light-tertiary)">I like to make two at a time</p>
            </div>
        </section>
    )
}