import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div id='home' className="hero" >
            <div className='blur hero-blur'></div>
            <div className='left-h'>

                <Header />
                
                {/* The best add */}
                <div className='the-best-add'>
                    <motion.div
                    initial={{ left: mobile? '178px': '238px' }}
                    whileInView={{ left: '8px' }}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>the best fitness club in the city</span>
                </div>

                {/* Hero Heading */}

                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                        Here, we will help you shape and build your Ideal
                        body and live up you life the most comfortable way
                        </span>
                    </div>
                </div>

                {/* Figures */}

                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter start={100} end={140} delay={4} preFix='+' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter start={800} end={970} delay={4} preFix='+' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter start={0} end={50} delay={4} preFix='+' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}

                <div className='hero-buttons'>
                    <buttons className='btn'>Get Started</buttons>
                    <buttons className='btn'>Learn More</buttons>
                </div>

            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>

                <motion.div
                initial={{ right: '-1rem' }}
                whileInView={{ right: '4rem' }} 
                transition={transition}
                className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}

                <img className='hero-image' src={hero_image} alt='' />
                <motion.img 
                initial={{ right: '11rem' }}
                whileInView={{ right: '20rem' }} 
                transition={transition}
                className='hero-image-back' src={hero_image_back} alt='' />

                {/* Calories */}

                <motion.div 
                initial={{ right: '37rem' }}
                whileInView={{ right: '28rem' }} 
                transition={transition}
                className='calories'>
                    <img src={Calories} alt='' />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
            
        </div>
)
}

export default Hero
