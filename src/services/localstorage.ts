function saveToLocalStorage(country: string) {
    let countryArr = getLocalStorage();
    if (!countryArr.includes(country)) {
        countryArr.push(country);
    }
    localStorage.setItem('Country', JSON.stringify(countryArr));

}
function saveToRecentStorage(country: string) {
    let countryArr = getLocalStorage();
    if (!countryArr.includes(country)) {
        countryArr.push(country);
    }
    if(countryArr.length > 5){
        countryArr.shift();
    }
    localStorage.setItem('Recent', JSON.stringify(countryArr));

}

function getRecentStorage(){
    let localStorageData = localStorage.getItem('Recent');
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('Country');
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(country: string){
    let countryArr = getLocalStorage();
    let countryindex = countryArr.indexOf(country);
    countryArr.splice(countryindex, 1);
    localStorage.setItem('Country', JSON.stringify(countryArr));
}

export{saveToLocalStorage, getLocalStorage, removeFromLocalStorage, saveToRecentStorage, getRecentStorage }