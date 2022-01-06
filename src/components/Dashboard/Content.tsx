import { MyRecipes } from "./MyRecipes"
// import { MyProfile } from "./MyProfile"

export function Content(){
    return(
        <section className="bg-gray-200 p-6 w-5/6 absolute right-0">
            <div className="flex justify-between items-center mb-7">
                <div>
                    <p className="text-lg">Inicio</p>
                    <p className="text-sm">
                        Un gusto verte nuevamente por aqui "Usuario".
                    </p>
                </div>
                <div>
                    <button className="bg-red-800 text-white 
                                         font-semibold rounded px-3 py-1">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            <MyRecipes />
            {/* <MyProfile /> */}
        </section>
    )
}