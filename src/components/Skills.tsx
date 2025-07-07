import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";
import { Code2, Wrench, Layers } from "lucide-react";

const skillsData = [
    {
        type: "Languages",
        items: ["Python", "C", "Java", "C++", "JavaScript", "TypeScript"],
        icon: Code2,
        description: "Programming languages I use to bring ideas to life"
    },
    {
        type: "Frameworks",
        items: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Motion"],
        icon: Layers,
        description: "Modern frameworks and libraries for efficient development"
    },
    {
        type: "Tools",
        items: ["VS Code", "GitHub", "Figma", "MongoDB", "Vercel", "Docker"],
        icon: Wrench,
        description: "Essential tools that power my development workflow"
    },
];

const SkillsSection: FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
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
        <div ref={containerRef} className={tw("grid lg:grid-cols-2 gap-16 items-start")}>
            {/* Sticky sidebar */}
            <div className={tw("lg:sticky lg:top-32")}>
                <div className={tw("glass p-8 card-hover")}>
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={tw("text-lg font-medium text-textSecondary mb-4")}>
                            Skills & Expertise
                        </h2>
                        
                        <AnimatePresence mode="wait">
                            <m.div
                                key={currentSection}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className={tw("flex items-center gap-4 mb-6")}>
                                    {skillsData[currentSection] && (
                                        <skillsData[currentSection].icon 
                                            className={tw("w-12 h-12 text-accent")} 
                                        />
                                    )}
                                    <h1 className={tw("text-4xl lg:text-5xl font-bold text-textPrimary")}>
                                        {skillsData[currentSection]?.type || "Skills"}
                                    </h1>
                                </div>
                                
                                <p className={tw("text-lg text-textSecondary leading-relaxed")}>
                                    {skillsData[currentSection]?.description || 
                                     "Building the future with modern technologies and creative solutions."}
                                </p>
                            </m.div>
                        </AnimatePresence>
                    </m.div>
                </div>
            </div>

            {/* Skills content */}
            <div className={tw("space-y-12")}>
                {skillsData.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        ref={(el) => (sectionRefs.current[sectionIndex] = el as HTMLDivElement)}
                        className={tw("glass p-8 card-hover")}
                    >
                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={tw("flex items-center gap-4 mb-8")}>
                                <section.icon className={tw("w-8 h-8 text-accent")} />
                                <h2 className={tw("text-2xl font-bold text-textPrimary")}>
                                    {section.type}
                                </h2>
                            </div>
                            
                            <div className={tw("grid grid-cols-2 md:grid-cols-3 gap-4")}>
                                {section.items.map((item, itemIndex) => (
                                    <SkillItem
                                        key={`${sectionIndex}-${itemIndex}`}
                                        item={item}
                                        index={itemIndex}
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

const SkillItem: FC<{ item: string; index: number }> = ({ item, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90vh", "end 20vh"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <m.div
            ref={ref}
            style={{ x, opacity }}
            className={tw("glass p-4 text-center card-hover smooth-transform")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
        >
            <span className={tw("text-sm font-medium text-textPrimary")}>
                {item}
            </span>
        </m.div>
    );
};

export default SkillsSection;