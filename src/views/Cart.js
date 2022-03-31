import "../css/cartstyling.css"
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Cart = () => {
    /* access to cart amd setCart context
    1. Access to cart and setCart context
    2. clear entire cart
    3. remove all of a single item from cart
    4. remove one of an item
    5. add one more of an item
    */

    const {cart, setCart} = useContext(DataContext);

    const clearcart = () => {
        setCart({size:0, total:0, animals: {}}); // to clear the cart, just set it back to the original state of ({size:0, total:0, animals{}})
        console.log(cart);
    } // this will be the onClick functionality for the "Clear Cart button"

    const increaseQuantity = id => {
        //increasing quantity of animal as well as overall size of cart - must go through mutation process 
        //create copy of current state
        let mutableCart = {...cart};
        // modify copy
        mutableCart.size++;
        mutableCart.total +=mutableCart.animals[id].data.price;
        mutableCart.animals[id].quantity++;
        //set state
        console.log(mutableCart);
        setCart(mutableCart);
    }

    const decreaseQuantity = id => {
        // initially same as the increase quantity function until you reach 0 of that animal in the cart. need to keep it from going into negative values
        //create copy of current state
        let mutableCart = {...cart};
        // modify copy
        mutableCart.size--;
        mutableCart.total -= mutableCart.animals[id].data.price;

        mutableCart.animals[id].quantity > 1 ?
        mutableCart.animals[id].quantity--:
        delete mutableCart.animals[id] // delete that animal's id completely from the cart
        //set state
        console.log(mutableCart);
        setCart(mutableCart);
    }

    const removeItem = id => { // remove entire row at once by hitting the garbage can icon 
        // create a copy of current state
        let mutableCart= {...cart};
        // modify the copy
        // reduce the size of cart by quantity of this item
        mutableCart.size -= mutableCart.animals[id].quantity; // reduce total number of items in cart by the quantity of this animal that was removed
        // reduce the total of the cart by the quantity of this item times the price of the item
        mutableCart.total -= mutableCart.animals[id].quantity*mutableCart.animals[id].data.price;
        // remove the animal
        delete mutableCart.animals[id]
        // set state
        console.log(mutableCart);
        setCart(mutableCart); 
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-12">
                    <div className="p-2">
                        <h4>Your cart currently contains:</h4>
                    </div>
                    {/* for each animal in our 'cart', we will create a row for that animal stating the quantity , which will have the info and the capabilities to increase or reduce quantity */}
                    { Object.values(cart.animals).map((animal, index) => {
                        return <div className="whole_description d-flex flex-row align-items-center justifty-content-between bg-white p-3 mt-4 rounded">
                            <div className="animal_pic align-content-center mr-1"><img className="rounded img-responsive" alt={animal.data.name} src={animal.data.image} width="70"/></div>
                            <div className="d-flex flex-column align-items-center ml-2 mr-2 animal_name">{animal.data.name}</div>
                            {/* <div className="d-flex flex-row animal-description"> */}
                            <div className="size ml-2 mr-2"><span className="font-weight-italic">{animal.data.sci_name}</span></div>
                            <div className="animal-desc justify-content-center ml-3 mr-3 ">{animal.data.description}</div>
                            <div className="d-flex flex-column justify-content-center ml-3 mr-3 quantity">{animal.quantity}</div>
                            <div className="d-flex flex-column justify-content-center ml-3 mr-3 animal-price">{animal.data.price}</div>
                            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                <i className="fa fa-minus text-danger ml-1 mr-1" onClick={() => {decreaseQuantity(animal.data.id)}}></i>
                                <h3 className="text-info mt-1 mr-1 ml-1">{animal.quantity}</h3>
                                <i className="fa fa-plus text-danger ml-1 mr-1" onClick={() => {increaseQuantity(animal.data.id)}}></i>
                            </div>
                            <div className ="animal_price d-flex align-items-center justify-content-center ml-3 mr-3 ">
                                <h5 className ="text-grey animal-subtotal">${animal.data.price.toFixed(2)} ea.</h5>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={() =>{removeItem(animal.data.id)}}></i></div>
                    </div>
                    })
                    }
                    <div className="d-flex align-items-center bg-white rounded mt-5 mb-5"><button className="btn btn-lg btn-block btn-danger text-white" onClick={clearcart}>Clear Cart</button></div>
                    <div className="d-flex align-items-center bg-white rounded mt-5"><button className="btn btn-lg btn-block btn-warning text-white" >Proceed to Checkout</button></div>
                </div>
                
            </div>
        </div>
            
        

// )}})
// }}
    )};

export default Cart;