//React Router allows us to move between pages without reloading the browser.
//Instead of creating multiple HTML pages, React changes components.
//first we have to install react router dom with this npm install react-router-dom
import {Link} from "react-router-dom"
export const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/About">About</Link>
                <Link to = "/Contact">Contact</Link>
            </nav>
        </div>
    )
}