import Link from "next/link";

// TODO: make this a splitting point for if you are a business person, or if you are a developer
// if business: show nicely worded and direct items in stories page and allow people on to the "Kudos / avowals" page
// if dev: show the flippant stories instead of the business coded ones
export default function Home() {
    return (
        <div className="flex flex-col gap-4 h-screen w-full justify-center items-center">
            <h1 className="text-2xl">
                Alex's awesome website that totally shows off his skills...
            </h1>
            <h2 className="text-xl pb-16">
                Seriously, I'm good at this.
            </h2>
            
            <HomePageLink path="resume" title="Resume" />
            <HomePageLink path="avowal" title="Avowals" />
            <HomePageLink path="stories" title="Story time" />
            <HomePageLink path="settings" title="Settings" />
        </div>
    );
}

const HomePageLink = ({title, path}:{title: string, path: string}) => {
    return (
        <Link 
            className="bg-(--background-theme-secondary) py-2 px-4 min-w-1/5 text-center font-semibold text-xl border-1 border-(--background-theme-secondary) hover:border-(--text-theme-primary)" 
            href={`/${path}`}
            >
                {title}
        </Link>   
    )
}