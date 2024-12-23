import rainIcon from "./assets/rain.png";

function domHandler(obj) {
    const container = document.querySelector('.cards-container');
    const smallCardsContainer = document.querySelector('.small-cards-container');
    resetDom();
    container.insertBefore(createBigCard(obj), smallCardsContainer);
    
    const days = obj.days;
    for(let i = 1; i < 10; i++) {
        smallCardsContainer.appendChild(createSmallCard(days[i]));
    }

} 

function createBigCard(obj) {
    const day0 = obj.days[0];
    const myDiv = document.createElement('div');
    myDiv.classList.add('big-card');
    
    myDiv.appendChild(cardBuilder.createIcon(rainIcon));

    const informationDiv = document.createElement('div');
    informationDiv.classList.add('information');
    informationDiv.appendChild(cardBuilder.createTemp(day0.temp));
    informationDiv.appendChild(cardBuilder.createAddress(obj.resolvedAddress));
    informationDiv.appendChild(cardBuilder.createDescription(obj.description));

    myDiv.appendChild(informationDiv);

    return myDiv;
}
 
function createSmallCard(dayObj) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const smallCard = document.createElement('div');
    smallCard.classList.add('small-card');

    smallCard.appendChild(cardBuilder.createIcon(rainIcon));

    const informationDiv = document.createElement('div');
    informationDiv.classList.add('information');
    informationDiv.appendChild(cardBuilder.createTemp(dayObj.temp));
    const dayName = days[new Date(dayObj.datetime).getDay()];
    informationDiv.appendChild(cardBuilder.createDayDiv(dayName));
    informationDiv.appendChild(cardBuilder.createDateDiv(dayObj.datetime));
    informationDiv.appendChild(cardBuilder.createDescription(dayObj.conditions));

    smallCard.appendChild(informationDiv);

    return smallCard;
}

function resetDom() {
    const bigCard = document.querySelector('.big-card');
    if(bigCard) bigCard.remove();
    const smallCardsContainer = document.querySelector('.small-cards-container');
    smallCardsContainer.innerHTML = '';
}

const cardBuilder = (function (){
    const createIcon = (weatherIcon) => {
        const myDiv = document.createElement('div');
        myDiv.classList.add('icon');
            const img = document.createElement('img');
            img.src = weatherIcon;
            img.alt = "icon";

        myDiv.appendChild(img);    
        return myDiv;
    }

    const createTemp = (temp) => {
        const myDiv = document.createElement('div');
        myDiv.classList.add('temp');
        myDiv.textContent = temp;

        return myDiv;
    }

    const createAddress = (address) => {
        const myDiv = document.createElement('div');
        myDiv.classList.add('address');
        myDiv.textContent = address;

        return myDiv;
    }

    const createDescription = (desc) => {
        const myDiv = document.createElement('div');
        myDiv.classList.add('description');
        myDiv.textContent = desc;

        return myDiv;
    }

    const createDayDiv = (day) => {
        const myDiv = document.createElement('div');
        myDiv.classList.add('day');
        myDiv.textContent = day;

        return myDiv;
    }

    const createDateDiv = (date = '') => {
        const myDiv = document.createElement('div');
        myDiv.classList.add('date');
        myDiv.textContent = `(${date})`;

        return myDiv;
    }

    return {
        createIcon,
        createTemp,
        createAddress,
        createDescription,
        createDayDiv,
        createDateDiv,
    }
})();


export default domHandler;