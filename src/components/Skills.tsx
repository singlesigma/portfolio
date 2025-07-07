import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";
import { Code2, Wrench, Layers, Zap, Palette, Database } from "lucide-react";

const skillsData = [
    {
        type: "Languages",
        items: ["Python", "C", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
        icon: Code2,
        description: "Programming languages I use to bring ideas to life with clean, efficient code",
        color: "from-blue-500 to-cyan-500"
    },
    {
        type: "Frameworks",
        items: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Motion", "Vue.js"],
        icon: Layers,
        description: "Modern frameworks and libraries for building scalable applications",
        color: "from-purple-500 to-pink-500"
    },
    {
        type: "Tools",
        items: ["VS Code", "GitHub", "Figma", "MongoDB", "Vercel", "Docker", "Postman"],
        icon: Wrench,
        description: "Essential tools that power my development workflow and productivity",
        color: "from-green-500 to-emerald-500"
    },
    {
        type: "Design",
        items: ["UI/UX", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping"],
        icon: Palette,
        description: "Design tools and skills for creating beautiful user experiences",
        color: "from-orange-500 to-red-500"
    },
    {
        type: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "GraphQL"],
        icon: Database,
        description: "Database technologies for efficient data management and storage",
        color: "from-indigo-500 to-purple-500"
    },
    {
        type: "Performance",
        items: ["Optimization", "SEO", "PWA", "Caching", "CDN", "Analytics"],
        icon: Zap,
        description: "Performance optimization techniques for lightning-fast applications",
        color: "from-yellow-500 to-orange-500"
    }
];

const SkillsSection: FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const handleScroll = () => {
        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4) {
                    setCurrentSection(index);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className={tw("grid lg:grid-cols-5 gap-8 items-start")}>
            {/* Sticky sidebar */}
            <div className={tw("lg:col-span-2 lg:sticky lg:top-32")}>
                <div className={tw("glass p-8 card-hover relative overflow-hidden")}>
                    {/* Animated background gradient */}
                    <m.div
                        className={tw("absolute inset-0 opacity-10")}
                        animate={{
                            background: [
                                "linear-gradient(45deg, #007aff, #5856d6)",
                                "linear-gradient(45deg, #5856d6, #af52de)",
                                "linear-gradient(45deg, #af52de, #007aff)",
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={tw("relative z-10")}
                    >
                        <h2 className={tw("text-lg font-medium text-textSecondary mb-6")}>
                            Skills & Expertise
                        </h2>
                        
                        <AnimatePresence mode="wait">
                            <m.div
                                key={currentSection}
                                initial={{ opacity: 0, x: -30, rotateY: -15 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                exit={{ opacity: 0, x: 30, rotateY: 15 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                {skillsData[currentSection] && (() => {
                                    const CurrentIcon = skillsData[currentSection].icon;
                                    return (
                                        <div className={tw("space-y-6")}>
                                            <div className={tw("flex items-center gap-4 mb-6")}>
                                                <m.div
                                                    className={tw("p-3 rounded-apple bg-gradient-to-r")}
                                                    style={{
                                                        background: `linear-gradient(135deg, ${skillsData[currentSection].color.split(' ')[1]}, ${skillsData[currentSection].color.split(' ')[3]})`
                                                    }}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <CurrentIcon className={tw("w-8 h-8 text-white")} />
                                                </m.div>
                                                <h1 className={tw("text-3xl lg:text-4xl font-bold text-textPrimary")}>
                                                    {skillsData[currentSection]?.type || "Skills"}
                                                </h1>
                                            </div>
                                            
                                            <p className={tw("text-lg text-textSecondary leading-relaxed")}>
                                                {skillsData[currentSection]?.description || 
                                                 "Building the future with modern technologies and creative solutions."}
                                            </p>

                                            {/* Progress indicator */}
                                            <div className={tw("flex gap-2")}>
                                                {skillsData.map((_, index) => (
                                                    <m.div
                                                        key={index}
                                                        className={tw(`h-1 rounded-full ${
                                                            index === currentSection ? "bg-accent" : "bg-border"
                                                        }`)}
                                                        initial={{ width: 8 }}
                                                        animate={{ 
                                                            width: index === currentSection ? 32 : 8,
                                                            opacity: index === currentSection ? 1 : 0.5
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </m.div>
                        </AnimatePresence>
                    </m.div>
                </div>
            </div>

            {/* Skills content */}
            <div className={tw("lg:col-span-3 space-y-8")}>
                {skillsData.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        ref={(el) => (sectionRefs.current[sectionIndex] = el as HTMLDivElement)}
                        className={tw("glass p-8 card-hover relative overflow-hidden")}
                    >
                        {/* Section background gradient */}
                        <m.div
                            className={tw(`absolute inset-0 opacity-5 bg-gradient-to-r ${section.color}`)}
                            initial={{ scale: 0, rotate: 45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: sectionIndex * 0.1 }}
                            viewport={{ once: true }}
                        />
                        
                        <m.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={tw("relative z-10")}
                        >
                            <div className={tw("flex items-center gap-4 mb-8")}>
                                <m.div
                                    className={tw(`p-3 rounded-apple bg-gradient-to-r ${section.color}`)}
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <section.icon className={tw("w-6 h-6 text-white")} />
                                </m.div>
                                <h2 className={tw("text-2xl font-bold text-textPrimary")}>
                                    {section.type}
                                </h2>
                            </div>
                            
                            <div className={tw("grid grid-cols-2 md:grid-cols-3 gap-3")}>
                                {section.items.map((item, itemIndex) => (
                                    <SkillItem
                                        key={`${sectionIndex}-${itemIndex}`}
                                        item={item}
                                        index={itemIndex}
                                        color={section.color}
                                        onHover={setHoveredSkill}
                                        isHovered={hoveredSkill === item}
                                    />
                                ))}
                            </div>
                        </m.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SkillItem: FC<{ 
    item: string; 
    index: number; 
    color: string;
    onHover: (item: string | null) => void;
    isHovered: boolean;
}> = ({ item, index, color, onHover, isHovered }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90vh", "end 20vh"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <m.div
            ref={ref}
            style={{ x, opacity }}
            className={tw("glass p-4 text-center card-hover smooth-transform relative overflow-hidden group")}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
            }}
            onHoverStart={() => onHover(item)}
            onHoverEnd={() => onHover(null)}
        >
            {/* Hover background effect */}
            <m.div
                className={tw(`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10`)}
                transition={{ duration: 0.3 }}
            />
            
            {/* Skill name */}
            <m.span 
                className={tw("text-sm font-medium text-textPrimary relative z-10 block")}
                animate={{
                    color: isHovered ? "#007aff" : "#f5f5f7"
                }}
                transition={{ duration: 0.2 }}
            >
                {item}
            </m.span>
            
            {/* Animated border */}
            <m.div
                className={tw("absolute inset-0 border-2 border-transparent rounded-apple")}
                animate={{
                    borderColor: isHovered ? "#007aff" : "transparent"
                }}
                transition={{ duration: 0.2 }}
            />
        </m.div>
    );
};

export default SkillsSection;