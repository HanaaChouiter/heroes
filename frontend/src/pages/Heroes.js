import React, { useContext } from 'react';
import { HeroesContext } from "../contexts/Heroes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/Form';

const Heroes = () => {
    
    const { heroes } = useContext(HeroesContext)
    
    return (
    <div className="container mt-3">
        <div className='row'>
            <div className='col-8'>
                <h2 className="text-light">Heroes List</h2>
                <div className="row">
                    {heroes.map(hero => (
                    <div className="col-4 my-3" key={hero.slug} >
                        <div className="my-1 h-100 box">
                            <img className="image mb-3 rounded-top" src={hero.image} alt="" />
                            <h3 className="text-light ps-2">{hero.name}</h3>
                            <p className="text-light ps-2">{hero.age}</p>
                            {/* <p className="ps-2 text-light">Power: </p>
                            <ul>
                                {hero.power.map(power => (
                                    <li className="text-light">{power}</li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className='col-4'>
            <h2 className="text-light">Add Hero</h2>
            <Form />
            </div>
        </div>
    </div>
    );
};

export default Heroes;