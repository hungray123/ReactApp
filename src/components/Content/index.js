import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg ,HeroBtnWrapper} from './HeroElements'
import Video from '../Video/env.mp4'
import { Button } from './Button'



function HeroSection() {
    const [hover, setHover] = useState(false)

    const  onHover=()=> setHover(!hover)



    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Vitual Banking Made Easy</HeroH1>

                <HeroP> Sign up for a new account today and recevice $250 in creadit
                     towards your next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button  to ='/' onClick={onHover} onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
