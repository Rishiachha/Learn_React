//conditional Rendering
export const LogIn = () => {
    // Boolean value to check whether the user is logged in
    const isLoggedIn = true
    return(
        <div>
            {/*If isLoggedIn is true, show Welcome.
            otherwise show please login */}
            {/* condition ? truePart : falsePart */}
            {isLoggedIn 
                ? <h1>Welcome Home Rishi</h1>
                : <h1>Please Login!</h1>
            }       
        </div>
    )
}
// We use the ternary operator because
// it returns one of two JSX elements.