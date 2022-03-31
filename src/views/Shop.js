// imports at the top
import { useEffect, useState, useContext } from 'react';
import axios from 'axios'; // will allow you to make API calls in the shop component
import { DataContext } from '../context/DataProvider';

// function def for my component - return a single JSX element
const Shop = () => {
    /* 
    1. make an api call to our flask app
    2. set up a state variable for our products
    3. set that state variable based on the results of our api call
    4. set up conditional JSX templating such that if we have products, we display them
        -> otherwise, we display 'Loading....'
    */

    /* will need a state variable, a state hook, an api call, and additional JSX templating 
        - API call - need either fetch or axios
    */

    // make api call to our flask app
    const getAnimalData = async () => {
        let response = await axios.get('https://foxes84-tweetyer.herokuapp.com/api/animals');
        return response.status === 200 ? response.data : null // ternary operator statement saying if response status code comes back 200, save the response at variable data, else return "null"
    }; 


    // loading api call response data into our state variable
    const loadAnimalData = async () => {
        let data = await getAnimalData();
        console.log(data.Animals, typeof data);
        // take this data and set state variable with it
        //.Animals since ddata was called ANimals in this APIcall
        setAnimals(data.Animals); // want the key because 
    }

    // state variable setup
    const [animals,setAnimals] = useState (() => loadAnimalData());

    // using the useEffect hook to trigger our api call leads to an infinite loop - rather, implement loadAnimalData into useState, replacing null


    // access our cart from our Context.Provider as well as its setter
    const {cart, setCart} = useContext(DataContext);


    // function to adopt an animal (aka add to cart)
    // when button is pressed, add animal to cart object
    const adoptAnimal = (animal) => {
        // add the animal to our cart object - cannot mutate state directly
        // make a copy
        let mutableCart = {...cart}
        // modify the copy
        // increase size by one
        mutableCart.size++;
        mutableCart.total += animal.price;  
        // increase total by animal.price
        // if the animal is in the cart already, increase quantity by one, otherwise add the animal to the cart
        if (mutableCart.animals[animal.id]){
            mutableCart.animals[animal.id].quantity++;
        } else {
            mutableCart.animals[animal.id] = {'data' :animal, 'quantity':1}
        }
            // translation
            // ternary operator version: if the animals property of the mutable cart already exists, it means that animal is in the cart, and simply add one to the quantity; if it doesnt exist, add it to the cart/dictionary as data being the animal and the quantity being 1
            // mutableCart.animals[animal.id] ?
            // mutableCart.animals[animal.id].quantity++ :
            // mutableCart.animals[animal.id] = {'data' :animal, 'quantity':1}



        // testing the console.log
        console.log(cart);
        console.log(mutableCart);
        // set state
        setCart(mutableCart)
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h1 className="mt-5 mb-5">Available to Adopt</h1>
            </div>
            <div className='card-deck'>
                {/* cards for each animal once the animals have actually loaded*/}
                {typeof animals === 'object' && !animals.then ? animals.map((animal, index)  => { //if it isnt !animals.then, and animals === object, you know you are dealing with your array, not your promise
                    return <div key={index} className="card" style={{width: 18 + 'rem'}}>
                    <img src={animal.image} className="card-img-top" alt={animal.name}/>
                    <div className = "card-body">
                        <h3 className='card-title font-weight-heavy'>{animal.name}</h3>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <div className='list-item-header font-weight-bold'>Scientific Name: </div>
                            <div className = 'card-title font-italic'>{animal.sci_name}</div>
                        </li>
                        <li className="list-group-item">
                            <div className='list-item-header font-weight-bold'>Description:</div>
                            <div className="card-text"> {animal.description}</div>
                        </li>
                        <li className='list-group-item'>
                            <div className='list-item-header font-weight-bold'>Habitat: </div>
                            <div className="animal-trait">{animal.habitat}</div>
                        </li>
                        <li className='list-group-item'>
                            <div className='list-item-header font-weight-bold'>Diet: </div>
                            <div className="animal-trait">{animal.diet}</div>
                        </li>
                        <li className='list-group-item'><span className='float-left font-weight-bold'>Lifespan: </span>{animal.lifespan} | {animal.size} <span className='float-right font-weight-bold'>Length: </span> </li>
                    </ul>
                    <div className='card-body'>
                        <p className='card-link'><span className = 'float-left justify-content-center'>${animal.price.toFixed(2)}</span><span className="float-right btn btn-lg btn-info" onClick={() => adoptAnimal(animal)}>Adopt</span></p>
                    </div>
                </div>
                }) :
                
                <h1>Waking up animals...</h1>
            }
            </div>
        </div>
    )

}
// export that functional component
export default Shop; 