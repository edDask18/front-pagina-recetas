export function InputForm(props:{
    placeholder: string,
    columns: number,
    required: boolean,
    type: string
}){
    const inputStyles = "border rounded border-gray-300 h-10 p-3";
    const requiredText= props.required ? '*' : ' (opcional)';

    return(
        <input 
            className={`col-span-${props.columns} ${inputStyles}`} 
            type={props.type}
            placeholder={ props.placeholder + requiredText }
        ></input>
    )
}