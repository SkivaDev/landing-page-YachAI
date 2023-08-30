import React from 'react'
import laptop_img from '../assets/images/yachai_banner.png'

function HeroSection() {
  return (
    <div className='w-full pl-[32px] mt-[132px] mb-[145px] flex bg-red-100 gap-[81px]'>
      <div className='flex-1 '>
        <h1 className='text-[46px] mt-[27px] text-smooth_black leading-title_hero'>Ya no abandones <br /> los estudios por <br />falta de tutor</h1>
        <h3 className='text-[20px] mt-[27px]'>Servicio de tutoria académica personalizada.</h3>
        <p className='text-[18px] text-smooth_black mt-[21px] max-w-[509px]'>Convierte con facilidad cualquier video, documento o URL en un curso interactivo con asistente inteligente. Perfecto para empresas, profesionales y estudiantes.</p>
        <span className='block text-[18px] text-smooth_purple mt-[11px]'>Potenciado por Inteligencia Artificial</span>
        <div className='flex items-center gap-[40px] mt-[31px]'>
          <button className='py-[9px] px-[11px] bg-light_purple rounded-xl text-white'>Crea un tutor gratis</button>
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