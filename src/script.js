// const myKey = "SBB3V7KN7UXJVYQBVJ369S95Z";
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 
import { format } from "date-fns";
import "./style.css";
import sendObjToDom from "./domHandler.js";

const locationInput = document.querySelector('#locationInput');
const fetchBtn = document.querySelector('#fetchBtn');


fetchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const location = locationInput.value;
    try {
        if(location) {
            const myObj = await getWeatherData(location);
            sendObjToDom(myObj);
        } else {
            throw new Error("you should fill right location!");
        }
    } catch(err) {
        console.log(err);
    }

})

sendObjToDom({});

async function getWeatherData(lacation) {
    const today = format(new Date(), 'yyyy-MM-dd');
    try {    
        const myPromise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lacation}/${today}?key=SBB3V7KN7UXJVYQBVJ369S95Z`, {
            mode: "cors",
        });

        const myObject = await myPromise.json();
        return myObject;
    } catch(err) {
        console.log('can\'t get this information');
        throw err;
    }
}






