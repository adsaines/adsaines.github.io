import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 h-full w-full justify-center items-center">
            <Link href={'/resume'}>Resume</Link>
        </div>
    );
}
