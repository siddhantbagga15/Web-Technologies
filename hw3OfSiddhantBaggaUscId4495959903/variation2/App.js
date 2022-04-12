import { useState } from 'react'
function App() {
    const [department, setDepartment] = useState("");
    const [manager, setManager] = useState("");
    const [contactNumber, setContact] = useState("")
    const handleOnSubmit = async (e) => {
        alert("Sending "+JSON.stringify({ department, manager, contactNumber }));
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ department, manager, contactNumber }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setDepartment("");
            setManager("");
            setContact("");
        }
    }
    return (
        <>
            <h1>This is a React WebApp </h1>
            <form action="">
                <input type="text" placeholder="department" 
                value={department} onChange={(e) => setDepartment(e.target.value)} />
                <input type="text" placeholder="manager" 
                value={manager} onChange={(e) => setManager(e.target.value)} />
                <input type="text" placeholder="contact number" 
                value={contactNumber} onChange={(e) => setContact(e.target.value)} />
                <button type="submit" 
                onClick={handleOnSubmit}>submit</button>
            </form>

        </>
    );
}

export default App;