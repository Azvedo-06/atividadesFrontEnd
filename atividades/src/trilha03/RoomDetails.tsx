import { useNavigate } from "react-router";

const RoomDetails = () => {

    const navegator = useNavigate();
    const reserveSuccess = () => {
        navegator('/BookingSuccess');
    }

    return (
        <div>
            <h1>Detalhes do Quarto</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, tempore a, laborum dicta eum expedita perspiciatis possimus ipsam, saepe quis nulla dignissimos repudiandae?</p><br />
            <button onClick={reserveSuccess}>Reservar</button>
        </div>
    );
}

export default RoomDetails;