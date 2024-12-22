// const myKey = "SBB3V7KN7UXJVYQBVJ369S95Z";

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 


async function getWeatherData(lacation) {
    try {    
        const myPromise = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lacation}/2024-12-22?key=SBB3V7KN7UXJVYQBVJ369S95Z`, {
            mode: "cors",
        });

        const myObject = await myPromise.json();
        console.log(myObject);
    } catch(err) {
        console.log(err)
    }

}


getWeatherData('bouira');