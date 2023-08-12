import React from 'react'
import '../styles/Content.css'
import Img from '../../public/content-img.avif'

export default function Content() {
    return (
        <div className='contentcontainer'>
            <div className='info'>
                
                <p className='text1'>The video host with the most </p>
                <p className='text2'>see measurable result from your videos (and podcast too)
                    with our complete hosting plantform for our marketers </p>
                    <button className='button1'>Try for Free</button>
                    <button className='button2'>Explore our plan</button>
            </div>
            <div className='image'>
                <img src={Img} width={'100%'}/>
            </div>
        </div>
    )
}