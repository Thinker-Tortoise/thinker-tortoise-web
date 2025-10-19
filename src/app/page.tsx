import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Game from "@/components/Game";
import Footer from "@/components/Footer";
import { getImagePath } from "@/utils/imageUtils";

/**
 * Home Component
 *
 * This is the main landing page for the game studio website.
 * It follows the structure from the provided mockup:
 * 1. Header section with background image and centered logo
 * 2. Description section with studio information
 * 3. Games section showcasing prototypes
 * 4. Footer with social links
 */
export default function Home() {
    // Actual images provided by user
    const headerBackground = getImagePath("/images/header_bg.png"); // Header background image
    const logoImage = getImagePath("/images/header_logo_tt.png"); // Thinker Tortoise logo

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <Header backgroundImage={headerBackground} logoImage={logoImage} />

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Description Section */}
                <section className="my-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            WELCOME!
                        </h2>
                        <div className="text-lg text-gray-700 space-y-4">
                            <p>
                                Thinker Tortoise is a Singapore-based game
                                studio crafting bite-sized experiences with
                                heart. We explore bold ideas through small,
                                polished games &mdash; one thoughtful step at a
                                time.
                            </p>
                            <p>
                                This page hosts our latest prototypes and
                                feedback links &mdash; a space for you to test,
                                share thoughts, and shape what we build next.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="my-12" id="games">
                    <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                        OUR PROJECTS
                    </h2>
                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {/* Game prototypes */}
                        {/* feedbackUrl should not be changed. It's a github redirect link*/}
                        <Game
                            title="Spells VS Monsters"
                            imageUrl={getImagePath("/images/games_banner_pvz.png")}
                            windowsDownloadUrl="https://drive.google.com/file/d/1rFJnDH2-oOoZN9Hc6jelpffL7qQQ-1sJ/view?usp=sharing"
                            macDownloadUrl="https://drive.google.com/file/d/131xepW2XYw-RpJGS1dnI5yRlQROrkyUR/view?usp=sharing"
                            feedbackUrl="https://thinker-tortoise.github.io/form-redirect/"
                        />
                    </div>
                </section>
            </main>

            {/* Socials Section */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* Twitter/X Button */}
                    <Link
                        href="https://x.com/TTortoiseGames"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-gray-200 hover:bg-gray-300 transition px-6 py-4 rounded-full w-full md:w-[32%]"
                    >
                        <span className="font-bold text-gray-800 flex-grow text-center pr-4">
                            FOLLOW FOR UPDATES
                        </span>
                        <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                                src={getImagePath("/images/social_icon_x.png")}
                                alt="Twitter/X"
                                width={40}
                                height={40}
                            />
                        </div>
                    </Link>

                    {/* Discord Button */}
                    <Link
                        href="https://discord.gg/dHyugnpQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-gray-200 hover:bg-gray-300 transition px-6 py-4 rounded-full w-full md:w-[32%]"
                    >
                        <span className="font-bold text-gray-800 flex-grow text-center pr-4">
                            JOIN THE CONVERSATION
                        </span>
                        <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                                src={getImagePath("/images/social_icon_discord.png")}
                                alt="Discord"
                                width={40}
                                height={40}
                            />
                        </div>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
