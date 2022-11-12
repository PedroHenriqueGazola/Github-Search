import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import icon from "../../public/githubicon.png";
import Navbar from "./Navbar";

export default function Header() {
    const router = useRouter();

    return (
        <header className="bg-header h-16 w-full flex items-center justify-between ">
            <Link href={'/'} className="ml-8"  >
                <Image alt='icone github' src={icon} width={40} height={40} className="hover:cursor-pointer"/>
            </Link>
        </header>
        
    )
}