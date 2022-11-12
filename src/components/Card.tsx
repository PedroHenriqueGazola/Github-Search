import Image from "next/image"
import Link from "next/link";
import { Eye, GitFork, Star } from "phosphor-react";
import { RepositorioType } from "../pages/search"
import LanguageImage from "./LanguageImage";


export default function Card(repositorio: RepositorioType) {
    const src = repositorio.owner.avatar_url;
    return (
        <div className="border-2 border-gray-800 rounded-xl w-[300x] h-[370px] flex flex-col justify-between items-center ">
            <div className="flex flex-row gap-6 p-4 ">
                <div className="flex flex-col items-start fle gap-4 ">
                    <Image
                        loader={() => src}
                        src={src}
                        alt="avatar"
                        className="rounded-full"
                        width={80}
                        height={80}
                        unoptimized={true}
                    />
                    <div className="flex items-center gap-2">
                        <Star size={20} />
                        <p>{repositorio.stargazers_count}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <GitFork size={20} />
                        <p>{repositorio.forks_count}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye size={20} />
                        <p>{repositorio.watchers_count}</p>
                    </div>

                    {repositorio.language && (
                        <div className="flex items-center gap-2">
                        <LanguageImage language={`${repositorio.language}`} />
                        <p>{repositorio.language}</p>
                    </div>
                    )}
                    
                    

                </div>
                <div className="flex flex-col items-center w-[180px] gap-4 overflow-hidden ">
                    <h1 className="text-2xl font-semibold">{repositorio.name}</h1>
                    <p className="text-gray-400 text-sm text-clip text-left border-2 border-gray-800 rounded-lg p-2 w-[180px] max-h-[210px]">{repositorio.description}</p>
                </div>
            </div>
            <Link href={repositorio.html_url} target={"_blank"} className="text-blue-400 hover:underline p-4">Acessar repositório</Link>

        </div>
    )
}
