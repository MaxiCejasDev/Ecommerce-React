import Nav from '../NavBar/nav'
import Hero from '../Hero/hero'

function Header() {
    return ( 
        <header className="h-screen bg-white relative z-[1]">
            <Nav/>
            <Hero/>
            <div className="h-screen w-full absolute top-0 bg-gradient-to-tl from-transparent bg-blue-50"></div>
        </header>
    );
}

export default Header;