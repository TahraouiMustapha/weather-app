// const myKey = "SBB3V7KN7UXJVYQBVJ369S95Z";

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 

const locationInput = document.querySelector('#locationInput');
const fetchBtn = document.querySelector('#fetchBtn');

fetchBtn.addEventListener('click', async () => {
    const location = locationInput.value;
    try {
        if(location) {
            const myObj = await getWeatherData(location);
            console.log(myObj);
        } else {
            throw new Error("you should fill right location!");
        }
    } catch(err) {
        console.log(err);
    }

})

async function getWeatherData(lacation) {
    try {    
        const myPromise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lacation}/2024-12-22?key=SBB3V7KN7UXJVYQBVJ369S95Z`, {
            mode: "cors",
        });

        const myObject = await myPromise.json();
        return myObject.days[0];
    } catch(err) {
        console.log('the error in getWeatherData func');
        throw err;
    }
}





