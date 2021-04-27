
import React from 'react'
import {  SerContainer, SerContent, SerH1, SerP } from "./ServiceElements"



function Services() {


    return (
        <div>
        
            {/* <HeroSection/> */}
            {/* <h1 className='home'>Home</h1> */}
         
        
            <SerContainer>
                <SerContent>
                    <SerH1>Storm</SerH1>
                        <SerP> 
                        Storm, violent atmospheric disturbance, characterized by low barometric pressure, cloud cover, precipitation, strong winds, and possibly lightning and thunder. Storm is a generic term, popularly used to describe a large variety of atmospheric disturbances, ranging from ordinary rain showers...
                        </SerP>
                </SerContent>
        </SerContainer>
     </div>
    )
}

export default Services
