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
export const App = () => {
// Whatever is returned gets displayed on the browser.
  return (
    //HTML written inside JavaScript.
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/About" element={<About/>} />
          <Route path = "/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <FetchApi />
    </div>
  );
}
//Export Makes this component available for rendering.