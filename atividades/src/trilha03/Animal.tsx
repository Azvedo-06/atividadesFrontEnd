import { useParams } from "react-router";

const Animal = () => {
    const { name } = useParams<{name: string}>();
    
    return (
        <h1>Animal: {name}</h1>
    );
}

export default Animal;