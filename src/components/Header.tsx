import Image from "next/image";
import Link from "next/link";

import icon from "../../public/githubicon.png";

export default function Header() {
    return (
        <header className="bg-header h-16 w-full flex items-center justify-between ">
            <Link href={'/'} className="ml-8"  >
                <Image alt='icone github'
                    color="white"
                    src= {icon}
                    width={40}
                    height={40}
                    className="hover:cursor-pointer" />
            </Link>
        </header>
    )
}