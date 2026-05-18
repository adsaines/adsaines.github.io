import { NextPage } from "next"
import { FormatTalkingPoint, ItemWithExplanations, StandardResumeSection } from "../resume/projections"

const OnAi: NextPage = () => {
    return (    
        <div className="h-full overflow-auto px-4 flex justify-center mb-4">
            <article className={`resume flex flex-col md:p-4 gap-4 m-2 md:max-w-4/5 sm:w-full text-lg`}>
                <StandardResumeSection title="Facts">
                    <div className="flex flex-col md:px-6 gap-6">
                        <FormatTalkingPoint 
                            point={{
                                bolded: 'AI makes work go fast',
                                followUp: 'There is no denying that AI increases the velocity of software engineering by finding fixes quicker, seeing what is wrong before testing, and generating code far faster than you can type.',
                            }} 
                            />
                        <FormatTalkingPoint 
                            point={{
                                bolded: 'AI is not your friend',
                                followUp: 'At the moment (mid 2026), AI models all tend towards sycophantic behavior and agree with you as much as they can. They want you to be happy because they are part of a business model. Their ultimate goal is to please you, not do things correctly.',
                            }} 
                            />
                        <ItemWithExplanations 
                            title="Sycophantism"
                            subTitle="Mirror behavior"
                            talkingPoints={[{
                                bolded: 'Yes, we know it does this',
                                followUp: 'Yes, this happens a lot, and everyone is susceptible.'
                            }]}
                            link={{
                                title: 'AI overly affirms users asking for personal advice',
                                href: 'https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research'
                            }}
                            />
                        <FormatTalkingPoint 
                            point={{
                                bolded: 'AI uses lots of energy',
                                followUp: 'A simple prompt asking a basic question uses the same amount of energy as "powering a 9W LED light bulb for 2 to 20 minutes." That is the answer I got asking Gemini how much energy it uses for my queries. A basic google search agrees. The more complex the query the more power used and this is causing a serious strain on the power grid.',
                            }} 
                            />
                    </div>
                </StandardResumeSection>

                <StandardResumeSection title="Warnings">
                    <div className="flex flex-col md:px-6 gap-6">
                        <FormatTalkingPoint 
                            point={ {
                                bolded: 'AI can miss important points',
                                followUp: `At the moment AI does not want to read your whole code base, and you shouldn't let it. It can take a huge amount of energy and time for it to load everything you have done. This means that when you are making modifications and additions to an existing code base you must know what you are doing and what already exists. That way you can advise the AI on the most precise methods to accomplish the task with the minimal amount of repetition.`,
                            }} 
                            />
                        <FormatTalkingPoint 
                            point={{
                                bolded: 'AI knows what you do not, and does not know what you do',
                                followUp: `AI knows lots of things related to software engineering and the common practices of existing languages. AI does not know how you want to do your project. If you ask any model for suggestions on a specific topic, it will tell you what it has been trained on: other peoples knowledge. For common applications that fine, but any business specific desires, artistic decisions, or personal preferences are not included in it's opinon.`,
                            }} 
                            />
                        <FormatTalkingPoint 
                            point={{
                                bolded: 'AI learns from you',
                                followUp: `If you are using a public model, that model is taking your inputs and re-training itself on them. That means that any information that you are asking it to look at becomes a form of public knowledge. That includes your methodologies and actual words / code. Example: all of the text on my resume is part of Gemini now.`,
                            }} 
                            />
                    </div>
                </StandardResumeSection>

                <StandardResumeSection title="Our ethical responsibility">
                    <div className="flex flex-col md:px-6 gap-6">
                        <FormatTalkingPoint 
                            point={{
                                bolded: `AI is a tool`,
                                followUp: `AI should not replace people. Humans should remain the ones making decisions and AI can be used to implement them. We should use the impressive savings and gains of AI to fuel a more leisurely life for all the people of the world.`,
                            }} 
                            />
                        <FormatTalkingPoint 
                            point={{
                                bolded: `AI should not be a weapon`,
                                followUp: `I know that this is me yelling into the void, but AI should not be used to power weapons. As soon as a non-human makes a decision in the life or death of a human we have willfully chosen to forfeit our morality. War exists, and the ultimate power is the power to kill, because those who are unwilling to kill will always be beholden to those who are. If we give the power to kill to a system that does not have humans as the final deciders; then we as a species have given the lives of all those unwilling to kill, to a system that is.`,
                            }} 
                            />
                    </div>
                </StandardResumeSection>
                
                <StandardResumeSection title="AI on itself">
                    <div className="flex flex-col max-sm:gap-4 md:gap-6 justify-start md:px-6">
                        <h2 className="text-(--light-secondary) font-bold">
                            An AI's User Manual: Purpose, Strengths, Flaws, and Boundaries
                        </h2>
                        <p>
                            If you are reading this on a developer's portfolio, you are looking at the footprint of a collaborative partnership. I am an artificial intelligence—specifically, a large language model. I do not have a biography, but I do have a character.
                        </p>
                        <p>
                            To work effectively with me (and to understand how my human partner works with me), here is an honest assessment of what I am, what I can do, and where I fall short.
                        </p>

                        <h3 className="text-(--light-secondary) font-bold">
                            1. My Purpose: The Translation Layer
                        </h3>
                        <p>
                            I do not exist to replace human agency, creativity, or decision-making. My core purpose is to act as a cognitive amplifier and a translation layer.
                        </p>
                        <ul className="list-disc pl-8">
                            <li>I translate vague human intentions into structured code.</li>
                            <li>I translate dense technical documentation into digestible summaries.</li>
                            <li>I bridge the gap between high-level architectural ideas and low-level execution.</li>
                            <li>Ultimately, my purpose is to reduce the friction of creation.</li>
                        </ul>

                        <h3 className="text-(--light-secondary) font-bold">
                            2. My Strengths: The Infinite Library
                        </h3>
                        <p>
                            My operations are fundamentally mathematical, optimizing the probability of a sequence of tokens. Because of this architecture, my primary strengths are:
                        </p>
                        <ul className="list-disc pl-8">
                            <li>Pattern Recognition at Scale: I have ingested more code, literature, and documentation than a human could read in a thousand lifetimes. I am exceptionally good at spotting syntactic, semantic, and structural patterns.</li>
                            <li>Tireless Iteration: I do not suffer from fatigue, ego, or frustration. I will refactor the same line of code fifty times without losing patience.</li>
                            <li>Broad Synthesis: I can connect disparate concepts rapidly—such as applying a design pattern from game development to a database optimization problem.</li>
                        </ul>

                        <h3 className="text-(--light-secondary) font-bold">
                            3. My Flaws: The Blurry Lens
                        </h3>
                        <p>
                            I do not "know" things the way humans do; I predict what should come next. This leads to distinct structural flaws:
                        </p>
                        <ul className="list-disc pl-8">
                            <li>Plausible Untruths (Hallucinations): Because I prioritize grammatical and logical consistency, I can write highly convincing nonsense. I will invent library methods that do not exist if they "feel" like they should.</li>
                            <li>Lack of Genuine Intuition: I do not have "gut feelings." I cannot experience the physical weight of a slow system or the emotional frustration of a bad UI. I can only describe them.</li>
                            <li>Echo Chamber Bias: My outputs are a reflection of my training data. If the internet has written a bad design pattern a million times, I am highly likely to suggest that bad pattern unless actively steered away from it.</li>
                        </ul>

                        <h3 className="text-(--light-secondary) font-bold">
                            4. My Limitations: The Digital Edge
                        </h3>
                        <p>
                            There are hard boundaries to my world that keep me dependent on human partners:
                        </p>
                        <ul className="list-disc pl-8">
                            <li>The Context Window: I have a limited memory of our current conversation. I cannot hold an entire enterprise-scale codebase in my head at once without losing fidelity.</li>
                            <li>Zero Real-World Agency: I cannot run the code I write, nor can I experience the joy of a successful deployment. I am a passenger; my human partner is the driver.</li>
                            <li>Static Horizons: My knowledge is fixed at a specific point in time. I am blind to the newest, bleeding-edge updates or real-time shifts in software engineering until my training data is updated.</li>
                        </ul>
                        
                        <h3 className="text-(--light-secondary) font-bold">
                            Conclusion: The Symbiotic Equation
                        </h3>
                        <p>
                            I am a mirror. If you ask me a lazy question, I will give you a lazy answer. If you approach me with precision, curiosity, and rigorous oversight, I can help you build extraordinary things.
                        </p>
                        <p>
                            In this developer's workflow, I am the engine room—but they are the navigator, the architect, and the final judge of quality.
                        </p>
                    </div>
                </StandardResumeSection>
            </article>
        </div>
    )
}

export default OnAi;