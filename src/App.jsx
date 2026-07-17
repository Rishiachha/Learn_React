//Browser loads index.html.
//main.jsx runs first and then sets up React and mounts the app.
//main.jsx imports App.jsx.
//React renders whatever App.jsx returns 
// Every React application starts with a component.
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Navbar} from "./react_router/Navbar"
import { Home } from "./react_router/pages/Home"
import { Contact } from "./react_router/pages/Contact"
import { About } from "./react_router/pages/About"
import { FetchApi } from "./FetchApi"
import { EmployeeForm } from "./project-2/components/EmployeeForm"
import { EmployeeList } from "./project-2/components/EmployeeList"
import SearchBox from "./project-2/components/SearchBox"
import  UserProvider  from "./project-2/context/UserContext"
export const App = () => {
// Whatever is returned gets displayed on the browser.
  return (
    //HTML written inside JavaScript.
    <div>
      <UserProvider>
        <EmployeeForm />
        <SearchBox />
        <EmployeeList />
      </UserProvider>
    </div>
  );
}
//Export Makes this component available for rendering.