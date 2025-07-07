import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { Sparkles } from "lucide-react";

export default function Corner() {
    return (
        <div className={tw("absolute inset-0 pointer-events-none")}>
            <div className={tw("flex justify-between h-full")}>
                <div className={tw("flex flex-col justify-between h-full p-8")}>
                    <m.div
                        className={tw("w-8 h-8 rounded-tl-apple border-l-2 border-t-2 border-border opacity-40")}
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    <m.div
                        className={tw("w-8 h-8 rounded-bl-apple border-l-2 border-b-2 border-border opacity-40")}
                        initial={{ scale: 0, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                </div>
                
                <div className={tw("flex flex-col justify-between h-full p-8")}>
                    <m.div
                        className={tw("w-8 h-8 rounded-tr-apple border-r-2 border-t-2 border-border opacity-40")}
                        initial={{ scale: 0, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    <m.div
                        className={tw("flex items-center justify-center")}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <Sparkles className={tw("w-8 h-8 text-accent floating")} />
                    </m.div>
                </div>
            </div>
        </div>
    );
}