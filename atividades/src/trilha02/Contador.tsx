import { useState } from "react";

type ContadorProps = {
    valor:number;
}

const Contador = ({valor}:ContadorProps) => {

    const [valorContador, setValorContador] = useState(valor);

    const onClickContador = () => {
        setValorContador(valorContador + 1)
    }

    const onClickContadorMenos = () => {
        setValorContador(valorContador - 1)
    }

    return (
        <div>
            <p>{valorContador}</p>
            <button onClick={onClickContador}>+1</button>
            <button onClick={onClickContadorMenos}>-1</button>
        </div>
    );
}

export default Contador;