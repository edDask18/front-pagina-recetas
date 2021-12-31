import { RecipeCard } from "./RecipeCard"
import recipes from './recetas.json'

export function MyRecipes(){
    return(
        <>
            <h1 className="text-2xl">Mis Recetas</h1>
            <div className=" flex gap-5 mt-5 flex-wrap">
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