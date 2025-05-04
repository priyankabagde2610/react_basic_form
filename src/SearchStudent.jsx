
import { useState } from "react";

function SearchStudent()
{
    const[studentName,setStudentName] =useState(null)

    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`searching for the students who have name ${studentName}....!`)
    }

    function handleChange(event)
    {
        setStudentName(event.target.value);
    }

    return<div>
        <form onSubmit={event=>handleSubmit(event)}>
            <label htmlFor="sname">Enter Student Name:</label>
            <input type="text" id="sname" name="sname" onChange={e=>handleChange(e)}/>
            <button type="submit">Search</button>


        </form>
    </div>
}
export default SearchStudent;