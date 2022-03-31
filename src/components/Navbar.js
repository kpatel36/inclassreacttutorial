// imports at the top
import { Link } from 'react-router-dom'; // this import enables us the abiility to link to component pages within our app. we can now replace traditional HTML "a" tags with the JSX "Link" tags
import { useEffect, useContext } from 'react';
import App from '../App';
import { DataContext } from '../context/DataProvider';
//function def for my component - return a single JSX element

const Navbar = props => {
    useEffect(() => { console.log('Navbar component rendered or re-rendered') });
    const {cart} = useContext(DataContext)
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav ml-3 mr-3">
                <li className="nav-item active">
                    <Link className="nav-link font-weight-bold" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link font-weight-bold" to="/shop">Available to Adopt</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link font-weight-bold" to="/otheranimals">Other Animals</Link>
                </li>

            </ul>
            <ul className='nav navbar-nav ml-auto'>
                <li className="nav-item active ml-auto">
                    <p className="nav-link m-0">{props.animals2[Math.floor(Math.random() * props.animals2.length)] /* pick a random element from the students array */}</p>
                </li>
                <li className='nav-item active'>
                    { cart.size === 0 ?
                    <Link className ='btn btn-info' to="/shop">Shop<i className = "fa fa-shopping-cart"></i></Link> :
                    <Link className ='btn btn-info' to="/cart"><i className = "fa fa-shopping-cart"></i>{`   ${cart.size} | $${cart.total.toFixed(2)}` }</Link>
                    }
                </li>
            </ul>

        </nav>
    );
}

// export that functional component
export default Navbar;