import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { LazyImage } from "./CommentSection";
import { Quote } from "lucide-react";

export default function Comments({
    index,
    name,
    comment,
    image,
    title = "Student at SRM University",
}: {
    index: number;
    name: string;
    comment: string;
    image?: string;
    title?: string;
}) {
    return (
        <m.div
            className={tw("glass p-6 md:p-8 card-hover relative overflow-hidden")}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
        >
            {/* Quote icon */}
            <Quote className={tw("absolute top-6 right-6 w-6 h-6 text-accent opacity-30")} />
            
            <div className={tw("flex gap-4 items-start mb-6")}>
                <div className={tw("relative flex-shrink-0")}>
                    <LazyImage
                        src={image ?? ""}
                        alt={name}
                        className={tw("w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-border")}
                    />
                    <div className={tw("absolute -inset-1 bg-accent rounded-full opacity-20 blur-sm")} />
                </div>
                
                <div className={tw("flex-1")}>
                    <h3 className={tw("text-xl md:text-2xl font-bold text-textPrimary mb-1")}>
                        {name}
                    </h3>
                    <p className={tw("text-sm md:text-base text-textSecondary")}>
                        {title}
                    </p>
                </div>
            </div>
            
            <blockquote className={tw("text-base md:text-lg leading-relaxed text-textSecondary italic pl-4 border-l-2 border-accent")}>
                "{comment}"
            </blockquote>
        </m.div>
    );
}