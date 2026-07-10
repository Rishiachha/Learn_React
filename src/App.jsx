//Browser loads index.html.
//main.jsx runs first and then sets up React and mounts the app.
//main.jsx imports App.jsx.
//React renders whatever App.jsx returns 
import { Display } from "./Display"
import {Intro} from "./Intro"
import {Student} from "./Student"
import {Event} from "./Event"
// Every React application starts with a component.
export const App = () => {
// Whatever is returned gets displayed on the browser.
  return (
    //HTML written inside JavaScript.
    <div>
      <Intro />
      <Display />
      <Student 
        name="Rishi"
        age={20}
      />
      <Event />
    </div>
  );
}
//Export Makes this component available for rendering.