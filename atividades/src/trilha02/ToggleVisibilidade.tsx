import { useState } from "react";

type toggleProps = {
    textInicial:string;
}

const ToggleVisibilidade = ({textInicial}:toggleProps) => {

    const [visivel, setVisivel] = useState<boolean>(false);

    const onClickVisivel = () => {
        setVisivel(!visivel);
    }

    return (
        <div>
            {visivel && <p>{textInicial}</p>}
            <button onClick={onClickVisivel}>{visivel ? 'Ocultar' : 'exibir'}</button>
        </div>
        
    );
}

export default ToggleVisibilidade;