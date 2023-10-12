import { CartWidget } from "../CartWidget/cartWidget";

function Nav() {
    return ( 
        <nav className="h-[80px] flex justify-around  z-10">
            <div className="flex items-center">
                <img className="h-[32px] cursor-pointer z-10" src="https://drive.google.com/uc?export=download&id=15B3Hk25iymFgvCKmUIS9zil7deNOYUz0" alt="Menu Icon" />
            </div>
            <div className="flex justify-center items-center text-primary font-poppins 
            text-sm font-bold border-[20px] border-slate-100 z-10 shadow-blue">
                <a className="mx-5 z-10" href="">Inicio</a>
                <a className="mx-5 z-10" href="">Nosotros</a>
                <a className="z-10" href=""><img className="h-[50px]" src="https://drive.google.com/uc?export=download&id=1XOf4I2Eb4Vp_Q2xjXTdFM5SRMp9H4kxB" alt="Logo" /></a>
                <a className="mx-5 z-10" href="">Cursos</a>
                <a className="mx-5 z-10" href="">Contacto</a>
            </div>
            <CartWidget/>
        </nav>
     );
}

export default Nav;