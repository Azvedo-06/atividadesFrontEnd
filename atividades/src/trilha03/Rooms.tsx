import { useParams } from "react-router";

const Rooms = () => {

    const { room } = useParams<{room: string}>();

    return (
        <div>
            <h1>Numero do quarto</h1>
            <h2>Room: {room}</h2>
        </div>
       
    );
}

export default Rooms;