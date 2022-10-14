import {Outlet, Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from "../../assets/images/crown.svg";
import './navigation.styles.scss';
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart -dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";

const Navigation = () => {


    const {currentUser, setCurrentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);


    // const signOutHandler = async () => {
    //    const res = await signOutUser();
    //
    //      setCurrentUser(null);
    // }

    return (
        <>
            <nav className="navigation">
                <Link className='logo-container' to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {currentUser ? (
                            <span className={"nav-link"} onClick={signOutUser}>SIGN OUT</span>)
                        : (<Link className="nav-link" to='/sign-in'>SIGN IN</Link>)}

                    <CartIcon/>


                </div>

                { isCartOpen && <CartDropdown/> }

            </nav>

            <Outlet/>
        </>
    );
}

export default Navigation;