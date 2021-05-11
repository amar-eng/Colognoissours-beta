import React from 'react'
import Button from '../Button/Button'
import './Hero.scss'
import Pic from '../../assets/pics/royaloud.jpg'
const Hero = () => {
    return (
        <div className = 'hero'>
            <div className ="hero__container">
                <p className ="hero__header">Discover your perfect scent.</p>
                <p className="hero__text">A one stop shop to finding the best colognes for less.</p>
                <Button text = "Explore Scents" color ="black" />
                <Button text = "Learn More" color ="black"/>
            </div>
            
        </div>
    )
}

export default Hero
