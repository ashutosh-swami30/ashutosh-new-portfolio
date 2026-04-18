import { useEffect } from "react";

export function useSpotlight() {

    useEffect(() => {
        let rafScheduled = false;

        function updateSpotlight(e) {
            if (rafScheduled) return

            rafScheduled = true;

            requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;

                document.body.style.background = 
                `
                    radial-gradient(
                        circle 200px at ${x}px ${y}px,
                        #1a1a1a 0%,
                        #111111 40%,
                        #0a0a0a 80%
                    )
                `

                rafScheduled = false;
            })
        }

        function resetSpotlight() {
            document.body.style.background = `
            radial-gradient(
                circle 180px at 50% 50%, 
                #222222 0%,
                #111111 40%,
                #0a0a0a 70%
                )
            `
        }

        document.addEventListener('mousemove', updateSpotlight, { passive: true })
        document.addEventListener('mouseleave', resetSpotlight)

        return () => {
            document.removeEventListener('mousemove', updateSpotlight)
            document.removeEventListener('mouseleave', resetSpotlight)
        }


    }, [])
}


