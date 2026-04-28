"use client";
import LocationsSection from '@/components/state';
import { ArrowBigDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const Commercial = () => {

    const [billRange, setBillRange] = useState("");
    const [kw, setKw] = useState("");

    const billToKw = {
        "1000-2000": "1 kW",
        "2000-4000": "2 kW",
        "4000-6000": "3 kW",
        "6000-8000": "4 kW",
        "8000-10000": "5 kW",
        "10000+": "6+ kW"
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
                        Residential
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
                            src="/projects/86.jpeg"
                            className="w-64 md:w-194 h-full md:h-94 max-w-4xl rounded-lg shadow-md transform scale-110 object-cover"
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

                                <option value="1000-2000">$1000 - $2000</option>
                                <option value="2000-4000">$2000 - $4000</option>
                                <option value="4000-6000">$4000 - $6000</option>
                                <option value="6000-8000">$6000 - $8000</option>
                                <option value="8000-10000">$8000 - $10000</option>
                                <option value="10000+">$10000+</option>

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