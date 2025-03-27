export default function Footer() {
    const tabs = [
        { to: "/", name: "Home" },
        { to: "/about", name: "About" },
        { to: "/FAQs", name: "faq" },
        { to: "/support", name: "Support" },
      ];
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                
                {/* Copyright Section */}
                <p className="text-sm">© 2024 Company, Inc</p>

                {/* Logo Placeholder (Replace with an actual logo if needed) */}
                <a href="/" className="text-white text-2xl font-bold">
                    SDS
                </a>

                {/* Navigation Links */}
                <ul className="flex space-x-6 mt-4 md:mt-0">
                    <li>
                        <a href="#" className="hover:text-white transition">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition">Features</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition">FAQs</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition">About</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
