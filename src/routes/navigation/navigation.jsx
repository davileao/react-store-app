import {Outlet, Link} from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/images/crown.svg";
import './navigation.styles.scss';


const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <Link className='logo-container' to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
                </div>



            </nav>
            <Outlet/>
        </>
    );
}

export default Navigation;