"use client";
import CountdownSection from '@/components/countdown';
import LocationsSection from '@/components/state';
import { hover } from 'framer-motion';
import { ArrowBigDown, ChevronDown, PhoneCall, Zap, Leaf, Home, Shield, User, Ruler, FileCheck, Wrench, Power, ZapIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const faqs = [
    {
        icon: "⏱",
        q: "How long does the subsidy take to credit?",
        a: "Government subsidies under PM Surya Ghar: Muft Bijli Yojana are typically credited within 30–90 days after successful installation and verification. Timelines may vary based on state and documentation.",
    },
    {
        icon: "⚡",
        q: "Does the solar system work during a power cut?",
        a: "On-grid systems do not work during a power cut for safety reasons. However, hybrid or off-grid systems with battery backup continue to supply electricity even when the grid is down.",
    },
    {
        icon: "🔧",
        q: "What maintenance is required?",
        a: "Solar panels require minimal maintenance — primarily periodic cleaning to remove dust and debris. We recommend a professional inspection once a year to check wiring, inverter health, and panel performance.",
    },
    {
        icon: "🏠",
        q: "Will installing panels damage my roof?",
        a: "No. Our installation team uses industry-standard mounting structures designed to protect your roof. We conduct a roof assessment before installation to ensure structural suitability.",
    },
    {
        icon: "🛡",
        q: "What is the warranty on the Solar system?",
        a: "Solar panels come with a 25-year performance warranty (typically guaranteeing ≥80% output). Inverters carry a 5–10 year warranty depending on the brand. Our workmanship warranty covers installation quality.",
    },
];

const billToKw = {
    "1000-2000": "1 kW",
    "2000-4000": "2 kW",
    "4000-6000": "3 kW",
    "6000-8000": "4 kW",
    "8000-10000": "5 kW",
    "10000+": "6+ kW",
};

const keyBenefits = [
    { icon: <Zap size={28} />, title: "Zero Bills", desc: "Eliminate your monthly electricity expenses entirely." },
    { icon: <Leaf size={28} />, title: "Eco Friendly", desc: "One 5kW system saves as much CO₂ as planting 100 trees." },
    { icon: <Home size={28} />, title: "Property Value", desc: "Homes with solar sell 4% higher than those without." },
    { icon: <Shield size={28} />, title: "27 Year Warranty", desc: "Peace of mind with industry-leading performance warranty." },
];

const installationSteps = [
    { num: "01", icon: <User size={22} />, title: "Consultation", desc: "We analyze your electricity bill and suggest the perfect system size." },
    { num: "02", icon: <Ruler size={22} />, title: "Site Survey", desc: "Engineers visit your roof to check shadow areas and structural strength." },
    { num: "03", icon: <FileCheck size={22} />, title: "Govt. Approvals", desc: "We handle all paperwork, subsidy applications, and net-metering liaisoning." },
    { num: "04", icon: <Wrench size={22} />, title: "Installation", desc: "Our certified team installs the panels and inverter in just 1–2 days." },
    { num: "05", icon: <Power size={22} />, title: "Activation", desc: "Net meter is installed, system is switched on, and you start saving!" },
];

const recentInstallations = [
    { src: "/projects/86.jpeg", title: "Residential Plant", kw: "86 kW", location: "Abhilasa sky, Ahmedabad" },
    { src: "/projects/97.jpeg", title: "Residential Plant", kw: "97 kW", location: "Shree nand elite, Ahmedabad" },
];

const brandLogos = [
    { logo: "/logo.webp", width: 190 },
    { logo: "/APS.png", width: 113 },
    { logo: "/WAAREE.png", width: 140 },
    { logo: "/logo-black.webp", width: 140 },
    { logo: "/sungrow.svg", width: 160 },
    { logo: "/kosol.svg", width: 140 },
    { logo: "/polycab.png", width: 140 },
    { logo: "/Vsole-Solar.svg", width: 140 },
    { logo: "/solar-yaan.webp", width: 140 },
    { logo: "/RR-Kabel.svg", width: 140 },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function FaqItem({ faq, index }) {
    const [open, setOpen] = useState(false);
    const colors = ["#F97316", "#EAB308", "#22C55E", "#3B82F6", "#8B5CF6"];
    const color = colors[index % colors.length];
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-3 bg-white shadow-sm">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
                <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-base"
                    style={{ backgroundColor: color }}
                >
                    {faq.icon}
                </span>
                <span className="flex-1 font-medium text-gray-800 text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    size={20}
                />
            </button>
            {open && (
                <div className="px-5 pb-4 pl-[4.5rem] text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.a}
                </div>
            )}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const Residential = () => {
    const [billRange, setBillRange] = useState("");
    const [kw, setKw] = useState("");

    function handleBillChange(e) {
        const value = e.target.value;
        setBillRange(value);
        setKw(billToKw[value] || "");
    }

    return (
        <>
            {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Soft blue overlay */}
                <div className="absolute inset-0 bg-blue-900/20" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

                    {/* Logo + Tagline — always centered */}
                    <div className="flex flex-col items-center text-center mb-8 sm:mb-12">

                        {/* Logo Pill */}
                        <Image
                            src="/logo.png"
                            alt="KK Enterprise"
                            width={500}
                            height={150}
                            priority
                            className="h-24 md:h-28 w-auto object-contain"
                        />

                        {/* Tagline */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-200 drop-shadow-lg leading-snug max-w-2xl px-2">
                            Enjoy near <span className='text-[#FF5630]'>ZERO ELECTRICITY</span> bills for{" "}
                            <span className="text-[#FF5630] font-bold">
                                <br />25 years
                            </span>*
                        </h1>
                    </div>

                    {/* Stats — responsive grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10 sm:mb-14">

                        {/* Left 3 */}
                        {[
                            { value: "1000+", label: "Happy\nCustomers" },
                            { value: "5+", label: "Years of\nexperience" },
                            { value: "10MW", label: "Solar\nInstallation" },
                        ].map((stat, i) => (
                            <div
                                key={`l${i}`}
                                className="bg-blend-saturation backdrop-blur-sm rounded-[50%] px-3 sm:px-6 py-3 sm:py-5 text-center shadow-lg flex flex-col items-center justify-center aspect-[2/1] sm:aspect-auto"
                            >
                                <div className="text-[#FF5630] text-xl md:text-2xl font-bold drop-shadow-sm">
                                    {stat.value}
                                </div>
                                <div className="text-white text-md md:text-sm font-medium whitespace-pre-line leading-tight mt-0.5 sm:mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}

                        {/* Right 3 */}
                        {[
                            { value: "Govt", label: "Approved" },
                            { value: "₹78,000", label: "Govt. Subsidy" },
                            { value: "Post", label: "Installation\nMaintenance" },
                        ].map((stat, i) => (
                            <div
                                key={`r${i}`}
                                className="bg-blend-saturation backdrop-blur-sm rounded-[50%] px-3 sm:px-6 py-3 sm:py-5 text-center shadow-lg flex flex-col items-center justify-center aspect-[2/1] sm:aspect-auto"
                            >
                                <div className="text-[#FF5630] text-xl md:text-2xl font-bold drop-shadow-sm">
                                    {stat.value}
                                </div>
                                <div className="text-white text-md md:text-sm font-medium whitespace-pre-line leading-tight mt-0.5 sm:mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 2. WHY SOLAR WINS ════════════════════════════════════════════ */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Why <span className="text-[#FF5630]">Solar Wins</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#FF5630] mx-auto mb-10 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left: Text */}
                        <div>
                            <h3 className="font-bold text-gray-800 text-lg mb-2">
                                Beat the Rising Cost of Grid Electricity
                            </h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Electricity prices have risen by <strong>40%</strong> in the last 5 years. Solar energy freezes your power cost at roughly ₹0 for the next 25 years.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    <strong>Grid Power:</strong> Cost increases every year.
                                </li>
                                <li>
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    <strong>Solar Power:</strong> One-time investment, free forever.
                                </li>
                                <li>
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    <strong>Maintenance:</strong> Solar requires only water cleaning.
                                </li>
                            </ul>
                        </div>

                        {/* Right: Cost Comparison Card */}
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5 text-center">
                                25 Year Cost Comparison (For 3kW System)
                            </p>
                            <div className="mb-5">
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-gray-600 font-medium">Grid Bill</span>
                                    <span className="text-gray-800 font-bold">₹9 Lakhs</span>
                                </div>
                                <div className="w-full bg-red-500 h-8 rounded-md" />
                            </div>
                            <div className="mb-5">
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-gray-600 font-medium">Solar Cost</span>
                                    <span className="text-gray-800 font-bold">₹1.7 Lakhs</span>
                                </div>
                                <div className="w-[20%] bg-green-500 h-8 rounded-md" />
                            </div>
                            <div className="mt-4 text-center bg-orange-50 rounded-xl py-3 px-4">
                                <p className="text-gray-700 text-sm font-medium">
                                    You save approx{" "}
                                    <span className="text-[#FF5630] font-bold text-lg">₹7.3 Lakhs</span>{" "}
                                    with Solar!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CountdownSection />


            {/* ══ 3. KEY BENEFITS ══════════════════════════════════════════════ */}
            <section className="py-16 bg-[#F5F5F5]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Key <span className="text-[#FF5630]">Benefits</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#FF5630] mx-auto mb-10 rounded-full" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {keyBenefits.map((b, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-[#FF5630] mx-auto mb-4">
                                    {b.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">{b.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 4. INSTALLATION PROCESS ══════════════════════════════════════ */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Installation <span className="text-[#FF5630]">Process</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#FF5630] mx-auto mb-10 rounded-full" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {installationSteps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center hover:shadow-md rounded-2xl p-5 border border-gray-100 bg-white transition">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-[#FF5630] hover:text-white border-2 border-[#FF5630] mb-3 shadow-md hover:bg-[#FF5630] "bg-[#FF5630]" transition-colors}`}>
                                    {step.icon}
                                </div>
                                <span className="text-xs text-orange-400 font-bold mb-1">{step.num}</span>
                                <h3 className="font-bold text-gray-800 text-md mb-1">{step.title}</h3>
                                <p className="text-gray-700 text-md leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 5. RECENT INSTALLATIONS ══════════════════════════════════════ */}
            <section className="py-16 bg-[#F5F5F5]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Recent <span className="text-[#FF5630]">Installations</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#FF5630] mx-auto mb-10 rounded-full" />
                    <div className="flex flex-wrap gap-6 justify-center">
                        {recentInstallations.map((proj, i) => (
                            <div key={i} className="w-94 rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white group">
                                <div className="overflow-hidden h-64">
                                    <img
                                        src={proj.src}
                                        alt={proj.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-3">
                                    <div className='flex justify-between'>
                                        <p className="font-semibold text-gray-800 text-md">{proj.title}</p>
                                        <p className="font-semibold text-[#FF5630] text-md">{proj.kw}</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">{proj.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 6. AVERAGE MONTHLY BILL ══════════════════════════════════════ */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Bill Calculator Card */}
                    <div className="bg-[#F5F5F5] rounded-2xl p-8 md:p-12 border border-gray-100">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
                            Average Monthly Bill
                        </h2>
                        <p className="text-gray-500 text-center mb-8 text-sm">
                            Select your average monthly electricity bill to find the ideal solar system size for your home.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    Monthly Light Bill Consuming Amount
                                </label>
                                <select
                                    value={billRange}
                                    onChange={handleBillChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                                >
                                    <option value="">Select Monthly Light Bill</option>
                                    <option value="1000-2000">₹1,000 – ₹2,000</option>
                                    <option value="2000-4000">₹2,000 – ₹4,000</option>
                                    <option value="4000-6000">₹4,000 – ₹6,000</option>
                                    <option value="6000-8000">₹6,000 – ₹8,000</option>
                                    <option value="8000-10000">₹8,000 – ₹10,000</option>
                                    <option value="10000+">₹10,000+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700">
                                    What You Require (kW)
                                </label>
                                <input
                                    type="text"
                                    value={kw}
                                    readOnly
                                    placeholder="kWh"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-700"
                                />
                            </div>
                        </div>

                        {kw && (
                            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                                <p className="text-gray-600 text-sm mb-1">Recommended system size for you</p>
                                <p className="text-3xl font-bold text-[#FF5630]">{kw}</p>
                                <p className="text-gray-500 text-xs mt-1">
                                    Based on your monthly bill of ₹{billRange.replace("-", " – ")}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <button
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    >
                        <h1 className="border-2 rounded-xl p-3 font-semibold text-gray-700 hover:text-black">
                            Contact Now <ArrowBigDown className="inline" />
                        </h1>
                    </button>
                </div>
            </section>

            {/* ══ 7. WORLD-CLASS MATERIALS ══════════════════════════════════════ */}
            <section className="py-16 bg-[#F5F5F5]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        World-Class <span className="text-[#FF5630]">Materials</span>
                    </h2>
                    <div className="w-12 h-1 bg-[#FF5630] mx-auto mb-3 rounded-full" />
                    <p className="text-center text-gray-500 text-md mb-10">
                        We don't compromise on quality. Your system is built using only top-tier components from trusted global brands.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                        {[
                            { label: "Premium Panels", brands: "TATA, Adani, Waaree, Pahal" },
                            { label: "Smart Inverters", brands: "Havells, Sofar, KSolare, Solar Yaan" },
                            { label: "AC/DC Wires", brands: "Polycab, Havells, RR cable, Finolex" },
                            { label: "Structure", brands: "Apollo, Tata Pipes, Hutch India (Hot Dip Galvanized)" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                                <p className="font-semibold text-md mb-1 text-[#FF5630]">{item.label}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.brands}</p>
                            </div>
                        ))}
                    </div>

                    {/* Brand text fallbacks */}
                    <div className="flex flex-wrap justify-center items-center gap-15 bg-orange-200 rounded-xl py-10">
                        {brandLogos.map((b, i) => (
                            <span key={i} className="text-gray-400 font-semibold text-sm hover:text-gray-700 transition">
                                <img src={b.logo} alt={b.logo} width={b.width} className="h-auto object-contain" />
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 8. LOCATIONS ═════════════════════════════════════════════════ */}
            <LocationsSection />

            {/* ══ 9. FAQ ════════════════════════════════════════════════════════ */}
            <section className="py-16 bg-white" id="faq">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-center text-xs font-semibold tracking-widest text-[#FF5630] uppercase mb-2">
                        Got Questions?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
                        Frequently Asked{" "}
                        <span className="text-yellow-400">Questions</span>
                    </h2>
                    <p className="text-center text-gray-500 text-sm mb-10">
                        Everything you need to know about solar installation, subsidy, and maintenance.
                    </p>
                    <div>
                        {faqs.map((faq, i) => (
                            <FaqItem key={i} faq={faq} index={i} />
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
};

export default Residential;