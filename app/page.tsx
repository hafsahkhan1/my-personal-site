import Image from "next/image";
import Link from "next/link";
import Welcome from "./components/welcome"

export default function Home() {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </div>
      <Welcome/>
    </div>
  );
}
