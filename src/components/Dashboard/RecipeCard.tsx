import './RecipeCard.css'

export function RecipeCard(props: {
    title: string, 
    image: string,
    difficulty:string
}){
    return(
        <a href='dsad' className="bg-gray-100 p-5 border 
                                  border-gray-300 rounded-lg text-center shadow">
            <img className='imageCard rounded-md shadow-sm' 
                 src={props.image} alt="Imagen Receta">
            </img>
            <h2 className='mt-2'>{props.title}</h2>
            <h3 className="text-xs">Dificultad: {props.difficulty}</h3>
        </a>
    )
}