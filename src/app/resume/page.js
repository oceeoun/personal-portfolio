import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import localFont from 'next/font/local';
import Image from 'next/image';

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#DCD7D3]">
            <NavBar />
            <div className="container mx-auto px-7 pt-25 pb-5 sm:pt-25">
                <div className={satoshi.className}>
                    <h1 className="text-3xl font-bold mb-1 sm:mb-4 md:mb-0 text-black text-center">Joyce Jeoung - Resume</h1>
                </div>
            </div>

            <iframe
                src="/Joyce_Jeoung_Resume.pdf"
                width="90%"
                height="600px"
                className="border place-self-center"
            >
            </iframe>
            <div className={satoshi.className}>
                <p className="p-6 place-self-center text-black">alternative download link: <a href="/Joyce_Jeoung_Resume.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Joyce_Jeoung_Resume.pdf</a></p>
            </div>

            <Footer />
        </main >
    );
};