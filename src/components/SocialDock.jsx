import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
    { href: "mailto:ashutoshswami2003@gmail.com", label: "Email", external: false, iconClass: "fas fa-envelope", color: "text-gray-300 hover:text-white" },
    { href: "https://github.com/ashutosh-swami30", label: "GitHub", external: true, iconClass: "devicon-github-original", color: "text-gray-300 hover:text-white" },
    { href: "https://www.linkedin.com/in/ashutoshswami30/", label: "LinkedIn", external: true, iconClass: "devicon-linkedin-plain", color: "text-blue-400 hover:text-white" },
    { href: "https://leetcode.com/u/ashutoshswami2003/", label: "LeetCode", external: true, iconClass: "devicon-leetcode-plain", color: "text-yellow-400 hover:text-white" },
];

export default function SocialDock() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const heroThreshold = window.innerHeight * 0.9;
        const handleScroll = () => {
            setVisible(window.scrollY > heroThreshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    // Changed entry animation to slide in from the right
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    // Repositioned to right-center
                    className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
                >
                    <div
                        // Changed 'flex-row' (default) to 'flex-col'
                        className="flex flex-col items-center gap-3 px-2 py-4 rounded-full border border-white/10"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",

                            backdropFilter: "blur(12px) saturate(160%)",
                            WebkitBackdropFilter: "blur(12px) saturate(160%)",

                            boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                aria-label={link.label}
                                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/10 ${link.color}`}
                            >
                                <i className={`${link.iconClass} text-[20px]`} />
                            </a>
                        ))}

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}