import hero from '../../img/hero.png'

export function Hero(){
    return(
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex-col text-right'>
                <h1 className='text-5xl '>Texto de prueba</h1>
                <p className='text-lg '>Texto de prueba</p>
            </div>
            <img className='w-full' src={hero} alt="hero" />
        </div>
    )
}