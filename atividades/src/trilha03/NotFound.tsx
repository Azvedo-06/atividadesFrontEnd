import { useNavigate } from "react-router";

const NotFound = () => {
    const navigator = useNavigate();

    const goToHome = () => {
        navigator("/home");
    }

    return (
        <div>
            <h1>Pagina não encontrada</h1>
            <button onClick={goToHome}>Voltar para a Home</button>
        </div>
    );
}

export default NotFound;