import Comments from "./Comments"
import { useState, useEffect } from "react";
import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { useScroll, useTransform } from "motion/react";

const comments = [
    {
        name: "Prasanna Kumar Reddy",
        comment: "Gowtham has an incredible eye for design and the technical skills to bring his visions to life. His work always exceeds expectations and delivers outstanding results.",
        title: "Student at SRM",
        image: "/testimonials/rachit.jpg"
    },
    {
        name: "Guna Adhityya Reddy",
        comment: "Working with Gowtham has been amazing. His creativity and dedication to perfection make him stand out from the crowd. A true professional in every sense.",
        title: "Student at NIE Mysore",
        image: "/testimonials/adi.jpg"
    },
    {
        name: "Dheeraj",
        comment: "Gowtham's approach to problem-solving is unique. He combines technical expertise with creative thinking to deliver outstanding results that exceed expectations.",
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
    const { scrollY } = useScroll();
    const [scrambledPositions, setScrambledPositions] = useState<Array<{x: number, y: number, rotation: number}>>([]);
    const [isOrganized, setIsOrganized] = useState(false);

    useEffect(() => {
        // Generate random scrambled positions
        const positions = comments.map(() => ({
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 600,
            rotation: (Math.random() - 0.5) * 180
        }));
        setScrambledPositions(positions);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Organize when user scrolls to comments section
            const commentsSection = document.getElementById('comments-section');
            if (commentsSection) {
                const rect = commentsSection.getBoundingClientRect();
                const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
                setIsOrganized(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="comments-section" className={tw("max-w-6xl mx-auto px-6 relative min-h-screen")}>
            {/* Background Effects */}
            <div className={tw("absolute inset-0 overflow-hidden")}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <m.div
                        key={i}
                        className={tw("absolute w-2 h-2 bg-accent/20 rounded-full")}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Comments Grid */}
            <div className={tw("relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-20")}>
                {comments.map((comment, index) => (
                    <m.div
                        key={index}
                        className={tw("relative")}
                        initial={{
                            x: scrambledPositions[index]?.x || 0,
                            y: scrambledPositions[index]?.y || 0,
                            rotate: scrambledPositions[index]?.rotation || 0,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            x: isOrganized ? 0 : scrambledPositions[index]?.x || 0,
                            y: isOrganized ? 0 : scrambledPositions[index]?.y || 0,
                            rotate: isOrganized ? 0 : scrambledPositions[index]?.rotation || 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.2,
                            delay: isOrganized ? index * 0.15 : 0,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: isOrganized ? Math.random() * 6 - 3 : 0,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* Floating Card */}
                        <m.div
                            className={tw("glass p-6 card-hover relative overflow-hidden")}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4 + index * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Animated border */}
                            <m.div
                                className={tw("absolute inset-0 rounded-apple")}
                                style={{
                                    background: `conic-gradient(from ${index * 60}deg, transparent, rgba(0, 122, 255, 0.3), transparent)`,
                                }}
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            
                            {/* Content */}
                            <div className={tw("relative z-10")}>
                                <Comments
                                    index={index}
                                    name={comment.name}
                                    comment={comment.comment}
                                    image={comment.image}
                                    title={comment.title}
                                />
                            </div>

                            {/* Particle effects */}
                            {Array.from({ length: 5 }).map((_, particleIndex) => (
                                <m.div
                                    key={particleIndex}
                                    className={tw("absolute w-1 h-1 bg-accent rounded-full")}
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: particleIndex * 0.4,
                                    }}
                                />
                            ))}
                        </m.div>
                    </m.div>
                ))}
            </div>

            {/* Organization Indicator */}
            <m.div
                className={tw("fixed bottom-8 right-8 glass p-4 rounded-apple")}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                    opacity: isOrganized ? 1 : 0.5, 
                    scale: isOrganized ? 1 : 0.8 
                }}
                transition={{ duration: 0.3 }}
            >
                <div className={tw("flex items-center gap-2")}>
                    <m.div
                        className={tw(`w-3 h-3 rounded-full ${isOrganized ? 'bg-green-400' : 'bg-yellow-400'}`)}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                        }}
                    />
                    <span className={tw("text-sm text-textSecondary")}>
                        {isOrganized ? 'Organized' : 'Scrambled'}
                    </span>
                </div>
            </m.div>
        </div>
    )
}