// import "../css/cartstyling.css"
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
        setCart({size:0, total:0, animals: {}});
        console.log(cart);
    }

    const increaseQuantity = id => {
        //increasing quantity of animal as well as overall size of cart - must go through mutation process 
        //create copy of current state
        let mutableCart = {...cart};
        // modify copy
        mutableCart.size++;
        mutableCart.total +=mutableCart.animals[id].data.price;
        mutableCart.animals[id].data.quantity++;
        //set state
        console.log(mutableCart);
        setCart(mutableCart);
    }



    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">
                    <div className="p-2">
                        <h4>Animals available to adopt</h4>
                    </div>
                    { Object.values(cart.animals).map((animal, index) => {
                        return <div className="d-flex flex-row bg-white p-3 mt-4 rounded">
                        <div className="mr-1"><img className="rounded" alt={animal.data.name} src={animal.data.image} width="70"/></div>
                        <div className="d-flex flex-column align-items-center animal-details font-weight-bold"><span>{animal.data.name}</span>
                            <div className="d-flex flex-row animal-description">{animal.data.description}</div>
                            <div className="d-flex flex-row animal-price">{animal.data.price}</div>
                            <div className="d-flex flex-row quantity">{animal.quantity}</div>
                        </div>
                        <div className="d-flex flex-row align-items-center qty">
                            <i className="fa fa-minus text-danger"></i>
                            <h3 className="text-info mt-1 mr-1 ml-1">{animal.quantity}</h3>
                            <i className="fa fa-plus text-danger" onClick={() => {increaseQuantity(animal.data.id)}}></i>
                        </div>
                    </div>
                    })}
                    <div className="d-flex align-items-center bg-white rounded"><button className="btn btn-lg btn-danger" onClick={clearcart}>Clear Cart</button></div>
                </div>
                
            </div>
        </div>
            
        

// )}})
// }}
    )};

export default Cart;