"use client";

import { useEffect, useState } from "react";
import { Hourglass } from "lucide-react";

export default function CountdownSection() {
    const targetDate = new Date("2027-03-31T23:59:59").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: "000",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            );
            const seconds = Math.floor(
                (distance % (1000 * 60)) / 1000
            );

            setTimeLeft({
                days: String(days).padStart(3, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const cards = [
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HOURS" },
        { value: timeLeft.minutes, label: "MINS" },
        { value: timeLeft.seconds, label: "SECS" },
    ];

    return (
        <section className="bg-blue-50 py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">

                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mb-8">
                    <Hourglass className="w-10 h-10 text-[#FF5630]" />
                </div>

                <h3 className="uppercase tracking-[6px] font-semibold text-sm md:text-lg mb-6">
                    Time Left To Get Benefit Of Scheme
                </h3>

                <h2 className="text-3xl md:text-5xl font-bold text-green-500 mb-4">
                    PM Surya Ghar Subsidy
                </h2>

                <p className="text-xl md:text-3xl text-[#FF5630]/70 mb-16">
                    Scheme closes on{" "}
                    <span className="text-red-500 font-bold">
                        31 March 2027
                    </span>
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((item) => (
                        <div
                            key={item.label}
                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl py-10 hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-5xl md:text-7xl font-bold text-[#FF5630]">
                                {item.value}
                            </div>

                            <div className="mt-4 tracking-[5px] text-red-500 font-medium">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="mt-11 justify-center flex">
                <button
                    onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
                >
                    Claim Subsidy Now
                </button>
            </div>

        </section>
    );
}