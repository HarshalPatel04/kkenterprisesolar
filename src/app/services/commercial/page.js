"use client";
import LocationsSection from '@/components/state';
import { ArrowBigDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Commercial = () => {

    const [billRange, setBillRange] = useState("");
    const [kw, setKw] = useState("");

    const billToKw = {
        "10000-20000": "20 kW",
        "20000-40000": "40 kW",
        "40000-60000": "60 kW",
        "60000-80000": "80 kW",
        "80000-100000": "100 kW",
        "100000+": "100+ kW"
    };

    function handleBillChange(e) {
        const value = e.target.value;
        setBillRange(value);
        setKw(billToKw[value] || "");
    }

    return (
        <>
            <section
                className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-top"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-white max-w-3xl px-6">
                    <h1 className="text-5xl font-semibold mb-6">
                        Commercial
                    </h1>
                    <p className="text-white/80">
                        We provide reliable solar solutions for residential and commercial
                        clients across India.
                    </p>
                </div>
            </section>

            <section className="pt-24 pb-12 bg-[#F5F5F5]">

                <div className="max-w-6xl mx-auto px-6">

                    {/* IMAGE */}

                    <div className="flex justify-center mb-14">

                        <img
                            src="/projects/95.jpeg"
                            className="w-full max-w-4xl rounded-lg shadow-md object-cover"
                        />

                    </div>

                    {/* FORM */}

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* BILL DROPDOWN */}

                        <div>

                            <label className="block text-sm font-medium mb-2">
                                Monthly Light Bill Consuming Amount
                            </label>

                            <select
                                value={billRange}
                                onChange={handleBillChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                            >

                                <option value="">Select Monthly Light Bill</option>

                                <option value="10000-20000">$10000 - $20000</option>
                                <option value="20000-40000">$20000 - $40000</option>
                                <option value="40000-60000">$40000 - $60000</option>
                                <option value="60000-80000">$60000 - $80000</option>
                                <option value="80000-100000">$80000 - $100000</option>
                                <option value="100000+">$100000+</option>

                            </select>

                        </div>

                        {/* KW FIELD */}

                        <div>

                            <label className="block text-sm font-medium mb-2">
                                What You Require (kW)
                            </label>

                            <input
                                type="text"
                                value={kw}
                                readOnly
                                placeholder="kWh"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
                            />

                        </div>

                    </div>

                </div>

                <div className='flex justify-center items-center mt-10'>
                    <Link href="#contact">
                        <h1 className='border-2 rounded-xl p-3 font-semibold text-gray-700 hover:text-black'>Contact Now <ArrowBigDown className='inline' /></h1>
                    </Link>
                </div>

            </section>

            <LocationsSection />

        </>
    )
}

export default Commercial