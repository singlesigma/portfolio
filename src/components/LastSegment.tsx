import * as m from "motion/react-m"
import { tw } from "../../twind/twind";
import { FaHeart, FaRocket } from "react-icons/fa";

export default function LastSegment() {
    return (
        <div className={tw("py-32 relative overflow-hidden")}>
            <div className={tw("absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20")} />
            
            <m.div
                className={tw("relative z-10 text-center px-8 max-w-4xl mx-auto")}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={tw("flex justify-center mb-8")}>
                    <m.div
                        className={tw("relative")}
                        animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <FaHeart className={tw("text-6xl text-red-400")} />
                        <div className={tw("absolute inset-0 text-6xl text-red-400 animate-ping opacity-20")}>
                            <FaHeart />
                        </div>
                    </m.div>
                </div>

                <h1 className={tw("text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text")}>
                    Love at first sight.
                </h1>
                
                <p className={tw("text-xl md:text-2xl text-color-secondary mb-12 leading-relaxed")}>
                    Pouring passion and precision into every design to create
                    experiences that are visually captivating and intuitively engaging.
                </p>

                <m.a
                    href="mailto:iamgowthamsree@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tw("inline-flex items-center gap-4 px-8 py-4 rounded-full glass-effect border-2 border-glassBorder text-xl font-semibold hover:bg-gradient-accent transition-all duration-300 group")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <FaRocket className={tw("text-2xl group-hover:animate-bounce")} />
                    <span>Say Hello!</span>
                </m.a>
            </m.div>
        </div>
    );
}