import hero from '../../img/hero.png'

export function Hero(){
    return(
        <div className='grid grid-cols-2'>
            <div className='flex-col text-right mr-15'>
                <h1 className='text-5xl '>Texto de prueba</h1>
                <p className='text-lg '>Texto de prueba</p>
            </div>
            <img className='ml-20 mr-20' src={hero} alt="hero" />
        </div>
    )
}