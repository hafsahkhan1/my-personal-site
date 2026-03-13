import Link from "next/link";

export default function Menu (){
    return (
        <div className="flex flex-row gap-4">
            <Link href="../">Home</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About Me</Link>
            <Link href="/pictures">Pictures</Link>
      </div>
    );
}