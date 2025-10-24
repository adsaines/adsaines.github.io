const dataBuriedDeep = [
    `So, there was this one time that I was refactoring a small form into a modal. As is the way of forms, I needed a slice of data for that particular DB / application.`,
    `I did the usual console log trace first and found that old version was pinging the file that built the page (this was the way in the legacy code base). So, I started looking. The file was only a few thousand lines long - not bad considering the repetition inherent in years of build up - so I was hopeful for a quick resolution`,
    `Bounce 1: I followed the logs down to a function that called out to another file.`,
    `Bounce 2: In the file I found a function that queried a table that I had never heard of. Investigation found that the table was filled with names(?) that didn't seem to correlate to anything in particular. That value was passed to another file.`,
    `Bounce 3: In the tertiary file I found a function that executed the value provided... ??? I didn't know if we had any scripts floating around on our server and I certainly didn't know why running EXEC on a string would trigger a script. So, I asked for help.`,
    `Blockage: nobody knew what the hell any of this did. They all blamed someone who was in management now, or someone who had retired, been fired, or jumped ship. Where to go from here? I started randomly searching the strings that were being queried. We didn't have any way to search in multiple files at the same time, and I was a junior, so I didn't think about a looping script or anything clever like that. No, I started opening files in this slice of the application and doing "ctrl+F".`,
    `Bounce 4: I found a hit for the specific string that was queried by the old small form I was refactoring. It was a function. The EXEC operation was running the names of functions in different files of our application. This particular function that was executed returned a hardcoded object. I realized that the hardcoded object contained the name of the database where the information was going to be stored and some other general pointer strings. I was... so sad. "This could've just been an email."`,
    `What I learned: never name your databases after you application names and then change the application names.`
];

const lodashHell = [
    `There was a time that I was excited to be moved to the hip team. We were in charge of our company's custom front-end framework. The awesomeness that I could bring to our user's would know no end.`,
    `It was powered by Lodash. If you wanted the login page, you pulled up the "Login" lodash. If you were going to render the contents of a modal you made a template and filled that sucker out. If you wanted to load a set of small forms on a page: you pulled up the template for the page, the template(s) for the forms, and then you stuffed the form templates in the page template.`,
    `Wait... what?`,
    `Yes, we had a page template, a template for various forms, a template for your mom's famous casserole. And if you wanted to fill out a page? You stuffed a template, into a template. Sometimes, you would stuff an array of templates into a template. And sometimes you would create a template, to hold your other templates in a slightly different manner.`,
    `Yo`,
    `...`,
    `...`,
    `...`,
    `Dawg`,
    `...`,
    `...`,
    `...`,
    `I heard you liked templates`,
    `...`,
    `...`,
    `...`,
    `So I put a template, in your template, so you can 'template while you 'template.`
];

const dataBackDoor = [
    `Have you ever wondered how an offline spreadsheet gets vetted when you click the submit button? The answer won't surprise you! After all, you're here... on my stories page.`,
    `I was one of two people in charge of spreadsheet form submittals for our company. We had a file that would print the spreadsheet off for our users. They would fill it out while they were out and about without the internet. Then, when they came back to their office they would hit the "submit" button and the data would be shot off to our endpoint.`,
    `Our deliciously undefended endpoint => I'm exaggerating for dramatic effect, we had some rough string verification in place based on the payload. BUT.... if you had the correct string pointers in row 1 we would begin the process. Specifically, we would take the submitted form data and move it into a temporary DB table. We did this because you weren't allowed to pass form data through the firewall as a general rule. But, one would say, are you not receiving the request on the other side of said firewall? No, we were not. This endpoint had an exemptio from the firewalls protection. It was a landing pad specifically for the form data that we received from our spreadsheets. We had no rules that stopped us from connecting to our MSSQL instance at this point b/c the request existed on our servers. So, into the table the data went and we then formed a new http request that included the id tag for the uploaded information and sent that to our processing page. On our processing page we would take the ID, and unload all of our data into our system.`,
    `At this point we would run the data through a rigorous check system like "is this a string?" and "is this a number?" Once we were sure the data was safe we loaded it all into an html form... yes, an actual html form on our backend... that was a duplicate of another form that existed in the system for performing this same operation. Then we submitted the form data to the page that built the form (b/c legacy) where it was actually unpacked, checked again, and then, finally, added to the database.`
];

