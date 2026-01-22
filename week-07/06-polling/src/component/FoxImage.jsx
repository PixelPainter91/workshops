//TODO: I Want to render a random image of  a fox at a specific interval of time
//polling --> refresh our content periodically
//state --> store the image url value
//effect --> fetch data from exteral API
//tuner--> refresh priodically
import { useState, useEffect } from "react";


export default function FoxImage(){
//state for the image url
const [imageUrl, setImgUrl ] = useState(null);

//effect for API fetch
useEffect(( )=> {
async function fetchFox(){
    const response =  await fetch("https://randomfox.ca/floof/");
    console.log(response);
    const data = await response.json();
    setImgUrl(data.image);
}



fetchFox();
//interval to poll data regularly
//timers are effects

const pollingInterval = setInterval(fetchFox, 5000);
console.log(pollingInterval);


return () => clearInterval(pollingInterval);

}, [] );


    return(
        <>
        <h2>Fox Image</h2>
        <img src={imageUrl} alt={"Random Fox"}/>
        </>
    )
}