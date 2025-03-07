import { useState } from "react";

type saudacaoProps = {
    nameInicial:string;
}

const Saudacao = ({nameInicial}:saudacaoProps) => {
    
    const [nome, setNome] = useState<string>(nameInicial);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value)
    }

    return (
        <div>
            <h2>Ola {nome}</h2>
            <input type="text" onChange={onChange} placeholder="digite seu nome"/>
        </div>
    );
}

export default Saudacao;