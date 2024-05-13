import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/logo.png"
import { useState } from "react";

const Navbar = () => {


    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)
 
    return(
        <>
        <nav className="navbar">

            <Link to="/" className="flex-none w-10">
                <img src={logo} className=""/>
            </Link>

            {/* removed the search button */}

            <div className="flex items-center gap-3 md:gap-6 ml-auto">
                <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
                onClick={()=> setSearchBoxVisibility(currentVal => !currentVal)}
                >
                    <i className="fi fi-br-search text-xl"></i>
                </button>

                {/* removed the write feature */}

                <Link className="btn-dark py-2" to="/signin">
                    Sign In
                </Link>

                <Link className="btn-light py-2 hidden md:block" to="/signup">
                    Sign Up
                </Link>

            </div>

        </nav>

        <Outlet/>
        </>
    )
}

export default Navbar;