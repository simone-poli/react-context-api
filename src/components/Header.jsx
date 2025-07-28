import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light text-center">
                    <div className="container justify-content-center">


                        <ul className="navbar-nav d-flex ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    HomePage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts">
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul>

                    </div>
                </nav>

            </header>





        </>




    )
}