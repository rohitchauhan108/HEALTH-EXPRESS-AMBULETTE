"use client";

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from 'next/navigation';

const BrooklynServices = () => {
    const router = useRouter()
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="w-full bg-white text-gray-800">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-16">
                {/* Text */}
                <div data-aos="fade-up" className="md:w-1/2 space-y-4">
                    <h2
                        className="font-bold text-blue-800"
                        style={{
                            fontSize: '5vh', // mobile
                        }}
                    >
                        <span className="hidden md:inline" style={{ fontSize: '2.8vw' }}>
                            NEMT Ambulette Services in Brooklyn
                        </span>
                        <span className="md:hidden">
                            NEMT Ambulette Services in Brooklyn
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Health Express Ambulette Inc.  service in Brooklyn provides transportation for any Non Emergency medical transportation requirements. You can schedule for any time of day in advance. All sizes of wheelchair-accessible cars are included in our fleet.
                    </p>
                    <p className="font-semibold mt-4">
                        Contact us now for ambulette service in all of Brooklyn, NY
                    </p>

                    <button
                        onClick={() => router.push("/contact")}
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-[#0E8A94] to-blue-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                        FREE QUOTE
                    </button>
                </div>

                {/* Image */}
                <div data-aos="fade-up" className="md:w-1/2">
                    <img
                        src="/images/Home/ambulanceService.jpeg"
                        alt="Ambulette Service Brooklyn"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-16 py-16 bg-gray-100">
                {/* Image */}
                <div data-aos="fade-up" className="md:w-1/2">
                    <img
                        src="/images/Home/TwoMenAssistStairs.jpg"
                        alt="Two Men Assist Brooklyn"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>

                {/* Text */}
                <div data-aos="fade-up" className="md:w-1/2 space-y-4">
                    <h2
                        className="font-bold text-blue-800"
                        style={{
                            fontSize: '5vh',
                        }}
                    >
                        <span className="hidden md:inline" style={{ fontSize: '2.8vw' }}>
                            Two Men Assist With Stairs in Brooklyn
                        </span>
                        <span className="md:hidden">
                            Two Men Assist With Stairs in Brooklyn
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        If you use a wheelchair and need assistance going up or downstairs in Brooklyn, call Ambulette immediately!
                    </p>
                    <p className="text-gray-600 text-lg">
                        With a weight restriction of 650 lbs, two or four staff members may safely transport you anywhere you need to go with the assistance of our experienced crew.
                    </p>
                    <button
                        onClick={() => router.push("/contact")}
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-[#0E8A94] to-blue-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                        FREE QUOTE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BrooklynServices
