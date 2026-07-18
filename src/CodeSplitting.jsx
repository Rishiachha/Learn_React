//Code Splitting is a technique where we divide a large JavaScript bundle into smaller chunks and load only the required 
// code when needed.
//When we build a React application, normally all JavaScript files are combined into one large bundle.
// Dynamic import() JavaScript downloads this file only when this function runs.
import { useState } from "react";
export const CodeSplitting = () => {
    const [Component, setComponent] = useState(null);
    const loadComponent = async () => {
        const module = await import("./HeavyComponent")
        //Store component after loading
        setComponent(() => module.HeavyComponent)
    }
    return (
        <div>
            <h1>Code Splitting Example</h1>
            <button onClick={loadComponent}> Load Analytics</button>
            {
                Component &&
                <Component />
            }
        </div>
    )
}