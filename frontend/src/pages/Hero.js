import React, {  useState, useContext } from 'react';
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroesContext } from "../contexts/Heroes"

const Hero = () => {
    const { hero } = useContext(HeroesContext)
    const [error, setError] = useState("")
    const { slug } = useParams();
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/heroes/${slug}`
    //     )
    //     .then(response => response.json())
    //     .then(data => setHero(data))  
      
    // }, [slug])

    if (!hero) {
        return <p className='container text-light my-3'>Loading Data , please wait </p>;
    }

    const deleteHero = e => {
        e.preventDefault()

        fetch(`http://localhost:5000/heroes/${slug}`,{
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            setError("")
        })
        .catch(error => setError(<p className="text-light fs-4 fw-bold my-3">{hero.name} effacé correctement</p>))
    }

    // console.log(hero.power)

    return (
    <div className="container mt-3">
        {error ? <p>{error}</p> :
        <>
        <h1 className="text-light">{hero.name}</h1>
        <div className="row">
            <div className="col-3 my-4" key={hero.name} >
                <div className="my-1 h-100 box">
                    <img className="image mb-3" src={hero.image} alt="" />
                    <h3 className="text-light ps-2">{hero.name}</h3>
                    <p className="text-light ps-2">{hero.age}</p>
                    <p className="ps-2 text-light">Power: </p> 
                    {/* <ul>
                        {hero.power.map(e => (
                            <li className="text-light">{e}</li>
                        ))}
                    </ul> */}
                    <div className='ps-2'>
                        <button type="button" className="btn btn-outline-danger " onClick={deleteHero}>Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        }
    </div>
    );
};

export default Hero;