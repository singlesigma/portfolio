import Comments from "./Comments"

import { useState, useEffect } from "react";

const comments = [
    {
        name: "Prasanna kumar reddy",
        comment: "Vediki antha scene ledu le edo ala ala chestadu ,pani pata undadu anduke time pass kaka ila chestu untadu em chestam antha chesi naku chupistadu tappadu ika chudali nene.",
        title: "Student at SRM",
        image: "/testimonials/rachit.jpg"
    },
    {
        name: "Guna adhityya reddy",
        comment: "Memu school nunchi ne friends vediki ,nake telikunda na photo lu,na peru anni vadesadu ika tappadu oko sari ila jargutunatai maname chusi kshmainchale ika ,sarle vodeleyandi",
        title: "1st year student in NIE mysore",
        image: "/testimonials/adi.jpg"
    },
    {
        name: "Dheeraj",
        comment: "cheseke and cheppike em ledu emo mari future lo em chesatado,cheyyado antha taravata telustadi just wait and see anthe",
        title: "Student at SRM",
        image: "/testimonials/Dheeraj.jpg"
    },
    {
        name: "Manohar",
        comment: "His work on this project was outstanding. His creativity, dedication, and attention to detail were evident in every aspect, resulting in exceptional outcomes. A true testament to his talent and hard work.",
        title: "Student at SRM University",
        image: "/testimonials/Manohar.jpg"
    },
    {
        name: "Rahul",
        comment: "One of the most talented developers I've ever met, he can create amazing designs and has the ability to make them a reality. The things he has made impacts thousands on a daily basis and i believe that any team would be lucky to have an asset like him",
        title: "Student in SRM",
        image: "/testimonials/rahul.jpg"
    },
    {
        name: "Tharun",
        comment: "He's an amazing developer and a great person to work with. I've worked with him for over two years on projects like simply-djs and simply-xp. He's talented, reliable, and great at problem-solving, making teamwork fun and productive.",
        title: "Student in SRM",
        image: "/testimonials/Tharun.jpg"
    }
];

export const LazyImage = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
    const [loaded, setLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setLoaded(true);
        };
    }, [src]);

    return (
        <img
            src={loaded ? imageSrc : "placeholder.jpg"}
            alt={alt}
            className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
    );
};

export default function CommentSection() {
    return (
        <div className="max-w-screen-xl px-4 mx-auto flex flex-col mt-40 gap-48 items-center justify-center relative min-h-screen">
            {
                comments.map((comment, index) => (
                    <Comments
                        key={index}
                        index={index}
                        name={comment.name}
                        comment={comment.comment}
                        image={comment.image || ""}
                        title={comment.title}
                    />
                ))
            }
        </div>
    )
}
