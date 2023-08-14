import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Project1 } from '../assets/images'
import { Project2 } from '../assets/images'
import { Project3 } from '../assets/images'
import { Project4 } from '../assets/images'
import { Project5 } from '../assets/images'
import { Project6 } from '../assets/images'
import { Project7 } from '../assets/images'
import { Project8 } from '../assets/images'
import { Project9 } from '../assets/images'

function Projects() {
  return (
    <div>
    <h2 className='text-2xl font-bold mb-5'>Some of my projects</h2>
    <Carousel>
            <div>
                <img src={Project1} />
                <p className="legend">Project 1 - Walmart Clone</p>
            </div>
            <div>
                <img src={Project2} />
                <p className="legend">Project 2 - Youtube Clone</p>
            </div>
            <div>
                <img src={Project3} />
                <p className="legend">Project 3 - LoveNet.io Website</p>
            </div>
            <div>
                <img src={Project4} />
                <p className="legend">Project 4 - FutureLearn Clone</p>
            </div>
            <div>
                <img src={Project5} />
                <p className="legend">Project 5 - Chat.Io.me Website</p>
            </div>
            <div>
                <img src={Project6} />
                <p className="legend">Project 6 - Deivid's Delicious Website</p>
            </div>
            <div>
                <img src={Project7} />
                <p className="legend">Project 7 - Traveling Mind Website</p>
            </div>
            <div>
                <img src={Project8} />
                <p className="legend">Project 8 - HACK.ME Website</p>
            </div>
            <div>
                <img src={Project9} />
                <p className="legend">Project 9 - Calculator App</p>
            </div>
    </Carousel>
</div>
  )
}

export default Projects