//Browser loads index.html.
//main.jsx runs first and then sets up React and mounts the app.
//main.jsx imports App.jsx.
//React renders whatever App.jsx returns 
// Every React application starts with a component.
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Memorization} from "./Memorization"
export const App = () => {
// Whatever is returned gets displayed on the browser.
  return (
    //HTML written inside JavaScript.
    <div>
      <Memorization />
    </div>
  );
}
//Export Makes this component available for rendering.