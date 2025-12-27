import React from "react";
import Image from "next/image";
import localFont from 'next/font/local'

const satoshi = localFont({
    src: '../../../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

const AboutSection = () => {
    return (
        <div className={satoshi.className}>
            <div className="items-center py-6 px-4 sm:py-4 md:py-0 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    alt="Image of Joyce Jeoung with her family and Frosty the Snowman"
                    decoding="async"
                    data-nimg="fill"
                    className="max-w-prose mx-auto pt-2 pb-6"
                    width={400}
                    height={400}
                />
            </div>
            <h2 className="font-bold text-center text-black text-2xl pb-3 sm:pt-4 md:pt-0">a little bit about me...</h2>
            <div>
                <div className="text-black max-w-prose mx-auto xl:gap-16 items-center">
                    <p>
                        I'm a software engineer who enjoys turning real-world problems into simple, reliable tools. 
                    </p>
                    <br/>
                    <p>
                        I'm currently studying Computer Science, Linguistics, and Cognitive Science at UCLA, 
                        and I'm interested in both how software works and how people interact with it.
                        I enjoy building software end-to-end and iterating based on real feedback rather than assumptions.
                    </p>
                    <br/>
                    <p>
                        I've worked on projects ranging from full-stack development to small applied machine learning projects and data-driven tools,
                        with a focus on reliability and user-facing impact.
                        Currently, I'm working with LA Blueprint to build a mobile app using Next.js and Supabase around real stakeholder workflows.
                        Outside of engineering, I’ve  worked as an interpreter at international music events, 
                        experiences that strengthened how I communicate under pressure and collaborate across teams.
                    </p>
                    <br/>
                    <p>
                        I'm continuously learning and experimenting, 
                        and I'm excited by environments where I can build, iterate, and grow while working on things that genuinely matter.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;