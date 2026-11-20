"use client";

import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutDetailed from '../components/about/AboutDetailed'
import AboutCredentials from '../components/about/AboutCredentials'
import HomeLocationMap from '../components/home/HomeLocationMap'

const About = () => {
    return (
        <>
            <AboutHero />
            <AboutDetailed />
            <AboutCredentials />
            <HomeLocationMap />
        </>
    )
}

export default About
