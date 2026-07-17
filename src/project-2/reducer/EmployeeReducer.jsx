export const employeeReducer = (state, action) => {
    switch (action.type) {
        //If action.type is "ADD",add the new employee to the existing array.
        //action:Contains information about what operation should happen.
        case "ADD":
            return [...state, action.payload];
        //Remove the employee whose id matches action.payload
        case "DELETE":
            return state.filter(
            /*
                filter() Creates a NEW array.It keeps only employees whose id is NOT equal to the id we want to delete.
            */
                (employee) => employee.id !== action.payload
            );
        //if no action matches return to current state    
        default:
            return state;
    }
}