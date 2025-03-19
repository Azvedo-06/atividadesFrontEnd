import { Link } from "react-router";

const NavBarHotel = () => {
    return (
        <nav style={{display: "flex", gap: "1rem", padding: "10px", background: "#eee"}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/rooms/1'}>Rooms</Link>
            <Link to={'/roomDetails'}>Room Details</Link>  
        </nav>
    );
}

export default NavBarHotel;