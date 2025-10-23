import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 h-screen w-full justify-center items-center">
            <h1 className="text-2xl">
                Alex's awesome website that totally shows off his skills...
            </h1>
            <h2 className="text-xl pb-16">
                Seriously, I'm good at this.
            </h2>

            <Link 
                className="bg-(--background-theme-secondary) py-2 px-4 min-w-1/5 text-center font-semibold text-xl border-1 border-(--background-theme-secondary) hover:border-(--text-theme-primary)" 
                href={'/resume'}
                >
                    Resume
            </Link>
            <Link 
                className="bg-(--background-theme-secondary) py-2 px-4 min-w-1/5 text-center font-semibold text-xl border-1 border-(--background-theme-secondary) hover:border-(--text-theme-primary)" 
                href={'/kudos'}
                >
                    Kudos
            </Link>
            <Link 
                className="bg-(--background-theme-secondary) py-2 px-4 min-w-1/5 text-center font-semibold text-xl border-1 border-(--background-theme-secondary) hover:border-(--text-theme-primary)" 
                href={'/stories'}
                >
                    Story time
            </Link>
        </div>
    );
}
