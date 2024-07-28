import { Link } from "react-router-dom"
import {FeaturedProducts} from '../FeaturedProducts/FeaturedProducts'

const category = [
    {
        name: 'Silla',
        image: '/shop/silla/corsair/corsair1.webp',
        link: '/category/silla'
    },
    {
        name: 'Auricular',
        image: '/shop/auriculares/hyperx/hyperx1.webp',
        link: '/category/auricular'
    },
    {
        name: 'Mouse',
        image: '/shop/mouse/logitech/logitech1.webp',
        link: '/category/mouse'
    },
    {
        name: 'Teclado',
        image: '/shop/teclado/redragon/redragon1.webp',
        link: '/category/teclado'
    },
    {
        name: 'Portatil',
        image: '/shop/portatil/asus/asus1.webp',
        link: '/category/portatil'
    },
    {
        name: 'Camara',
        image: '/shop/camara/microsoft/microsoft1.webp',
        link: '/category/camara'
    },
    {
        name: 'Tablet',
        image: '/shop/tablet/samsunga7/samsunga71.webp',
        link: '/category/tablet'
    },
    {
        name: 'Monitor',
        image: '/shop/monitor/noblex/noblex1.webp',
        link: '/category/monitor'
    }
]


export const Hero = () => {
  return (
    <>
    <header className="w-full h-content bg-[#EEEEEE]">
        <div className="h-[420px] w-full">
            <div className="w-full h-[360px] relative"> 
                        <img className="h-full w-full object-cover" src="/hero/perifericos.jpg" alt="Pheriperals" />
                       <div className="absolute top-0 left-0 w-full h-full flex justify-center pl-4 flex-col">
                       <p className='text-lg text-white font-bold'>Tu portal hacia el mundo digital</p>
                       <h1 className='text-7xl text-white font-bold'>Magic Market</h1>
                       </div>
            
                    
            </div>
        </div>
        <div className="w-full h-content  px-4">
            <h2 className="font-poppins font-medium text-darkpure text-2xl">Productos destacados</h2>
            <div className="w-full h-content px-2 md:px-0 md:h-[350px]">
                <FeaturedProducts/>
            </div>
            <div className='h-full w-full pb-8 pt-8 md:pt-16'>
                <h2 className='text-lg md:text-2xl'>Categorías</h2>
                <div className='grid grid-cols-4 grid-rows-2 md:flex sm:justify-between flex-wrap items-start gap-y-4 md:gap-y-0 pt-8'>
                {category.map(({name, image, link},index)=>(
                    <div key={index} className='flex flex-col justify-center items-center gap-y-2'>
                        <div className='h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] bg-white shadow-[0px_3px_7px_rgba(0,0,0,.25)] overflow-hidden rounded-full hover:scale-110 duration-200'>
                            <Link className='h-full w-full flex justify-center items-center' to={link}>
                                    <img className='h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] object-contain' src={image} alt={name} />
                            </Link>
                        </div>
                        <p className='font-semibold text-darklight text-sm'>{name}</p>
                    </div>
                ))}
                </div>
               
            </div>
        </div>
    </header>
    </>
  )
}
