import { format, addDays } from "date-fns";
import "./style.css";
import sendObjToDom, { handleLoadingMessage } from "./domHandler.js";


const locationInput = document.querySelector('#locationInput');
const fetchBtn = document.querySelector('#fetchBtn');
// for begin
handleLoadingMessage.hideLoading();

fetchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const location = locationInput.value;
    handleLoadingMessage.showLoading();
    try {
        if(location) {
            const myObj = await getWeatherData(location);
            handleLoadingMessage.hideLoading();
            sendObjToDom(myObj);
        } else {
            throw new Error("you should fill right location!");
        }
    } catch(err) {
        handleLoadingMessage.hideLoading();
        alert(err);
    }

})
 

async function getWeatherData(lacation) {
    const today = format(new Date(), 'yyyy-MM-dd');
    const date2 = format(addDays(today, 10), 'yyyy-MM-dd');
    try {    
        const myPromise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lacation}/${today}/${date2}?key=SBB3V7KN7UXJVYQBVJ369S95Z`, {
            mode: "cors",
        });

        const myObject = await myPromise.json();
        return myObject;
    } catch(err) {
        alert('can\'t get this information');
        throw err;
    }
}






