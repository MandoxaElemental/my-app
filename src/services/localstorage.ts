function saveToLocalStorage(country: string) {
    let countryArr = getLocalStorage();
    if (!countryArr.includes(country)) {
        countryArr.push(country);
    }
    localStorage.setItem('Country', JSON.stringify(countryArr));

}
function saveToRecentStorage(country: string) {
    let recentArr = getLocalStorage();
    if (!recentArr.includes(country)) {
        recentArr.push(country);
    }
    localStorage.setItem('Recent', JSON.stringify(recentArr));

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