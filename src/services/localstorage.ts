function saveToLocalStorage(country: string) {
    try {
        if (typeof window !== 'undefined') {
            const countryArr = getLocalStorage();
            if (!countryArr.includes(country)) {
                countryArr.push(country);
            }
            localStorage.setItem('Country', JSON.stringify(countryArr));
        }
    } catch (error) {
        console.error('Error while setting token in localStorage:', error);
    }
   

}
function saveToRecentStorage(country: string) {
    try {
        if (typeof window !== 'undefined') {

            const recentArr = getLocalStorage();
            if (!recentArr.includes(country)) {
                recentArr.push(country);
            }
            localStorage.setItem('Recent', JSON.stringify(recentArr));        }
    } catch (error) {
        console.error('Error while setting token in localStorage:', error);
    }


}

function getRecentStorage(){
    const localStorageData = localStorage.getItem('Recent');
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function getLocalStorage(){

    try {
        if (typeof window !== 'undefined') {
            const localStorageData = localStorage.getItem('Country');
            if (localStorageData == null) {
                return [];
            }
            return JSON.parse(localStorageData);        }
    } catch (error) {
        console.error('Error while setting token in localStorage:', error);
    }
    
}

function removeFromLocalStorage(country: string){
    try {
        if (typeof window !== 'undefined') {
            const countryArr = getLocalStorage();
            const countryindex = countryArr.indexOf(country);
            countryArr.splice(countryindex, 1);
            localStorage.setItem('Country', JSON.stringify(countryArr));        }
    } catch (error) {
        console.error('Error while setting token in localStorage:', error);
    }

    
}

export{saveToLocalStorage, getLocalStorage, removeFromLocalStorage, saveToRecentStorage, getRecentStorage }