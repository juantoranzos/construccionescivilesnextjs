import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto bg-blue-950'>
        <div className='mx-[60px]'>
            <h1 className='text-center text-3xl p-[20px]'>Somos una empresa lider en construcción para la mineria</h1>
            <h2 className='text-center text-2xl '>Contamos con una largra trayectoria con mas de 300 proyectos exitosos en el Noroeste Argentino y la zona Precordillerana</h2>
            <span><p className='text-center text-2xl p-[10px]'> 📍 Santa Maria, Catamarca</p></span>
            <div className='text-center'>
              <button type='submit' className='bg-stone-50 p-[7px] rounded-[9px] text-blue-950'>Solicitar un presupuesto</button>
            </div>

        </div>

    </section>
  )
}

export default Hero