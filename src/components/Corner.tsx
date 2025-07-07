import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import StarSVG from "../svgs/star";

export default function Corner() {
    return (
        <div className={tw("absolute inset-0 pointer-events-none")}>
            <div className={tw("flex justify-between h-full")}>
                <div className={tw("flex flex-col justify-between h-full p-8")}>
                    <m.div
                        className={tw("w-8 h-8 rounded-tl-3xl border-l-4 border-t-4 border-glassBorder opacity-60")}
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <m.div
                        className={tw("w-8 h-8 rounded-bl-3xl border-l-4 border-b-4 border-glassBorder opacity-60")}
                        initial={{ scale: 0, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    />
                </div>
                
                <div className={tw("flex flex-col justify-between h-full p-8")}>
                    <m.div
                        className={tw("w-8 h-8 rounded-tr-3xl border-r-4 border-t-4 border-glassBorder opacity-60")}
                        initial={{ scale: 0, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <m.div
                        className={tw("flex items-center justify-center")}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    >
                        <StarSVG className={tw("text-5xl text-accent floating-animation")} />
                    </m.div>
                </div>
            </div>
        </div>
    );
}