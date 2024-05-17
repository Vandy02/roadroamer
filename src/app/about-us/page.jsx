'use client'
import Banners from '@/components/Banners'
import Feedback from '@/components/Feedback'
import SubFooter from '@/components/SubFooter'
import TitleText from '@/components/TitleText'
import React from 'react'

const AboutUs = () => {
  return (
    <div><Banners img="/about-banner.jpg" title="About Us" text="We are an all-new chauffeured car service driving Victoria" />
    <TitleText title={
                <span className=''>
                    About Us
                </span>
            } textStyles='mt-16'/>
            <Feedback/>
            <SubFooter/>
            </div>
  )
}

export default AboutUs