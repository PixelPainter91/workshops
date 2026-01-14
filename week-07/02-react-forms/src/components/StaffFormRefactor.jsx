//we will use onSubmit to submit our form
//To handle the form data, we need to store it in state! --> React needs to know if that data is going to have any changes
import {useState} from "react";

export default function StaffFormRecator(){
//store form data in state
// state for nmae state for email state for password
//state for name --> variable name (name), set function initail value
const [formValues, setFormValues] = useState({
    staffName: "",
    email: "",
    password: ""
})


//handle the input changes --> need to tell React when the changes in the data are happening as the happen = onChange
//event --> onChange ... listener and handler
function handleInputChange(event){
setFormValues({...formValues, [event.target.name]:  event.target.value});
}



    function handleFormSubmit(event){
    event.preventDefault();
    //here, we will send the form data to the server ...if we had one
    //fetch server route
    //declare the headers (body)--> the body value is your state
    }
    


    return(
        <>
        <h1>Staff Form</h1>
        <form onSubmit={handleFormSubmit}>

            <label htmlFor="staffName">Staff Name: </label>
 <input type="text" name="staffName" value={formValues.staffName} required onChange={handleInputChange}/>


   <label htmlFor="email">Email: </label>
 <input type="email" name="email" value={formValues.email} required onChange={handleInputChange}/>


  <label htmlFor="password">Password: </label>
 <input type="password" name="password"  value={formValues.password} required onChange={handleInputChange}/>
 <button type="submit">Submit</button>


        </form>
        </>
    )
}