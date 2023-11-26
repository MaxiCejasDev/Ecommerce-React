export const Footer = () => {
  return (
    <div className="h-[500px] bg-darklight text-white overflow-hidden font-poppins">
        <div className="h-3/4 grid grid-cols-3 px-4 py-4">
            <div>
                <h3 className="text-2xl font-bold">Products</h3>
                <div>
                    <ul>
                        <li>Silla</li>
                        <li>Auricular</li>
                        <li>Mouse</li>
                        <li>Teclado</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Tablet</li>
                        <li>Portátil</li>
                        <li>Camara</li>
                        <li>Monitor</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Secciones</h3>
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Todas las categorias</li>
                    <li>Productos en bolsa</li>
                </ul>
            </div>
            <div>
                <img src="https://drive.google.com/uc?export=download&id=13CH_TGZzP7Fw_MLvOWzMgSRjrO-6QndO" alt="" />
            </div>
        </div>
        <div>
            <p>Pagina creado por Maxi Cejas    |   maxicejas12354@gmail.com</p>
        </div>
    </div>
  )
}
