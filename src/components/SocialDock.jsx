import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
    { href: "mailto:ashutoshswami2003@gmail.com", label: "Email", iconClass: "fas fa-envelope", color: "text-gray-300 hover:text-white" },
    { href: "https://github.com/ashutosh-swami30", label: "GitHub", external: true, iconClass: "devicon-github-original", color: "text-gray-300 hover:text-white" },
    { href: "https://www.linkedin.com/in/ashutoshswami30/", label: "LinkedIn", external: true, iconClass: "devicon-linkedin-plain", color: "text-blue-400 hover:text-white" },
    { href: "https://leetcode.com/u/ashutoshswami2003/", label: "LeetCode", external: true, iconClass: "devicon-leetcode-plain", color: "text-yellow-400 hover:text-white" },
];

export default function SocialDock() {
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.5);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ x: 100 }}
                    // MOBILE: animate based on isOpen. DESKTOP: Always 0 (visible)
                    animate={{ 
                        x: typeof window !== 'undefined' && window.innerWidth < 768 
                            ? (isOpen ? 0 : 70) 
                            : 0 
                    }}
                    exit={{ x: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    // md:right-6 adds spacing on desktop; right-0 sticks to edge on mobile
                    className="fixed right-0 md:right-6 top-1/2 -translate-y-1/2 z-50 flex items-center"
                >
                    {/* --- MOBILE ARROW TRIGGER --- */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        // hidden on desktop (md:hidden)
                        className="md:hidden w-8 h-12 bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 border-r-0 rounded-l-xl flex items-center justify-center text-white/50 active:text-white"
                    >
                        <motion.i 
                            animate={{ rotate: isOpen ? 0 : 180 }}
                            className="fas fa-chevron-right text-xs"
                        />
                    </button>

                    {/* --- THE CAPSULE --- */}
                    <div
                        // rounded-l-3xl on mobile to stick to edge; rounded-full on desktop
                        className="flex flex-col items-center gap-4 px-2 py-4 rounded-l-3xl md:rounded-full border border-white/10 shadow-2xl"
                        style={{
                            background: "rgba(20, 20, 20, 0.85)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                        }}
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{ scale: 1.2, x: -5 }}
                                className={`w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors ${link.color}`}
                                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                onClick={() => setIsOpen(false)} // Close drawer after clicking a link
                            >
                                <i className={`${link.iconClass} text-xl`} />
                            </motion.a>
                        ))}
                        
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}