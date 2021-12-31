import { InputForm } from "../common/InputForm";

export function MyProfile(){
    return(
        <>
            <h1 className="text-2xl">Mi Perfil</h1>
            <form className="mt-5">
                <div className="grid grid-cols-12 gap-6">
                    <InputForm 
                        placeholder="Nombre"
                        columns={6}
                        required={true}
                        type="text"
                    />
                    <InputForm 
                        placeholder="Apellidos"
                        columns={6}
                        required={true}
                        type="text"
                    />
                    <InputForm 
                        placeholder="Apellidos"
                        columns={5}
                        required={true}
                        type="text"
                    />
                </div>
            </form>
        </>
    )
}