import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { RecipeCard } from "./RecipeCard"
import recipes from './recetas.json'

export function MyRecipes(){
    return(
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl">Mis Recetas</h1>
                <section>
                    <input className="border rounded p-2 border-slate-300 shadow w-80"
                        placeholder="Buscar Receta">
                    </input>
                    <button className="bg-red-800 p-2 text-white rounded ml-1
                                        px-4 shadow-sm shadow-red-700/50" >
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <button className="bg-red-800 p-2 text-white rounded ml-1 
                                        px-4 shadow-sm shadow-red-700/50" >
                        <FontAwesomeIcon icon={faFilter}/>
                    </button>
                </section>
            </div>
            <div className=" flex gap-5 mt-5 flex-wrap justify-between overscroll-contain">
                {recipes.map((recipe)=>(
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.name}
                        image={recipe.image}
                        difficulty={recipe.difficulty}
                    />
                ))}
            </div>
        </>
    )
}