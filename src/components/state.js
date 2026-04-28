"use client";

export default function LocationsSection() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6">

                {/* LEFT CONTENT */}

                <div>

                    <p className="text-green-600 font-semibold mb-4">
                        ☀ MANTUARY SERVICES
                    </p>

                    <h2 className="text-5xl font-semibold leading-tight mb-10">
                        Our Different
                        <br />
                        Location
                    </h2>

                    {/* ADDRESS */}

                    <div className="space-y-8 text-gray-700 text-center md:text-start">

                        <div>
                            <p className="font-medium">
                                609-610, 6th Floor, Rajvi Icon
                            </p>
                            <p>
                                Nikol,
                                Ahmedabad – 382350
                                Gujarat, India
                            </p>
                        </div>

                        <hr />

                        <div>
                            <p className="font-semibold">Office Number</p>
                            <p>+91 99255 90208 , +91 97270 97421</p>
                        </div>

                        <hr />

                        <div>
                            <p className="font-semibold">Our Branches -</p>
                            <p className="font-medium">
                                Pragati Empire IT park B-414, Sudama Chowk
                            </p>
                            <p>
                                Mota Varachha,
                                Surat – 394105
                                Gujarat, India
                            </p>
                            <p className="mt-3 font-semibold">Vadodara, Bhavnagar, Amreli, Rajkot, Junagadh, Jamnagar, Banaskantha, Mehesana, Sabar Kantha, Mahisagar, Panch Mahal</p>
                        </div>

                        <hr />

                        <div>
                            <p className="font-semibold">Warehouse -</p>
                            <p className="font-medium">
                                Ashwamegh Shopping, Vivekandnagar
                            </p>
                            <p>
                                Hathijan,
                                Ahmedabad – 382445
                                Gujarat, India
                            </p>
                        </div>

                        <hr />

                    </div>

                </div>

                {/* MAP */}

                <div className="relative w-full md:w-170 mt-0 md:mt-35">

                    <img
                        src="/gujarat.jpg"
                        className="w-full"
                    />

                </div>

            </div>
        </section>
    );
}