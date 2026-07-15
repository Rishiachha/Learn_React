//Browser loads index.html.
//main.jsx runs first and then sets up React and mounts the app.
//main.jsx imports App.jsx.
//React renders whatever App.jsx returns 
// Every React application starts with a component.
import { ReactMemo } from "./hooks/reactmemo/ReactMemo"
import {UserApp} from "./hooks/context/UserApp"
import {UseReducer} from "./hooks/UseReducer"
export const App = () => {
// Whatever is returned gets displayed on the browser.
  return (
    //HTML written inside JavaScript.
    <div>
      <ReactMemo />
      <UserApp />
      <UseReducer />
    </div>
  );
}
//Export Makes this component available for rendering.