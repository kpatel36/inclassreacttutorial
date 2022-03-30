// imports at the top
import { Link } from 'react-router-dom'; // this import enables us the abiility to link to component pages within our app. we can now replace traditional HTML "a" tags with the JSX "Link" tags
import { useEffect } from 'react';
//function def for my component - return a single JSX element

const Navbar = () => {

    useEffect(() => {console.log('Navbar component rendered or re-rendered')});

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

// export that functional component
export default Navbar;