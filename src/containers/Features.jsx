import React from 'react'
import { features } from '../data/features.json'
import Card from '../components/Card'

function Features() {
  return (
    <div className='w-full px-[90px] py-[58px] bg-white2'>
      <h3 className='text-[18px] text-center mb-[64px]'>Usa Inteligencia artificial para mejorar tu aprendizaje.</h3>
      <div className='flex justify-between items-start mb-[64px]'>
        {features.map((feature, i) => (
          <Card key={i} {...feature}/>
        ))}
      </div>
      
    </div>
  )
}

export default Features