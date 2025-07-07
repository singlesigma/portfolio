import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";

const skillsData = [
    {
        type: "Languages",
        items: ["Python", "C", "Java", "C++"],
        icon: "💻",
        color: "from-blue-400 to-purple-600"
    },
    {
        type: "Frameworks",
        items: ["React", "Node.js", "Express", "MongoDB", "Learning More..."],
        icon: "🚀",
        color: "from-green-400 to-blue-500"
    },
    {
        type: "Tools",
        items: ["VS Code", "GitHub", "Figma", "MongoDB"],
        icon: "🛠️",
        color: "from-orange-400 to-red-500"
    },
];

const SkillsSection: FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const handleScroll = () => {
        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3) {
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
        <div className={tw("grid md:grid-cols-2 gap-12 items-start")}>
            <div className={tw("sticky top-32 glass-effect rounded-3xl p-8")}>
                <h2 className={tw("text-lg font-semibold opacity-70 mb-4")}>Skills & Expertise</h2>
                
                <AnimatePresence mode="wait">
                    <m.div
                        key={currentSection}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className={tw("mb-6")}
                    >
                        <div className={tw("text-6xl mb-4")}>
                            {skillsData[currentSection]?.icon}
                        </div>
                        <h1 className={tw(`text-5xl font-bold bg-gradient-to-r ${skillsData[currentSection]?.color} bg-clip-text text-transparent`)}>
                            {skillsData[currentSection]?.type || "Skills Overview"}
                        </h1>
                    </m.div>
                </AnimatePresence>
                
                <p className={tw("text-color-secondary text-lg leading-relaxed")}>
                    With 6 months in tech, I'm rapidly expanding my skillset. 2025 is going to be a huge year for learning and building amazing projects.
                </p>
            </div>

            <div className={tw("space-y-12")}>
                {skillsData.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        ref={(el) => (sectionRefs.current[sectionIndex] = el as HTMLDivElement)}
                        className={tw("glass-effect rounded-3xl p-8 card-hover")}
                    >
                        <div className={tw("flex items-center gap-4 mb-6")}>
                            <div className={tw("text-4xl")}>{section.icon}</div>
                            <h2 className={tw(`text-3xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`)}>
                                {section.type}
                            </h2>
                        </div>
                        
                        <div className={tw("grid grid-cols-2 gap-4")}>
                            {section.items.map((item, itemIndex) => (
                                <SkillItem
                                    key={`${sectionIndex}-${itemIndex}`}
                                    item={item}
                                    index={itemIndex}
                                    color={section.color}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SkillItem: FC<{ item: string; index: number; color: string }> = ({ item, index, color }) => {
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
            className={tw("glass-effect rounded-xl p-4 border border-glassBorder hover:scale-105 transition-transform duration-300")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <span className={tw(`text-lg font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`)}>
                {item}
            </span>
        </m.div>
    );
};

export default SkillsSection;