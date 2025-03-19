import { useNavigate } from "react-router";

const Home = () => {
    const navigator = useNavigate();

    const goToAbout = () => {
        navigator("/about");
    }

    return (
        <div>
            <h1>Pagina HOME</h1>
            <button onClick={goToAbout}>Ir para Sobre</button>
        </div>
    );
}

export default Home;