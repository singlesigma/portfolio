import { tw } from "../../twind/twind";
import * as m from "motion/react-m";
import { LazyImage } from "./CommentSection";

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
    const gradients = [
        "from-purple-400 to-pink-400",
        "from-blue-400 to-cyan-400",
        "from-green-400 to-blue-500",
        "from-yellow-400 to-orange-500",
        "from-red-400 to-pink-500",
        "from-indigo-400 to-purple-500"
    ];

    return (
        <m.div
            className={tw("glass-effect rounded-3xl p-6 md:p-8 card-hover relative overflow-hidden")}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className={tw(`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-5`)} />
            
            <div className={tw("relative z-10")}>
                <div className={tw("flex gap-4 items-center mb-6")}>
                    <div className={tw("relative")}>
                        <LazyImage
                            src={image ?? ""}
                            alt={name}
                            className={tw("w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-glassBorder")}
                        />
                        <div className={tw(`absolute -inset-1 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full opacity-20 blur-sm`)} />
                    </div>
                    
                    <div>
                        <h3 className={tw(`text-xl md:text-2xl font-bold bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent`)}>
                            {name}
                        </h3>
                        <p className={tw("text-color-secondary text-sm md:text-base opacity-70")}>
                            {title}
                        </p>
                    </div>
                </div>
                
                <blockquote className={tw("text-base md:text-lg leading-relaxed text-color-secondary italic")}>
                    "{comment}"
                </blockquote>
            </div>
        </m.div>
    );
}