import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="h-content lg:h-[400px] bg-darklight text-white overflow-hidden font-poppins">
        <div className="h-[85%] grid grid-col-1 lg:grid-cols-3 px-10 sm:px-36">
            <div className="flex flex-col py-20">
                <h3 className="text-2xl font-bold">Products</h3>
                <div className="flex">
                <div className="text-base w-2/4">
                    <ul>
                        <li className="py-2"><Link to={'/category/silla'}>Silla</Link></li>
                        <li className="py-2"><Link to={'/category/auricular'}>Auricular</Link></li>
                        <li className="py-2"><Link to={'/category/mouse'}>Mouse</Link></li>
                        <li className="py-2"><Link to={'/category/teclado'}>Teclado</Link></li>
                    </ul>
                </div>
                <div className="text-base w-2/4">
                    <ul>
                        <li className="py-2"><Link to={'/category/tablet'}>Tablet</Link></li>
                        <li className="py-2"><Link to={'/category/portatil'}>Portátil</Link></li>
                        <li className="py-2"><Link to={'/category/camara'}>Camara</Link></li>
                        <li className="py-2"><Link to={'/category/monitor'}>Monitor</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="py-20">
                <h3 className="text-2xl font-bold"><Link></Link>Secciones</h3>
                <ul className="text-base">
                    <li className="py-2"><Link to={'/'}>Inicio</Link></li>
                    <li className="py-2"><Link to={'/about'}>Nosotros</Link></li>
                    <li className="py-2"><Link to={'/allcategory'}>Todas las categorias</Link></li>
                    <li className="py-2"><Link to={'/bag'}>Productos en bolsa</Link></li>
                </ul>
            </div>
           
            <div className="overflow-hidden flex justify-center">
                <Link to={'/'}><img className="h-[200px] sm:h-[300px] w-[200px] sm:w-[300px]" src="https://drive.google.com/uc?export=download&id=13CH_TGZzP7Fw_MLvOWzMgSRjrO-6QndO" alt="" /></Link>
            </div>
        </div>
        <hr className="w-[90%] h-[2px] mx-auto"/>
        <div className="text-center py-4 text-sm">
            <p>Pagina creado por Maxi Cejas    |   maxicejas12354@gmail.com</p>
        </div>
    </div>
  )
}
