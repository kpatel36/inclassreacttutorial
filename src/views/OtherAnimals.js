import "../css/otheranimals.css"
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';


const OtherAnimals = () => {

    // make api call to get random animals
    const getZooAnimals = async () => {
        let response = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/5');
        console.log(response.status)
        console.log(response.status)
        console.log('this part is working')
        return response.status === 200 ? response.data : null
      
    };
    //     fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
    //     .then(response => response.json())
    //     .then(otherAnimals => {
    //         console.group(otherAnimals)
    //     }) // end of second .then
    // };

    // loading an api call response data into state variable
    const loadZooAnimalData = async () => {
        let data = await getZooAnimals();
        console.log(data, typeof data);
        setOtherAnimals(data);
    }

    const[other_animals,setOtherAnimals] = useState(() => loadZooAnimalData());
    // console.log(other_animals)
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h4 className="deck_title">Animals from around the world</h4>
            </div>
            <div className="card-deck m-5 ">
                {typeof other_animals === 'object' && !other_animals.then ? other_animals.map((other_animal,index) => {
                return <div key={index}className="card" style = {{width: 18 + 'rem'}}>
                    <img className="card-img-top" src={other_animal.image_link} alt="no image available"></img>
                    <div className='card-body'>
                        <h5 className="card-title font-weight-heavy">{other_animal.name}</h5>
                        <div className="list group-item sci_name">
                            <div className='list-item header font-weight bold'>Scientific Name: </div>
                            <div className='card-title font-italic'>{other_animal.latin_name}</div>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item animal_type">
                            <div className='list-item header font-weight-bold'>Active Time: </div>
                            <div className='card-text'>{other_animal.active_time}</div>
                        </li>
                        <li className="list-group-item active_time">
                            <div className='list-item header font-weight-bold'>Animal Type: </div>
                            <div className='card-text'>{other_animal.animal_type}</div>
                        </li>
                        <li className="list-group-item animal_length">
                            <div className='list-item header font-weight-bold'>Length Range: </div>
                            <div className='card-text'>{other_animal.length_min} ft. – {other_animal.length_max} ft.</div>
                        </li>
                        <li className="list-group-item animal_weight">
                            <div className='list-item header font-weight-bold'>Weight Range: </div>
                            <div className='card-text'>{other_animal.weight_min}lb. - {other_animal.weight_max} lb.</div>
                        </li>
                        <li className="list-group-item lifespan">
                            <div className='list-item header font-weight-bold'>Lifespan: </div>
                            <div className='card-text'>{other_animal.lifespan} years</div>
                        </li>
                        <li className="list-group-item habitat">
                            <div className='list-item header font-weight-bold'>Habitat: </div>
                            <div className='card-text'>{other_animal.habitat}</div>
                        </li>
                        <li className="list-group-item geo_range">
                            <div className='list-item header font-weight-bold'>Found In: </div>
                            <div className='card-text'>{other_animal.geo_range}</div>
                        </li>
                        <li className="list-group-item diet">
                            <div className='list-item header font-weight-bold'>Diet: </div>
                            <div className='card-text'>{other_animal.diet}</div>
                        </li>
                    </ul>

                </div>}
                
                
                    

                    ):
                <h1>Finding some cool animals..</h1>
                }
            </div>
            <a className="zoo-animal-link" href="https://zoo-animal-api.herokuapp.com/">Zoo-Animal Api Used</a>
        </div>

        ) 


}






export default OtherAnimals;