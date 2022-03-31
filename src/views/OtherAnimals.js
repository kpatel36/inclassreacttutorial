import "../css/otheranimals.css"
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';


let OtherAnimals = () => {

    // make api call to get random animals
    const getZooAnimals = async () => {
        let response = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/8');
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
        <div>
            <div className="row d-flex justify-content-center mt-5">
                <h1 className="deck_title justify-content-center">Animals from around the world</h1>
            </div>
            <div className="card-deck m-5 ">
                {typeof other_animals === 'object' && !other_animals.then ? other_animals.map((other_animal,index) => {
                return <div key={index} className="card" style = {{width: 18 + 'rem'}}>
                    <img className="card-img-top" src={other_animal.image_link} alt="no image available"></img>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item animal_name">
                            <h5 className='card-text font-weight-bold'>{other_animal.name}</h5>
                        </li>
                        <li className="list-group-item sci_name">
                            <div className='list-item header font-weight-bold'>Scientific Name: </div>
                            <div className='card-text font-italic'>{other_animal.latin_name}</div>
                        </li>
                        <li className="list-group-item animal_type">
                            <div className='list-item header float-left font-weight-bold'>Active Time: </div>
                            <div className='card-text'>{other_animal.active_time}</div>
                        </li>
                        <li className="list-group-item active_time">
                            <div className='list-item header float-left font-weight-bold'>Animal Type: </div>
                            <div className='card-text'>{other_animal.animal_type}</div>
                        </li>
                        <li className="list-group-item animal_length">
                            <div className='list-item header float-left font-weight-bold'>Length Range: </div>
                            <div className='card-text'>{other_animal.length_min} ft. – {other_animal.length_max} ft.</div>
                        </li>
                        <li className="list-group-item animal_weight">
                            <div className='list-item header float-left font-weight-bold'>Weight Range: </div>
                            <div className='card-text'>{other_animal.weight_min}lb. - {other_animal.weight_max} lb.</div>
                        </li>
                        <li className="list-group-item lifespan">
                            <div className='list-item header float-left font-weight-bold'>Lifespan: </div>
                            <div className='card-text'>{other_animal.lifespan} years</div>
                        </li>
                        <li className="list-group-item habitat">
                            <div className='list-item header float-left font-weight-bold'>Habitat: </div>
                            <div className='card-text'>{other_animal.habitat}</div>
                        </li>
                        <li className="list-group-item geo_range">
                            <div className='list-item float-left header font-weight-bold'>Found In: </div>
                            <div className='card-text'>{other_animal.geo_range}</div>
                        </li>
                        <li className="list-group-item diet">
                            <div className='list-item header float-left font-weight-bold'>Diet: </div>
                            <div className='card-text'>{other_animal.diet}</div>
                        </li>
                    </ul>
                </div>}
                    ):
                <h1>Finding some cool animals..</h1>
                }
            </div>
            <div className=" row footer-elements justify-content-center d-flex flex-columnn">
                <button className = "btn btn-secondary" onClick={OtherAnimals}>See Other Animals</button>
                <a className="zoo-animal-link" href="https://zoo-animal-api.herokuapp.com/">Zoo-Animal Api Used</a>
            </div>
        </div>

        ) 


}






export default OtherAnimals;