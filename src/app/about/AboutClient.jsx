"use client";

import FounderThought from "@/components/founder";
import ExpertTeam from "@/components/team";

export const metadata = {
    title: "About Us",
    description:
        "Learn about KK Enterprise, our founders, expert team, and commitment to solar excellence.",
};

export default function About() {
    return (
        <>
            {/* HERO */}
            <section
                className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('aboutIMG.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-white max-w-3xl px-6">
                    <h1 className="text-5xl font-semibold mb-6">
                        About KK ENTERPRISE
                    </h1>
                    <p className="text-white/80">
                        We provide reliable solar solutions for residential and commercial
                        clients across India.
                    </p>
                </div>
            </section>

            {/* ABOUT CONTENT */}
            <section className="bg-[#EDE8DF] py-12 md:py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <img
                        src="aboutIMG2.jpg"
                        alt="solar"
                        className="rounded-lg shadow-lg"
                    />

                    <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                            Complete Commercial & Residential Solar Systems
                        </p>
                        <h2 className="text-4xl font-semibold mb-6">
                            We Are Pioneers In Renewable Energy
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We drive the transition to sustainable and affordable energy
                            systems using innovative solar technologies.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to provide clean, reliable solar energy solutions
                            that reduce electricity bills and protect the environment.
                        </p>
                    </div>
                </div>
            </section>

            <FounderThought />

            <ExpertTeam />

            {/* FEATURES */}
            <section className="bg-[#2E2C28] text-white py-24 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-semibold mb-4">
                        Why Choose KK ENTERPRISE?
                    </h2>
                    <p className="text-white/70">
                        Sustainable, Reliable & Affordable Energy Solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Save Your Money",
                            desc: "Reduce electricity bills and increase your property value with solar installation.",
                        },
                        {
                            title: "Energy Independence",
                            desc: "Generate your own clean energy and reduce dependency on grid power.",
                        },
                        {
                            title: "Certified Engineers",
                            desc: "Our expert team designs and installs high-performance solar systems.",
                        },
                        {
                            title: "Rapid Response",
                            desc: "Our team provides quick support and timely solutions whenever you need assistance."
                        },
                        {
                            title: "Performance Driven",
                            desc: "We provide quick and efficient service to meet your solar energy needs."
                        },
                        {
                            title: "Satisfaction Guaranteed",
                            desc: "We are committed to delivering quality service and complete customer satisfaction."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#3A3732] p-8 rounded-lg text-left">
                            <h4 className="text-lg font-semibold mb-4">
                                {item.title}
                            </h4>
                            <p className="text-white/70 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#EDE8DF] py-20 text-center px-6">
                <h2 className="text-4xl font-semibold mb-6">
                    Ready To Switch To Solar?
                </h2>
                <a
                    href="/#contact"
                    className="bg-[#2A2620] text-white px-8 py-3 rounded-md"
                >
                    Get Free Consultation
                </a>
            </section>
        </>
    );
}