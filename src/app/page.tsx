import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 h-screen w-full justify-center items-center">
            <h1 className="text-2xl text-center">
                Alex Saines's Dev Website
            </h1>
            <h2 className="text-xl pb-16">
                <span className="text-(--light-secondary)">engineer, developer,</span> <span className="text-base">cook, karate master</span>
            </h2>
            
            <div className="flex flex-col gap-6 px-12 max-sm:w-full md:w-[20rem]">
                <HomePageLink path="resume" title="resume" />
                <HomePageLink path="thanks" title="thanks_to" />
                <HomePageLink path="stories" title="story_time" />
                <HomePageLink path="settings" title="settings" />
            </div>
        </div>
    );
}

const HomePageLink = ({title, path}:{title: string, path: string}) => {
    return (
        <Link 
            className="bg-(--dark-secondary) py-2 px-4 w-full text-center font-semibold text-xl border-1 border-(--dark-secondary) hover:border-(--light-primary) max-sm:border-(--light-primary)" 
            href={`/${path}`}
            >
                {title}
        </Link>
    )
}