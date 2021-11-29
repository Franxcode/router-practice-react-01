import { useEffect, useState } from "react";
import { useParams } from "react-router"

const Civilizations = () => {


    // console.log(useParams);
    const {id} = useParams()
    console.log(id);

    const [civilization, setCivilization] = useState([])

    useEffect(()=>{
        const getCivilization = async()=>{
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const civilizations = await data.json()
            setCivilization(civilizations)
        }
        getCivilization();
    }, [id])

    return (
        <div>
            <h3>{civilization.name}</h3>
            <p>{civilization.team_bonus}</p>
        </div>
    )
}

export default Civilizations
