import React from 'react'
import { Truck, HardHat, MountainSnow, ShieldCheck, MonitorCog, Building2 } from 'lucide-react';

const ServiciosComponent = () => {
    const servicios = [{
        id:1,
        title: 'Construcción Minera',
        logo: <HardHat />,
        descripcion: 'Infraestructura especializada para la industria Minera'

    },{
         id:2,
        title: 'Logística y Transporte',
        logo: <Truck />,
        descripcion: 'Soluciones de transporte en terrenos difíciles.'
    },
    {
        id:3,
        title: 'Operaciones en Montaña',
        logo: <MountainSnow />,
        descripcion: 'Especialistas en construcción en zonas montañosas.'
    },
    {
        id:4,
        title: 'Seguridad y Protección',
        logo: <ShieldCheck />,
        descripcion: 'Utilizamos las más altas normas de seguridad.'
    },{
        id:5,
        title: 'Mantenimiento de maquinas industriales',
        logo: <MonitorCog />,
        descripcion: 'Aseguramos la máxima eficiencia y productividad de tus máquinas.'
    },
{
        id:6,
        title: 'Mantenimiento de edificios',
        logo: <Building2 />,
        descripcion: 'Mantenimiento integral para garantizar la continuidad operativa.'
}];
  return (
    <div className='flex bg-blue-950 p-6'>
        {servicios.map(servicio =>(
            <div key={servicio.id} className='bg-stone-50 p-4 rounded-lg mb-4'>
                <div className=''>{servicio.logo}</div>
                <h3 className='text-xl font-bold'>{servicio.title}</h3>
                <p className='text-gray-700'>{servicio.descripcion}</p>
                <button className='bg-blue-950 text-white p-2 rounded mt-2'>Solicitar más información</button>

            </div>
        ))}

    </div>
  )
}

export default ServiciosComponent