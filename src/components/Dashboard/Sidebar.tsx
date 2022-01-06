import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUtensils, faCogs, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo.png'

export function Sidebar(){

    return(
        <aside className="flex flex-col bg-red-800 gap-4 flex-auto text-white h-screen fixed w-1/6">
            <div className="self-center w-full flex justify-center p-8" >
                <img className='w-52' src={logo} alt="logo"/>
            </div>
            <section className='h-screen flex flex-col justify-between'>
                <div className='px-8 flex justify-center mt-3'>
                    <ul className="flex flex-col gap-10 text-lg">
                        <li>
                            <a href="#nada" >
                                <FontAwesomeIcon  className='mr-3' icon={faUser}/>
                                Mi perfil
                            </a>
                        </li>
                        <li>
                            <a href="#nada" >
                                <FontAwesomeIcon className='mr-3' icon={faUtensils}/>
                                Mis Recetas
                            </a>
                        </li>
                        <li>
                            <a href="#nada" >
                                <FontAwesomeIcon className='mr-3' icon={faCommentDots}/>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <hr className='' />
                    <div className='my-3'>
                        <a className='px-8' href="#nada" >
                            <FontAwesomeIcon className='mr-3' icon={faCogs}/>
                            Configuraciones
                        </a>
                    </div>
                </div>
            </section>
            {/* <div className='justify-self-end text-white'>
                <p className='mb-2 font-semibold'>Usuario: USUARIO</p>
                <button className="bg-white text-red-800 font-bold 
                                    rounded px-3 py-1 w-full">
                    Cerrar Sesión
                </button>
            </div> */}
        </aside>
    )
}