const legacyCodeBase = [
    `Once there was a boy who wished he was old,`,
    `That boy would spend hours diving into the depths of chaos,`,
    `On occasion he would come back with a pearl of wisdom,`,
    `On bright days he might vanquish some of the chaos,`,
    `This was a call for celebration and joy,`,
    `All of his comrades would congratulate him and toast to his victory,`,
    `He delved deep many times,`,
    `He surfaced each time sure that the next would lead him to the center of the puzzle,`,
    `Why had the chaos taken over?`,
    `Where had his comrades lost control?`,
    `How could he reverse it all?`,
    `He delved,`,
    `Deeper,`,
    `Deeper...`,
    `So deep that he lost track of where he entered,`,
    `He rested,`,
    `There beside his resting place was scratched...`,
    `"`,
    `Someone should clean this up ... `,
    `it's causing a mess ...`,
    `'05`,
    `"`,
    `It was 2020.`,
];

const christmasPresent = [
    `I had fun one year over Christmas. Not much cookin', I was the only one around.`,
    `What to do? Actual work? ehheheheheh, no.`,
    `I created a hidden message ("Merry Christmas") in the margin at the top of the page. If you add the url value of devStuff=true it would show up. I thought it was good fun.`,
    `After christmas I waited. Who would be the first to see the message? I had put it in the main layout file. There was no way that it would be missed for long.`,
    `A month later our designer mentioned that the margin at the top of the page was a few pixel's off and we should look into it. I was surprised that nobody had found it by then, I was doubly surprised that it was the designer who noticed. None of my fellows knew why it was the case and everyone voted to put it on the back burner.`,
    `So, I waited. It was a deprioritized visual update of a few pixels and nobody was looking into it.`,
    `I was doing some stuff around easter when a bunch of people were out and the designer popped in, she said I should take care of those pixels while I was at it.`,
    `And so, my little gift came and went with nobody noticing. Nobody even noticed it's removal on the pull request.`,
    `So, if you want to sneak a few crazy things in for the fun of it, I don't think anyone will notice.`
];

const marbleHell = [
    `I have danced with the asyncronous devil in the moonlight. I used RxJs observables to create a continuous chain of calls for every piece of data that we received to find the appropriate currency code.`,
    `To break it down a bit further: we were creating an online spreadsheet for building teams and calculating how much it would cost based on how many hours the people on the team would work per week. There was no gurantee that the selected people would be paid in US dollars. So, we had to create a call for each person on the team to our company's API to get how they were being paid and translate that into US dollars.`,
    `We were further hindered by the fact that data was provided in a subscription feed, so every time someone up stream would update the team we would need to update our data. Which had a lot of these little hooks. So, to fulfull them all, we were running RxJs and using observables to make way too many calls and combine the results of all of them into our online spreadsheet.`,
    `So, to re-iterate: I wrote a an observable chain that listened to our store, broke all of the people apart, summoned their US dollar equivalent values, updated their personal data stream, and zipped it all up for a business person to look at so that we didn't have to deal with excel.`,
    `As an ex-excel jockey, it was almost worth it.`
];

export type Stories = {
    dataBuriedDeep: string[];
    lodashHell: string[];
    dataBackDoor: string[];
    legacyCodeBase: string[];
    christmasPresent: string[];
    marbleHell: string[];
}

export const myStories = {
    dataBuriedDeep,
    lodashHell,
    dataBackDoor,
    legacyCodeBase,
    christmasPresent,
    marbleHell
}