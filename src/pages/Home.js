import HeroSection from "../components/HeroSection"
import Cards from "../components/Cards"
import React, { useEffect } from 'react'
import FeedbackForm from "../components/FeedbackForm";





export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
    
    <>
    <HeroSection/>
    <Cards />
    <FeedbackForm />

    </>
    )
}