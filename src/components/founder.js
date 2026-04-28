"use client";

export default function FounderThought() {
    return (
        <section className="bg-white py-12 md:py-26 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Founder Image */}
                <div className="flex justify-center md:justify-start mx-5 md:mx-0">
                    <div className="relative">
                        <img
                            src="/dummy.jpg"
                            alt="Founder"
                            className="w-[320px] h-[420px] object-cover rounded-xl shadow-xl"
                        />

                        {/* Accent Shape */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-black/20 rounded-xl"></div>
                    </div>
                </div>

                {/* Founder Message */}
                <div>
                    <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                        Thought of the Founder
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1C18] leading-tight mb-6">
                        Powering Tomorrow With <br /> Sustainable Energy
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-8">
                        “Our mission is not only to install solar panels but to create a
                        cleaner and more sustainable future for generations to come.
                        At KK Enterprise, we believe that every rooftop has the potential
                        to generate power, reduce carbon footprints, and build energy
                        independence for our communities.”
                    </p>

                    <div>
                        <p className="font-semibold text-[#1E1C18] text-lg">
                            Mr. Krushal Patel
                        </p>
                        <p className="text-sm text-gray-500">
                            MD & Founder, KK Enterprise
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}