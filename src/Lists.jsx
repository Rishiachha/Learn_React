//Lists and rendering
//here we have used map() a concept of ES6 
//map():is uded to transform each element of an array and return new array
// key: React needs key to know which item changed.
export const Lists = () => {
    const fruits = [
        "Apple",
        "Mango",
        "Orange",
        "Banana"
    ]
    return (
        <div>
            <h1>Fruites List</h1>
            {fruits.map((fruit,index) => (
                <h2 key={index}>{fruit}</h2>
            ))}
        </div>
    )
}