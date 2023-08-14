import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Css3, Html5, Javascript, Mongodb, Mysql, NextJs, NodeJs, ReactJs, SkillsImg, Typescript } from '../assets/images'
import { AiOutlineArrowRight } from 'react-icons/ai';

function Skills() {
    return (
        <div className='md:flex gap-10 justify-around'>
            <div className='md:max-w-[40%]'>
            <h2 className='text-2xl font-boldtext-2xl font-bold mb-5'>Masterful Skills</h2>
            <img src={SkillsImg} className='mx-auto w-64 mb-10'/>
            <p className='mb-10'>In the ever-evolving landscape of web development, my skills stand as the pillars of my craft. With an arsenal honed through dedication and a passion for perfection, I bring a diverse array of capabilities to the table.</p>
            <AiOutlineArrowRight className='hidden md:block md:mt-0 text-9xl mx-auto bg-blue-600 rounded-full text-white mt-10'/>
            </div>
            <div className='max-w-[50%] md:max-w-[30%] mt-10 mx-auto md:mt-0'>
                <div>
                    <Carousel>
                        <div>
                            <img src={Html5} />
                            <p className="legend">HTML5</p>
                        </div>
                        <div>
                            <img src={Css3} />
                            <p className="legend">CSS3</p>
                        </div>
                        <div>
                            <img src={Javascript} />
                            <p className="legend">Javascript</p>
                        </div>
                        <div>
                            <img src={ReactJs} />
                            <p className="legend">React</p>
                        </div>
                        <div>
                            <img src={NextJs} />
                            <p className="legend">Next</p>
                        </div>
                        <div>
                            <img src={Typescript} />
                            <p className="legend">Typescript</p>
                        </div>
                        <div>
                            <img src={NodeJs} />
                            <p className="legend">Node</p>
                        </div>
                        <div>
                            <img src={Mongodb} />
                            <p className="legend">Mongodb</p>
                        </div>
                        <div>
                            <img src={Mysql} />
                            <p className="legend">Mysql</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Skills