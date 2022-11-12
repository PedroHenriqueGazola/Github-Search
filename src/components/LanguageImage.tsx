import Image from "next/image";
import { Question } from "phosphor-react";

interface LanguageImageProps {
    language: string;
}

export default function LanguageImage({language}:LanguageImageProps) {

    

    if(language == "C#") {
        language = "csharp";
    } else if(language == "C++") {
        language = "cplusplus";
    } else if(language == "CSS") {
        language = "css3";
    } else if(language == "HTML") {
        language = "html5";
    } 
    language = language.toLowerCase();
    const src = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${language}/${language}-original.svg`;
    return (
            <Image
            loader={() => src}
            src={src}
            alt= ''
            width={20} 
            height={20}
            />
    )
}   
        