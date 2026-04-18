function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 text-center text-[#aaaaaa] border-t border-[#1a1a1a]">
            <p> {currentYear} Ashutosh, Built with minimalism in mind </p>
        </footer>
    )
}

export default Footer;