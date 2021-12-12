import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const Powers = () => {
    const [powers, setPowers] = useState([])
    // const [error, setError] = useState("")
    const { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/heroes/${slug}/powers`)
        .then(response => response.json())
        .then(data => setPowers(data))  
      
    }, [slug])

    if (!powers) {
        return <p className='container text-light my-3'>Loading Data , please wait </p>;
    }

    // const deletePowers = e => {
    //     e.preventDefault()

    //     fetch(`http://localhost:5000/heroes/${slug}/power/${power}`,{
    //         method: 'delete',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         setError("")
    //     })
    //     .catch(error => setError(<p className="text-light fs-4 fw-bold my-3">Le pouvoir {powers} est effacé correctement</p>))
    // } 

    // console.log(powers)
    return (
        <>
        <div className='container my-5'>
            <h2 className='text-light'>Powers</h2>
            <div>
                {powers.map(power => (
                <div className='row'>
                    <div className='ps-3'>
                        <div className='col-3 d-flex justify-content-between bg-light rounded my-2 ps-2'> 
                            <p className="text-dark my-2">{power}</p>
                            {/* <div className='my-1 pe-2'>
                                <button type="button" class="btn btn-danger" onClick={deletePowers}>Supprimer</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                 ))}
            </div>
            <div className='row'>
            <label className="text-light form-label">Ajouter un pouvoir</label>
                <div className="col-3">
                    <input 
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className='col-4'>
                    <button
                        type="submit"
                        className="btn btn-dark"
                    >
                    Submit
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Powers;