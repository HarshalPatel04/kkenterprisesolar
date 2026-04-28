"use client";

const teamMembers = [
    {
        name: "Keyur Patel",
        role: "Business Development Manager",
        image: "/dummy.jpg",
    },
    {
        name: "Amit Verma",
        role: "Solar Project Coordinator",
        image: "/dummy.jpg",
    },
    {
        name: "Urvashi Rathod",
        role: "Liasioning Head",
        image: "/dummy2.jpg",
    },
    {
        name: "Pathik Patel",
        role: "Marketing Manager",
        image: "/dummy.jpg",
    },
    {
        name: "Jainish Hirapara",
        role: "Customer Onboarding Specialist",
        image: "/dummy.jpg",
    },
    {
        name: "Urvashi Rathod",
        role: "Liasioning Head",
        image: "/dummy2.jpg",
    },
];

export default function ExpertTeam() {
    return (
        <section className="bg-[#F5F5F5] py-12 md:py-16 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">

                <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                    Our Expert Team
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1C18] mb-16">
                    Meet the Professionals Behind Our Success
                </h2>

                <div className="flex flex-wrap justify-center gap-10 w-75 md:w-auto">

                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="h-[320px] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-[#1E1C18]">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {member.role}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}