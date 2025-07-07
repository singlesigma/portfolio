import Comments from "./Comments"
import { useState, useEffect } from "react";
import { tw } from "../../twind/twind";
import * as m from "motion/react-m";

const comments = [
    {
        name: "Prasanna Kumar Reddy",
        comment: "Gowtham has an incredible eye for design and the technical skills to bring his visions to life. His work always exceeds expectations.",
        title: "Student at SRM",
        image: "/testimonials/rachit.jpg"
    },
    {
        name: "Guna Adhityya Reddy",
        comment: "Working with Gowtham has been amazing. His creativity and dedication to perfection make him stand out from the crowd.",
        title: "Student at NIE Mysore",
        image: "/testimonials/adi.jpg"
    },
    {
        name: "Dheeraj",
        comment: "Gowtham's approach to problem-solving is unique. He combines technical expertise with creative thinking to deliver outstanding results.",
        title: "Student at SRM",
        image: "/testimonials/Dheeraj.jpg"
    },
    {
        name: "Manohar",
        comment: "His work on this project was outstanding. His creativity, dedication, and attention to detail were evident in every aspect, resulting in exceptional outcomes.",
        title: "Student at SRM University",
        image: "/testimonials/Manohar.jpg"
    },
    {
        name: "Rahul",
        comment: "One of the most talented developers I've ever met. He can create amazing designs and has the ability to make them a reality with clean, efficient code.",
        title: "Student at SRM",
        image: "/testimonials/rahul.jpg"
    },
    {
        name: "Tharun",
        comment: "He's an amazing developer and a great person to work with. His talent, reliability, and problem-solving skills make teamwork fun and productive.",
        title: "Student at SRM",
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
            className={`transition-all duration-500 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${className}`}
        />
    );
};

export default function CommentSection() {
    return (
        <div className={tw("max-w-4xl mx-auto px-6")}>
            <div className={tw("space-y-8")}>
                {comments.map((comment, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Comments
                            index={index}
                            name={comment.name}
                            comment={comment.comment}
                            image={comment.image || ""}
                            title={comment.title}
                        />
                    </m.div>
                ))}
            </div>
        </div>
    )
}