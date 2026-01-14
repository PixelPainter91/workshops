//we will use onSubmit to submit our form
//To handle the form data, we need to store it in state! --> React needs to know if that data is going to have any changes
import {useState} from "react";

export default function StaffForm(){
//store form data in state
// state for nmae state for email state for password
//state for name --> variable name (name), set function initail value
const [name, setName] = useState("");

//state for email
const [email, setEmail] = useState("");

//set password
const [password, setPassword] = useState("");


//handle the input changes --> need to tell React when the changes in the data are happening as the happen = onChange
//event --> onChange ... listener and handler
function handleNameChange(event){
setName(event.target.value)
}

function handleEmailChange(event){
setEmail(event.target.value)
}

function handlePasswordChange(event){
setPassword(event.target.value)
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
            <fieldset> <legend>GetYOURDETAILS Form</legend>
            <label htmlFor="staffName">Staff Name: </label>
 <input type="text" name="staffName" value={name} required onChange={handleNameChange}/>


   <label htmlFor="email">Email: </label>
 <input type="email" name="email" value={email} required onChange={handleEmailChange}/>


  <label htmlFor="password">Password: </label>
 <input type="password" name="password"  value={password} required onChange={handlePasswordChange}/>
 <button type="submit">Submit</button>
 </fieldset>


        </form>
        </>
    )
}