import { FC, useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m"
import { tw } from "../../twind/twind";
import { Code2, Wrench, Layers, Zap, Palette, Database, Brain, Rocket } from "lucide-react";

const skillsData = [
    {
        type: "Languages",
        items: ["Python", "C", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
        icon: Code2,
        description: "Programming languages I use to bring ideas to life with clean, efficient code",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10"
    },
    {
        type: "Frameworks",
        items: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS", "Motion", "Vue.js"],
        icon: Layers,
        description: "Modern frameworks and libraries for building scalable applications",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10"
    },
    {
        type: "Tools",
        items: ["VS Code", "GitHub", "Figma", "MongoDB", "Vercel", "Docker", "Postman"],
        icon: Wrench,
        description: "Essential tools that power my development workflow and productivity",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-500/10"
    },
    {
        type: "Design",
        items: ["UI/UX", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping"],
        icon: Palette,
        description: "Design tools and skills for creating beautiful user experiences",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-500/10"
    },
    {
        type: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "GraphQL"],
        icon: Database,
        description: "Database technologies for efficient data management and storage",
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-500/10"
    },
    {
        type: "AI/ML",
        items: ["Machine Learning", "TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"],
        icon: Brain,
        description: "Artificial Intelligence and Machine Learning technologies for smart solutions",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500/10"
    }
];

const SkillsSection: FC = () => {
    const [activeSkill, setActiveSkill] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const skillsY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={containerRef} className={tw("relative min-h-screen py-20")}>
            {/* Animated Background */}
            <m.div
                className={tw("absolute inset-0 overflow-hidden")}
                style={{ y: backgroundY }}
            >
                {/* Floating geometric shapes */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <m.div
                        key={i}
                        className={tw("absolute opacity-5")}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                        }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                            x: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <div className={tw(`w-full h-full bg-gradient-to-r ${skillsData[i % skillsData.length].color} rounded-full`)} />
                    </m.div>
                ))}
            </m.div>

            {/* Main Content */}
            <div className={tw("relative z-10 max-w-7xl mx-auto px-6")}>
                {/* Header */}
                <m.div
                    className={tw("text-center mb-20")}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <m.h2 className={tw("text-6xl md:text-8xl font-bold mb-6")}>
                        <span className={tw("text-textPrimary")}>My </span>
                        <span className={tw("text-gradient")}>Arsenal</span>
                    </m.h2>
                    <p className={tw("text-xl text-textSecondary max-w-2xl mx-auto")}>
                        A comprehensive toolkit of technologies and skills I use to create exceptional digital experiences
                    </p>
                </m.div>

                {/* Interactive Skills Grid */}
                <div className={tw("grid lg:grid-cols-3 gap-8 mb-20")}>
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            skill={skill}
                            index={index}
                            isActive={activeSkill === index}
                            onHover={() => setActiveSkill(index)}
                        />
                    ))}
                </div>

                {/* Skills Showcase */}
                <m.div
                    className={tw("glass p-12 relative overflow-hidden")}
                    style={{ y: skillsY }}
                >
                    <div className={tw("grid md:grid-cols-2 gap-12 items-center")}>
                        {/* Left: Active Skill Details */}
                        <m.div
                            key={activeSkill}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={tw("flex items-center gap-4 mb-6")}>
                                {(() => {
                                    const IconComponent = skillsData[activeSkill].icon;
                                    return (
                                <m.div
                                    className={tw(`p-4 rounded-apple bg-gradient-to-r ${skillsData[activeSkill].color}`)}
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                >
                                    <IconComponent className={tw("w-8 h-8 text-white")} />
                                </m.div>
                                    );
                                })()}
                                <h3 className={tw("text-4xl font-bold text-textPrimary")}>
                                    {skillsData[activeSkill].type}
                                </h3>
                            </div>
                            
                            <p className={tw("text-lg text-textSecondary mb-8 leading-relaxed")}>
                                {skillsData[activeSkill].description}
                            </p>

                            {/* Skill Progress Bars */}
                            <div className={tw("space-y-4")}>
                                {skillsData[activeSkill].items.slice(0, 4).map((item, itemIndex) => (
                                    <div key={item} className={tw("space-y-2")}>
                                        <div className={tw("flex justify-between items-center")}>
                                            <span className={tw("text-textPrimary font-medium")}>{item}</span>
                                            <span className={tw("text-textSecondary text-sm")}>
                                                {85 + Math.random() * 15}%
                                            </span>
                                        </div>
                                        <div className={tw("h-2 bg-surface rounded-full overflow-hidden")}>
                                            <m.div
                                                className={tw(`h-full bg-gradient-to-r ${skillsData[activeSkill].color} rounded-full`)}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${85 + Math.random() * 15}%` }}
                                                transition={{ duration: 1, delay: itemIndex * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </m.div>

                        {/* Right: 3D Skill Visualization */}
                        <div className={tw("relative h-96")}>
                            <m.div
                                className={tw("absolute inset-0 flex items-center justify-center")}
                                animate={{ rotateY: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                {skillsData[activeSkill].items.map((item, itemIndex) => (
                                    <m.div
                                        key={item}
                                        className={tw(`absolute glass p-4 rounded-apple ${skillsData[activeSkill].bgColor}`)}
                                        style={{
                                            transform: `rotateY(${itemIndex * (360 / skillsData[activeSkill].items.length)}deg) translateZ(120px)`,
                                        }}
                                        whileHover={{ scale: 1.2, z: 50 }}
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2 + itemIndex * 0.2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <span className={tw("text-sm font-medium text-textPrimary whitespace-nowrap")}>
                                            {item}
                                        </span>
                                    </m.div>
                                ))}
                            </m.div>
                        </div>
                    </div>
                </m.div>

                {/* Call to Action */}
                <m.div
                    className={tw("text-center mt-20")}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <m.div
                        className={tw("inline-flex items-center gap-3 apple-button text-lg group")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Rocket className={tw("w-5 h-5 group-hover:translate-x-1 transition-transform duration-200")} />
                        <span>Let's Build Something Amazing</span>
                    </m.div>
                </m.div>
            </div>
        </div>
    );
};

const SkillCard: FC<{ 
    skill: typeof skillsData[0]; 
    index: number; 
    isActive: boolean;
    onHover: () => void;
}> = ({ skill, index, isActive, onHover }) => {
    return (
        <m.div
            className={tw(`glass p-8 card-hover relative overflow-hidden cursor-pointer transition-all duration-500 ${
                isActive ? 'ring-2 ring-accent shadow-apple-large' : ''
            }`)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={onHover}
            whileHover={{ scale: 1.02, y: -5 }}
        >
            {/* Background Gradient */}
            <m.div
                className={tw(`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-500`)}
                animate={{ opacity: isActive ? 0.1 : 0 }}
            />
            
            {/* Content */}
            <div className={tw("relative z-10")}>
                <div className={tw("flex items-center gap-4 mb-6")}>
                    {(() => {
                        const IconComponent = skill.icon;
                        return (
                    <m.div
                        className={tw(`p-3 rounded-apple bg-gradient-to-r ${skill.color}`)}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        animate={{ 
                            scale: isActive ? 1.1 : 1,
                            rotate: isActive ? 5 : 0
                        }}
                    >
                        <IconComponent className={tw("w-6 h-6 text-white")} />
                    </m.div>
                        );
                    })()}
                    <h3 className={tw("text-2xl font-bold text-textPrimary")}>
                        {skill.type}
                    </h3>
                </div>
                
                <p className={tw("text-textSecondary mb-6 leading-relaxed")}>
                    {skill.description}
                </p>

                {/* Skill Tags */}
                <div className={tw("flex flex-wrap gap-2")}>
                    {skill.items.slice(0, 3).map((item, itemIndex) => (
                        <m.span
                            key={item}
                            className={tw("px-3 py-1 bg-surface text-textPrimary rounded-pill text-xs font-medium")}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {item}
                        </m.span>
                    ))}
                    {skill.items.length > 3 && (
                        <span className={tw("px-3 py-1 bg-accent/20 text-accent rounded-pill text-xs font-medium")}>
                            +{skill.items.length - 3} more
                        </span>
                    )}
                </div>
            </div>
        </m.div>
    );
};

export default SkillsSection;