import { useNavigate } from "react-router";

const BookingSuccess = () => {

    const navigator = useNavigate();
    const goToHome = () => {
        navigator("/");
    }

    return (
        <div>
            <h1>Reserva feita</h1>
            <button onClick={goToHome}>Voltar para a Home</button>
        </div>
        
    );
}

export default BookingSuccess;