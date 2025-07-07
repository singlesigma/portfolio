import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { 
            icon: Github, 
            href: "https://github.com/gowthamrdyy",
            label: "GitHub"
        },
        { 
            icon: Linkedin, 
            href: "https://www.linkedin.com/in/gowtham-sree-charan-reddy-1a5872309/?originalSubdomain=in",
            label: "LinkedIn"
        },
        { 
            icon: Twitter, 
            href: "https://x.com/gowthamrdyy",
            label: "Twitter"
        },
        { 
            icon: Instagram, 
            href: "https://instagram.com/gowthamrdyy",
            label: "Instagram"
        }
    ];

    return (
        <footer className={tw("relative py-24 px-6 bg-surface")}>
            <div className={tw("max-w-6xl mx-auto")}>
                <div className={tw("text-center mb-16")}>
                    <m.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={tw("text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-textPrimary smooth-text")}
                    >
                        Building stories<br />through code.
                    </m.h1>
                    
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={tw("text-xl md:text-2xl text-textSecondary mb-12 max-w-2xl mx-auto")}
                    >
                        Crafting digital experiences that inspire and engage
                    </m.p>
                </div>

                <div className={tw("flex flex-col items-center gap-8 mb-16")}>
                    {/* Social Links */}
                    <m.div
                        className={tw("flex gap-4")}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((social, index) => (
                            <m.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={tw("glass p-4 rounded-apple transition-all duration-200 hover:bg-accent hover:text-white")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon className={tw("w-6 h-6")} />
                            </m.a>
                        ))}
                    </m.div>

                    {/* Action Buttons */}
                    <div className={tw("flex gap-4")}>
                        <m.a
                            href="https://drive.google.com/file/d/1QDok8LCtduRpiNaupw27OFMPu0OK3Oqc/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={tw("apple-button")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </m.a>
                        
                        <m.button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className={tw("glass p-3 rounded-apple transition-all duration-200 hover:bg-accent hover:text-white")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className={tw("w-6 h-6")} />
                        </m.button>
                    </div>
                </div>

                {/* Copyright */}
                <div className={tw("text-center pt-8 border-t border-border")}>
                    <p className={tw("text-textSecondary")}>
                        © 2025 Gowtham Sree. Crafted with passion and precision.
                    </p>
                </div>
            </div>
        </footer>
    );
}