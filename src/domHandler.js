import rainIcon from "./assets/rain.png";

function domHandler(obj) {
    const container = document.querySelector('.cards-container');
    const smallCardsContainer = document.querySelector('.small-cards-container');
    container.insertBefore(createBigCard(), smallCardsContainer);

    smallCardsContainer.appendChild(createSmallCard());
    smallCardsContainer.appendChild(createSmallCard());

    console.log(obj);
    for(let key in obj) {
        console.log(obj[key]);
    }
} 

function createBigCard() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('big-card');
    
    myDiv.appendChild(cardBuilder.createIcon(rainIcon));

    const informationDiv = document.createElement('div');
    informationDiv.classList.add('information');
    informationDiv.appendChild(cardBuilder.createTemp('36.4F'));
    informationDiv.appendChild(cardBuilder.createAddress('3Frankfurt am Main'));
    informationDiv.appendChild(cardBuilder.createDescription('Similar temperatures continuing'));

    myDiv.appendChild(informationDiv);

    return myDiv;
}
 
function createSmallCard() {
    const smallCard = document.createElement('div');
    smallCard.classList.add('small-card');

    smallCard.appendChild(cardBuilder.createIcon(rainIcon));

    const informationDiv = document.createElement('div');
    informationDiv.classList.add('information');
    informationDiv.appendChild(cardBuilder.createTemp('36.4F'));
    informationDiv.appendChild(cardBuilder.createDayDiv('Monday'));
    informationDiv.appendChild(cardBuilder.createDateDiv('2024-12-23'));
    informationDiv.appendChild(cardBuilder.createDescription('Similar temperatures continuing'));

    smallCard.appendChild(informationDiv);

    return smallCard;
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