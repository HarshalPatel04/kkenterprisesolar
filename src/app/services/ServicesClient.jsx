"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Services() {
    const [open, setOpen] = useState(null)

    const toggle = (i) => {
        setOpen(open === i ? null : i)
    }

    const galleryRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

    const faqs = [
        {
            q: "What is Solar Asset Management (AM) and O&M?",
            a: "Solar asset management and O&M services ensure your solar system operates efficiently through monitoring, maintenance, cleaning, and repairs."
        },
        {
            q: "Who should consider AM & O&M services?",
            a: "Commercial, industrial, and solar farm owners benefit most from professional monitoring and maintenance."
        },
        {
            q: "Why is solar maintenance important?",
            a: "Regular maintenance increases system efficiency, prevents failures, and improves long-term ROI."
        },
        {
            q: "How often is maintenance needed?",
            a: "Most solar systems require inspection every 6-12 months depending on environment and size."
        },
        {
            q: "Is O&M expensive?",
            a: "O&M is a small cost compared to the energy loss and repair expenses caused by neglected systems."
        },
        {
            q: "Will O&M improve solar production?",
            a: "Yes — cleaning, inspection and monitoring can significantly improve solar output."
        }
    ]

    return (

        <div className="bg-[#f5f5f5] max-w-screen overflow-hidden">

            {/* HERO */}

            <section className="relative h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden">

                <img
                    src="6.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-white/60 backdrop-blur-xs"></div>

                <motion.div
                    initial={{ opacity: 0, y: 140 }}
                    animate={{ opacity: 4, y: 0 }}
                    transition={{ duration: .8 }}
                    className="relative max-w-4xl px-6"
                >

                    <p className="inline-block bg-white px-6 py-2 rounded-full shadow text-sm">
                        Maximize Your Solar Efficiency
                    </p>

                    <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-tight">

                        Your <span className="text-[#FF5630] italic">Solar Facilities</span>
                        <br />
                        Deserve the Best Care

                    </h1>

                    <p className="mt-6 mb-6 text-gray-600">
                        With <b>KK ENTERPRISE</b> maximize your solar investment with expert maintenance.
                    </p>

                    <Link href="#contact"><span className="border-2 border-[#FF5630] font-semibold px-6 py-3 rounded-full hover:bg-[#FF5630] hover:text-white transition">
                        Schedule a Site Visit
                    </span></Link>

                </motion.div>

            </section>

            {/* BRANDS */}

            <section className="max-w-6xl mx-auto pt-20">

                <p className="text-[#FF5630] font-semibold text-center mb-12">
                    We Service Leading Solar Brands
                </p>


                <div className="flex flex-wrap justify-center items-center gap-16">


                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    ><img src="logo.webp" alt="Adani" className="w-40 h-auto" /></motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 130 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    ><img src="APS.png" alt="APS" className="w-35 md:w-30 h-auto" /></motion.div>


                    {/* <img src="APS (2).png" alt="APS" className="w-140 h-auto" /> */}


                    <motion.div
                        initial={{ opacity: 0, y: 160 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    ><img src="WAAREE.png" alt="WAAREE" className="w-40 h-auto" /></motion.div>


                    {/* <img src="Rayzon.png" alt="Rayzon" className="w-140 h-auto" /> */}


                    <motion.div
                        initial={{ opacity: 0, y: 190 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    ><img src="logo-black.webp" alt="Rayzon" className="w-40 h-auto" /></motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 220 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    ><img src="sungrow.svg" alt="KSolare" className="w-40 h-auto" /></motion.div>

                </div>

            </section>


            {/* ABOUT */}

            <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 px-6 pt-20">

                <motion.div
                    initial={{ opacity: 0, x: -140 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >

                    <p className="text-[#FF5630] font-semibold mb-3">
                        About us
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">

                        Ensures peak solar performance and efficient clean energy
                        <span className="text-gray-400"> with expert maintenance.</span>

                    </h2>

                    <p className="mt-6 text-gray-600">
                        Equivalent To Planting <span className="text-[#FF5630] font-bold">150 Trees</span> Annually.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 140 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        At <b>KK ENTERPRISE</b> we ensure maximum efficiency and long-term reliability.
                    </p>

                    <h1 className="text-6xl md:text-8xl font-bold text-[#FF5630] leading-none">
                        15MW
                    </h1>

                    <p className="text-gray-600">
                        Capacity managed delivering efficiency and reliability.
                    </p>

                </motion.div>

            </section>

            {/* SERVICES */}

            <section className="py-15 md:py-20 text-center">

                <p className="text-[#FF5630] text-xl md:text-lg mb-6 md:mb-0 font-semibold">
                    Our services for you
                </p>

                <h2 className="text-5xl font-semibold mt-4 mb-20">
                    What do we offer to you.
                </h2>

                <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto px-6">

                    {[
                        { title: "Solar Consulting", description: "Expert guidance to help you plan, design, and implement the right solar solution." },
                        { title: "Operations & Maintenance", description: "Ensuring optimal system performance through regular monitoring, maintenance, and support." },
                        { title: "Turnkey Projects", description: "Complete solar solutions from design and installation to commissioning." },
                        { title: "Independent Engineering", description: "Unbiased technical evaluation, inspection, and performance assessment for solar projects." },
                        { title: "Asset Management", description: "Maximizing your solar investment through efficient management and performance optimization." },
                        { title: "Technical Expertise", description: "Skilled professionals delivering reliable engineering and solar technology solutions." }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >

                            <h3 className="text-xl font-semibold mb-3">
                                {s.title}
                            </h3>

                            <p className="text-gray-500 mb-3">
                                {s.description}
                            </p>

                            <span className="text-[#FF5630] text-xl">→</span>

                        </motion.div>
                    ))}

                </div>

            </section>

            {/* SCROLL GALLERY */}

            <section
                ref={galleryRef}
                className="relative md:h-85 overflow-hidden flex items-center bg-[#f5f5f5]"
            >

                <motion.div
                    style={{ x }}
                    className="flex items-center gap-4 md:gap-16 px-0 md:px-10"
                >

                    {/* image 1 */}
                    <div className="w-25 md:w-65 h-17 md:h-42.5 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/projects/1.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* image 2 */}
                    <div className="w-30 md:w-[320px] h-20 md:h-55 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/projects/86.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* center large image */}
                    <div className="w-15 md:w-65 h-30 md:h-90 overflow-hidden rounded-lg shadow-xl">
                        <img
                            src="/projects/2.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* image 4 */}
                    <div className="w-25 md:w-65 h-15 md:h-40 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/projects/95.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* image 5 */}
                    <div className="w-30 md:w-[320px] h-20 md:h-50 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/projects/97.jpeg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </motion.div>

            </section>

            {/* STATS */}

            <p className="max-w-7xl mx-4 md:mx-auto pt-19 md:pt-24 text-2xl md:text-5xl font-bold text-clip">Focus on Solar Power. We’ll Handle the Rest. Smarter maintenance, real-time insights, and maximum performance—made simple with KK ENTERPRISE.</p>

            <section className="max-w-7xl mx-auto mb-6 md:mb-0 py-10 md:py-24 grid md:grid-cols-3 gap-10 md:gap-16 px-6">


                {[
                    ["1,000", "+", "Systems Serviced"],
                    ["15", "+ MW", "Solar Capacity Managed"],
                    ["99", "%", "Performance Uptime"]
                ].map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 140 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-6xl font-semibold">
                            {s[0]}
                        </span>

                        <span className="text-6xl font-semibold text-[#FF5630]">
                            {s[1]}
                        </span>

                        <p className="mt-2 font-semibold">
                            {s[2]}
                        </p>

                    </motion.div>
                ))}

            </section>

            {/* WHY CHOOSE */}

            <section className="bg-black text-white py-16 md:py-20">

                <div className="text-center mb-9 md:mb-16">

                    <p className="text-[#FF5630]">
                        Reliability Matters
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold">
                        Why choose us?
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto px-6">

                    {[
                        { title: "Performance Driven", description: "We maximize solar efficiency and reliability." },
                        { title: "Rapid Response", description: "Our team provides quick support and timely solutions whenever you need assistance." },
                        { title: "Transparent Pricing", description: "Clear and honest pricing with no hidden costs or unexpected charges." },
                        { title: "Personal Expertise", description: "Experienced professionals delivering tailored solar solutions for every project." },
                        { title: "Affordable Pricing", description: "Cost-effective solar services designed to deliver maximum value for your investment." },
                        { title: "Satisfaction Guaranteed", description: "We are committed to delivering quality service and complete customer satisfaction." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#0F0F10] p-8 rounded-2xl border border-white/10"
                        >

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400">
                                {item.description}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </section>

            {/* PROCESS */}

            <section className="bg-black text-white text-center pb-20">

                <p className="text-[#FF5630]">
                    We've Got You Covered
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold mb-10 md:mb-20">
                    How to get started
                </h2>

                <div className="max-w-4xl mx-auto space-y-6 md:space-y-16">

                    {[
                        "Reach Out, Hassle-Free",
                        "We Understand Your Solar Needs",
                        "Sit Back While We Handle the Rest"
                    ].map((step, i) => (
                        <div key={i} className="bg-[#0F0F10] p-8 rounded-xl">

                            <h3 className="text-lg text-gray-400 mb-2">
                                STEP {String(i + 1).padStart(2, '0')}
                            </h3>

                            <p className="text-xl">
                                {step}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

            {/* FAQ */}

            <section className="py-10 md:py-20 max-w-4xl mx-auto px-6">

                <p className="text-center text-[#FF5630]">
                    Got Questions?
                </p>

                <h2 className="text-3xl md:text-5xl text-center font-semibold mb-16">
                    We've got answers
                </h2>

                <div className="space-y-6">

                    {faqs.map((f, i) => (

                        <div key={i} className="bg-white rounded-full px-6 py-5 shadow">

                            <button
                                onClick={() => toggle(i)}
                                className="flex justify-between w-full text-left"
                            >

                                <span>{f.q}</span>
                                <span>{open === i ? "−" : "+"}</span>

                            </button>

                            {open === i && (
                                <p className="mt-4 text-gray-600">
                                    {f.a}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

                <div className="text-center mt-12">

                    <p className="mb-4">
                        Can't find your answer?
                    </p>

                    <button className="bg-black text-white px-8 py-4 rounded-full">
                        <a href="mailto:info@kkenterprise.com">Send me an email</a>
                    </button>

                </div>

            </section>

        </div>
    );
}