import * as m from "motion/react-m"
import { tw } from "../../twind/twind";
import { Heart, Send } from "lucide-react";

export default function LastSegment() {
    return (
        <section className={tw("py-32 px-6 relative overflow-hidden")}>
            <div className={tw("max-w-4xl mx-auto text-center")}>
                <m.div
                    className={tw("flex justify-center mb-8")}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                >
                    <m.div
                        animate={{ 
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Heart className={tw("w-16 h-16 text-red-400 fill-current")} />
                    </m.div>
                </m.div>

                <m.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={tw("text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-textPrimary smooth-text")}
                >
                    Love at first sight.
                </m.h1>
                
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={tw("text-xl md:text-2xl text-textSecondary mb-12 leading-relaxed max-w-3xl mx-auto")}
                >
                    Pouring passion and precision into every design to create
                    experiences that are visually captivating and intuitively engaging.
                </m.p>

                <m.a
                    href="mailto:iamgowthamsree@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tw("inline-flex items-center gap-3 apple-button text-lg group")}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Send className={tw("w-5 h-5 group-hover:translate-x-1 transition-transform duration-200")} />
                    <span>Say Hello!</span>
                </m.a>
            </div>
        </section>
    );
}