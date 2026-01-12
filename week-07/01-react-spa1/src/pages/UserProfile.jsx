//TODO: I Want the value of the params in the profile page
import { useParams } from "react-router";

//useParams is a hook we ccan use to exstract the value of params
export default function UserProfile(){
    //here we are desstructuring the vale or the params and storing it in a variable
    let { userProfile } = useParams();
    return(
        <>
        <h1>Username: {userProfile}</h1>
        </>
    )
}