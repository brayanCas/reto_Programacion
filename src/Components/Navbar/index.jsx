import { NavLink } from "react-router-dom";

const Navbar = () =>{
const activeStyle = 'underline underline-offset-4'

    return(
<header className="bg-white shadow-md py-4">
    <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex items-center justify-center">
            <li>
                <NavLink to='/' className="text-gray-700 hover:text-gray-900 mr-6">
                    Page 1
                </NavLink>
            </li>
            <li>
                <NavLink to='/' className="text-gray-700 hover:text-gray-900 mr-6">
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/developers' className="text-gray-700 hover:text-gray-900 mr-6">
                    Developers
                </NavLink>
            </li>
            <li>
                <NavLink to='/projects' className="text-gray-700 hover:text-gray-900 mr-6">
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink to='/about_me' className="text-gray-700 hover:text-gray-900">
                    About me
                </NavLink>
            </li>
        </ul>
    </nav>
</header>



    )
}

export default Navbar