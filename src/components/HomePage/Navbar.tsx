import logo from '../../img/logo.png'

export function Navbar(){
    const hover = 'hover:text-white'
    return(
        <nav className="bg-red-800 py-3.5 px-8 text-white font-semibold 
                        shadow-md shadow-orange-800/50 rounded-br-sm rounded-bl-sm">
            <div className='flex justify-between'>
                <a className="flex" href="#Home">
                    <img className='w-8 mr-3' src={logo} alt='logo'></img>
                    <h1 className="text-xl text-center">Nombre de la App</h1>
                </a>
                <div className="flex gap-9 text-red-200">
                    <a className={hover} href="#Home">Home</a>
                    <a className={hover} href="#FAQ">Preguntas Frecuentes</a>
                    <a className={hover} href="#Entrar">Entrar</a>
                </div>
            </div>
        </nav>
    )
}