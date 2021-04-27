import React, { useState } from 'react'
import { DataSlide } from '../../SlideShow/DataSlide'
import ImageSlider from '../../SlideShow/ImageSlider'
import { Button } from './Button'

import { ArrowForward, ArrowRight, HomeBtnWrapper, HomeContainer, HomeContent, HomeH1, HomeP } from './HomeElements'


function Home() {
    const [hover, setHover] = useState(false)
    const  onHover=()=> setHover(!hover)

    return (
        
        <div>
            <ImageSlider slides={DataSlide} />
            {/* <HeroSection/> */}
            {/* <h1 className='home'>Home</h1> */}
         
        
            <HomeContainer>
                <HomeContent>
                    <HomeH1>DolPhin</HomeH1>
                        <HomeP> Dolphins are small-toothed cetaceans easily recognizable by their curved mouths, which give them a permanent “smile.” There are 36 dolphin species, found in every ocean. Most dolphins are marine and live in the ocean or brackish waters along coastlines. There are a few species, however, like the South Asian river dolphin and the Amazon river dolphin, or boto, that live in freshwater streams and rivers.
                        </HomeP>
                    <HomeBtnWrapper>
                        <Button  to ='/contact-us' onClick={onHover} onMouseEnter={onHover} onMouseLeave={onHover}>
                           Click Now {hover ? <ArrowForward/>:<ArrowRight/>}
                        </Button>
                    </HomeBtnWrapper>
                </HomeContent>
        </HomeContainer>
     </div>
    )
}

export default Home
