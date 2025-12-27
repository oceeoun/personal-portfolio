"use client";
import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import useClickSound from '../hooks/useClickSound'; 
import Footer from '../components/Footer'
import Link from 'next/link';
import localFont from 'next/font/local'

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

export default function AboutPage() {
    const playClick = useClickSound();

    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div className="container mx-auto px-7 pt-25 pb-5 sm:pt-25">
                <div className={satoshi.className}>
                    <h1 className="text-3xl font-bold mb-1 sm:mb-4 md:mb-0 text-black text-center">About Me</h1>
                </div>
                <AboutSection />
            </div>
            <br/>
            <div className="text-center px-5">
            <Link href="/projects"><button onClick={() => {playClick();}} className="px-6 py-3 w-full sm:w-fit font-bold rounded-full mt-4 mr-4 bg-gradient-to-br from-gray-600 via-black to-gray-600 hover:bg-gradient-to-br hover:from-[#F0EDE9] hover:via-[#E6E1DD] hover:to-[#F0EDE9] text-white hover:text-black">view my projects →
                    <span className="block hover:text-black text-white rounded-full"></span>
                </button>
            </Link>
            </div>
            <br/>
            <br/>
            <Footer />
        </main >
    );
};