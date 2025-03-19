import { useNavigate } from "react-router";

const About = () => {
    const navigator = useNavigate();

    const goToHome = () => {
        navigator("/home");
    }

    return (
        <div>
            <h1>Sobre Nós</h1>
            <button onClick={goToHome}>Ir para a Home</button>
        </div>
    );
}

export default About;