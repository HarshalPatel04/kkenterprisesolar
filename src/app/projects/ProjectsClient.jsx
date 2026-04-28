"use client"

import { motion } from "framer-motion";

export const metadata = {
    title: "Projects",
    description:
        "Learn about KK Enterprise, our founders, expert team, and commitment to solar excellence.",
};

export default function ProjectsPage() {

    const projects = [
        {
            title: "Industrial Plant",
            location: "Mother Agro, Ahmedabad",
            capacity: "110 KW",
            img: "/projects/1.jpeg"
        },
        {
            title: "Residential Plant",
            location: "Shree nand elite, Ahmedabad",
            capacity: "97 KW",
            img: "/projects/97.jpeg"
        },
        {
            title: "Residential Plant",
            location: "Abhilasa sky, Ahmedabad",
            capacity: "86 KW",
            img: "/projects/86.jpeg"
        },
        {
            title: "Industrial Plant",
            location: "Vatva GIDC, Ahmedabad",
            capacity: "95 KW",
            img: "/projects/95.jpeg"
        },
    ]


    return (

        <div className="bg-[#F5F5F5]">

            {/* HERO */}


            <section
                className="relative h-[40vh] md:h-[60vh] mb-10 md:mb-20 pt-16 md:pt-35 items-center justify-center text-center sm:bg-top md:bg-cover"
                style={{
                    backgroundImage:
                        "url('landingIMG3.jpg')",
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="text-5xl md:text-6xl font-semibold"
                >

                    <p className="text-white">Our <span className="text-[#FF5630] italic">Solar Projects</span></p>

                </motion.h1>

                <p className="mt-6 text-white  max-w-2xl mx-6 md:mx-auto">
                    Explore the solar plants and renewable projects we manage
                    across India delivering reliable clean energy.
                </p>
            </section>


            {/* PROJECT STATS */}

            <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 pb-10 md:pb-24 px-6">


                <motion.div
                    initial={{ opacity: 0, x: 140 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-semibold">1000<span className="text-[#FF5630]">+</span></h2>
                        <p className="text-gray-600 mt-2">Systems Serviced</p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 180 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    className="text-center"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-semibold text-[#FF5630]">15+MW</h2>
                        <p className="text-gray-600 mt-2">Capacity Managed</p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 220 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    className="text-end"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-semibold">99<span className="text-[#FF5630]">%</span></h2>
                        <p className="text-gray-600 mt-2">Performance Uptime</p>
                    </div>

                </motion.div>

            </section>


            {/* PROJECT GRID */}

            <section className="max-w-7xl mx-auto pb-20 md:pb-32 px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {projects.map((project, i) => (

                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                        >

                            {/* IMAGE */}

                            <div className="h-55 overflow-hidden">

                                <img
                                    src={project.img}
                                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                />

                            </div>

                            {/* CONTENT */}

                            <div className="p-6">

                                <h3 className="text-xl text-center font-semibold">
                                    {project.title}
                                </h3>

                                <div className="flex-row md:flex justify-between items-center text-center mt-6">

                                    <span className="text-[#FF5630] font-semibold">
                                        {project.capacity}
                                    </span>

                                    <p className="text-gray-500">
                                        {project.location}
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>

        </div>

    )

}