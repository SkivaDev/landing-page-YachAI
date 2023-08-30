import React from 'react'
import laptop_img from '../assets/images/yachai_banner.png'

function HeroSection() {
  return (
    <div className='w-full ml-[32px] mt-[164px] flex bg-red-100 gap-[81px]'>
      <div className='flex-1'>
        <h1 className='text-[46px] text-smooth_black'>Ya no abandones los estudios por falta de tutor</h1>
        <h3 className='text-[20px]'>Servicio de tutoria académica personalizada.</h3>
        <p className='text-[18px] text-smooth_black'>Convierte con facilidad cualquier video, documento o URL en un curso interactivo con asistente inteligente. Perfecto para empresas, profesionales y estudiantes.</p>
        <span className='text-[18px] text-smooth_purple'>Potenciado por Inteligencia Artificial</span>
        <div>
          <button>Crea un tutor gratis</button>
          <button>Saber más <span>→</span></button>
        </div>
      </div>
      <div className='w-[570px] h-[447px]'>
        <img src={laptop_img} alt="laptop_img" className='w-full h-full'/>
      </div>
    </div>
  )
}

export default HeroSection