import React, { useState } from 'react'; // Importing Modules
// Creating a function to track the changes in DropDown List
function Dropdown() {
    //Using useState to set the defualt value of DropDown Menu and declare the values
    const [selectedValue, setSelectedValue] = useState('Java');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <select value={selectedValue} onChange={handleChange}>
            <option value="Java">Java</option>
            <option value="Spring Boot">Spring Boot</option>
            <option value="Microservices">Microservices</option>
        </select>
    );
}
export default Dropdown;