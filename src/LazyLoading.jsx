//Lazy Loading is a technique where we load a component, image, or data only when it is required, instead of loading everything 
// when the application starts
//flow of with lazyloading
//Application Starts=>Load Only Required Component=>User Opens Another Page=>Load That Component
//React.lazy():Used to load components dynamically.
//Suspense:Shows a fallback UI while component loads.
import React, { lazy, Suspense, useState } from "react";
import { Home } from "./pages/Home";
const About = lazy(
    () => import("./pages/About")
);
const Contact = lazy(
    () => import("./pages/Contact")
);
export const App = () => {
    const [page, setPage] = useState("home");
    return (
        <div>
            <h1>Lazy Loading Example</h1>
            <button onClick={() => setPage("home")}>Home</button>
            <button
                onClick={() => setPage("about")}
            >
                About
            </button>
            <button onClick={() => setPage("contact")}>Contact</button>
            <hr />
            <Suspense
                fallback={
                    <h2>
                        Loading Component...
                    </h2>
                }
            >
                {
                    page === "home" &&
                    <Home />
                }
                {
                    page === "about" &&
                    <About />
                }
                {
                    page === "contact" &&
                    <Contact />
                }
            </Suspense>
        </div>
    )
}