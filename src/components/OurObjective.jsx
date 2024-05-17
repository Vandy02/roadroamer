'use client'
import { homeCards } from '@/constants/appdata'
import React from 'react'
import TitleText from './TitleText'

const OurObjective = () => {
  return (
    <div className='bg-teal-50 pt-12 mb-10'>
        <TitleText title={ 
            <span className='text-gray-900 font-extrabold'> Our Objective</span>
        }/>
        <div className='mx-10 md:mx-[10%] mt-8'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10'> 
                {homeCards?.map((cars,index) => (
                    <div key={index} className='rounded shadow-lg bg-0 white'>
                      <div className='w-full relative'>
                        <img src={cars.img} alt="" className='w-full object-cover'/>
                        </div> 
                        <div className='font-bold text-xl mb-2 text-third-color p-2'>
                         {cars.title}    
                        </div>  
                        <p className='text-gray-500 text-base p-2'>{cars.description}</p> 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurObjective