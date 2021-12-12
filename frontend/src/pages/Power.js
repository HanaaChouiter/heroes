import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const Power = () => {
    const [heroPower, setHeroPower] = useState(null)
    const [error, setError] = useState("")
    const { slug, power } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/heroes/${slug}/powers/${power}`)
        .then(response => response.json())
        .then(data => setHeroPower(data))  
      
    }, [slug, power])

    if (!heroPower) {
        return <p className='container text-light my-3'>Loading Data , please wait </p>;
    }

    const deletePowers = e => {
        e.preventDefault()

        fetch(`http://localhost:5000/heroes/${slug}/powers/${power}`,{
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            setError("")
        })
        .catch(error => setError(<p className="text-light fs-4 fw-bold my-3">Le pouvoir {heroPower} est effacé correctement</p>))
    }


    return (
        <>
        <div className='container my-5'>
            <h2 className='text-light'>Power</h2>
            <div>
            {error ? <p>{error}</p> :
            <>
            <div className=''>
                <div className='col-4 d-flex justify-content-between bg-light rounded my-2 ps-2'> 
                <p className="text-dark my-2">{heroPower}</p>
                <div className='my-1 pe-2'>
                    <button type="button" class="btn btn-danger" onClick={deletePowers}>Supprimer</button>
                </div>
                </div>
            </div>
            </>
            }
            </div>
        </div>
        </>
    )
}

export default Power;