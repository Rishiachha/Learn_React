/*
why thge file name is Heavy component HeavyComponent?
Imagine this component contains:
- Charts
- Large Tables
- Analytics
We don't want to load ituntil the user needs it.
*/
export const HeavyComponent = () => {
    return (
        <div>
            <h1>
                Heavy Component Loaded
            </h1>
            <p>This component was loaded dynamically.</p>
        </div>
    )
}