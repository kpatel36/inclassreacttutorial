// imports at the top
import { useEffect, useState } from 'react';
// function def for componenet 0 return a single JSX element

const Home = props => {
    // component state and the concept of component lifecycle
    // component's state is essentially a collection of data/objects/functions associated with a specific lifestyle of that componenet
    // any time you're working with React and you see a function that is named use__() -> that is a hook
    // a hook provides special behavior that influences the lifecycle of a component
    let [animal, setAnimal] = useState('Fennec Fox'); // initial value of state variable is set as the arg for the useState hook
    // changing or mutating state will cause component to reload/rerender/update
    // let's make a button to change the state
    const changeAnimal = () => {
        if (animal == 'Fennec Fox'){
            setAnimal('Panda Bear'); // proper mutation of state
        } else {
            setAnimal ('Fennec Fox')
        }
    }

    const changeAnimal2Order = () => {
        // 1. access state and create a copy
        let animals2_copy = [...props.animals2] // using javascript spread operator (...)to create a copy

        // 2. change/mutate/modify the copy 
        let popped = animals2_copy.pop(); //remove last element
        animals2_copy.splice(0, 0, popped); //insert removed element at start of array

        // 3. <optional> verify changes/testing
        console.log(animals2_copy);

        // 4. mutate -> mutate the state through the proper setter (which causes a re-render)
        props.setAnimals2(animals2_copy);
    }

    // useEffect hook - required parameter: a callback func - parent component(Home here) is rendered(initially loaded) or re-rendered(updated)
    useEffect(() => {console.log('Home component rendered or re-rendered')} )
    // useEffect hook will run that callback function every time the parent component(Home) is rendered or re-rendered

    return (
        <div>
            <div>
                <h1>Homepage! Welcome to React, Foxes!</h1>  
                <h3>{animal}</h3>
                <button className = 'btn btn-secondary' onClick={changeAnimal}>Change Animal</button>
            </div>
            <h1>Current Animals:</h1>
            <button className = 'btn btn-secondary' onClick={changeAnimal2Order}>Change Animal Order</button>
            {props.animals2.map((animal2,index) => { // having a map function map over an array and return an h3 element for each animal in array to be rendered on the page
                return <h3 key={index}>{animal2}</h3>  /* index and key=index are just used to avoid unique key warning - helps comp differentiate between h3s */
            })}
        </div>
    );
}

// export that functional component
export default Home;
