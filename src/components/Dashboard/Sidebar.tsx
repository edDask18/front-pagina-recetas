import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUtensils, faCogs, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo.png'

export function Sidebar(){

    return(
        <div className="flex flex-col bg-red-800 p-8 gap-4 flex-auto text-red-800">
            <div className="w-56 self-center" >
                <img src={logo} alt="logo"/>
            </div>
            <div className=' bg-white rounded-md px-7 py-10 mt-4 border-4 border-dashed border-red-800'>
                <ul className="flex flex-col gap-7 text-lg font-semibold">
                    <li>
                        <FontAwesomeIcon icon={faUser}/>
                        <a className='ml-3' href="#nada" >Mi perfil</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUtensils}/>
                        <a className='ml-3' href="#nada" >Mis Recetas</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCogs}/>
                        <a className='ml-3' href="#nada" >Opciones</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCommentDots}/>
                        <a className='ml-3' href="#nada" >Contacto</a>
                    </li>
                </ul>
            </div>
            {/* <div className='justify-self-end text-white'>
                <p className='mb-2 font-semibold'>Usuario: USUARIO</p>
                <button className="bg-white text-red-800 font-bold 
                                    rounded px-3 py-1 w-full">
                    Cerrar Sesión
                </button>
            </div> */}
        </div>
    )
}