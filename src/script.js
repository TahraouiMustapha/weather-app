import { format } from "date-fns";
import "./style.css";
// const myKey = "SBB3V7KN7UXJVYQBVJ369S95Z";
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 

const locationInput = document.querySelector('#locationInput');
const fetchBtn = document.querySelector('#fetchBtn');


fetchBtn.addEventListener('input', async (e) => {
    e.preventDefault();
    const location = locationInput.value;
    try {
        if(location) {
            const myObj = await getWeatherData(location);
            for(let key in myObj) {
                console.log(myObj[key]);
            }
            console.log(myObj.address, myObj.resolvedAddress);
            console.log(myObj.conditions);
        } else {
            throw new Error("you should fill right location!");
        }
    } catch(err) {
        console.log(err);
    }

})

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






