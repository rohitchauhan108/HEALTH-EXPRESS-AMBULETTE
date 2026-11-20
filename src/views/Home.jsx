"use client";


import HeroHome from '../components/home/HeroHome'
import ServiceMarquee from '../components/ui/ServiceMarquee'
import HomeServices from '../components/home/HomeServices'
import HomeTransportation from '../components/home/HomeTransportation'
import HomeSchedule from '../components/home/HomeSchedule'
import HomeACTPrivate from '../components/home/HomeACTPrivate'
import HomeAsq from '../components/home/HomeAsq'
import HomeLocationMap from '../components/home/HomeLocationMap'
import TrustStrip from '../components/home/TrustStrip'
import FleetGallery from '../components/home/FleetGallery'
import HowItWorks from '../components/home/HowItWorks'

const Home = () => {



    return (
        <>
            <HeroHome />
            <ServiceMarquee />
            <TrustStrip />
            <HomeServices />
            <FleetGallery />
            <HomeTransportation />
            <HowItWorks />
            <HomeSchedule />
            <HomeACTPrivate />
            <HomeAsq />
            <HomeLocationMap />
        </>
    )
}

export default Home
