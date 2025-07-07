import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { lazy } from "react";

const FaArrowUp = lazy(() =>
    import("react-icons/fa6").then((module) => ({ default: module.FaArrowUp }))
);
const FaGithub = lazy(() =>
    import("react-icons/fa6").then((module) => ({ default: module.FaGithub }))
);
const FaInstagram = lazy(() =>
    import("react-icons/fa6").then((module) => ({
        default: module.FaInstagram,
    }))
);
const FaLinkedinIn = lazy(() =>
    import("react-icons/fa6").then((module) => ({
        default: module.FaLinkedinIn,
    }))
);
const FaXTwitter = lazy(() =>
    import("react-icons/fa6").then((module) => ({ default: module.FaXTwitter }))
);

export default function Footer() {
    return (
        <footer className={tw("relative overflow-hidden")}>
            <div className={tw("absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900")} />
            <div className={tw("absolute inset-0 bg-gradient-to-t from-black/50 to-transparent")} />
            
            <div className={tw("relative z-10 min-h-screen flex flex-col justify-between p-8 md:p-16")}>
                <div className={tw("flex-1 flex flex-col justify-center items-center text-center")}>
                    <m.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={tw("text-5xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text")}
                    >
                        Building stories<br />through code.
                    </m.h1>
                    
                    <m.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={tw("text-xl md:text-2xl text-color-secondary mb-12 max-w-2xl")}
                    >
                        Crafting digital experiences that inspire and engage
                    </m.p>
                </div>

                <div className={tw("flex flex-col items-center gap-8")}>
                    <m.div
                        className={tw("flex gap-4 glass-effect rounded-full p-2")}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {[
                            { icon: FaGithub, href: "https://github.com/gowthamrdyy", color: "hover:text-purple-400" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/gowtham-sree-charan-reddy-1a5872309/?originalSubdomain=in", color: "hover:text-blue-400" },
                            { icon: FaXTwitter, href: "https://x.com/gowthamrdyy", color: "hover:text-cyan-400" },
                            { icon: FaInstagram, href: "https://instagram.com/gowthamrdyy", color: "hover:text-pink-400" }
                        ].map((social, index) => (
                            <m.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={tw(`p-4 rounded-full glass-effect transition-all duration-300 ${social.color} hover:scale-110`)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon className={tw("text-2xl")} />
                            </m.a>
                        ))}
                    </m.div>

                    <div className={tw("flex gap-4")}>
                        <m.a
                            href="https://drive.google.com/file/d/1QDok8LCtduRpiNaupw27OFMPu0OK3Oqc/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={tw("px-8 py-3 rounded-full glass-effect border border-glassBorder font-semibold hover:bg-gradient-accent transition-all duration-300")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Résumé
                        </m.a>
                        
                        <m.button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className={tw("p-3 rounded-full glass-effect border border-glassBorder hover:bg-gradient-secondary transition-all duration-300")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaArrowUp className={tw("text-xl")} />
                        </m.button>
                    </div>
                </div>

                <div className={tw("text-center pt-8 border-t border-glassBorder")}>
                    <p className={tw("text-color-secondary opacity-70")}>
                        © 2025 Gowtham Sree. Crafted with passion and code.
                    </p>
                </div>
            </div>
        </footer>
    );
}