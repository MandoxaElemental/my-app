function saveToLocalStorage(country: string) {

        if (typeof window !== 'undefined') {
            const countryArr = getLocalStorage();
            if (!countryArr.includes(country)) {
                countryArr.push(country);
            }
            localStorage.setItem('Country', JSON.stringify(countryArr));
        }


}
function saveToRecentStorage(country: string) {

        if (typeof window !== 'undefined') {

            const recentArr = getLocalStorage();
            if (!recentArr.includes(country)) {
                recentArr.push(country);
            }
            localStorage.setItem('Recent', JSON.stringify(recentArr));   
             }
    


}

function getRecentStorage(){
    if(typeof window != 'undefined')
    {
        const localStorageData = localStorage.getItem('Recent');
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
    }
    return []
    
}

function getLocalStorage(){

        if (typeof window !== 'undefined') {
            const localStorageData = localStorage.getItem('Country');
            if (localStorageData == null) {
                return [];
            }
            return JSON.parse(localStorageData);      
          }
 
    return []
}

function removeFromLocalStorage(country: string){
    
        if (typeof window !== 'undefined') {
            const countryArr = getLocalStorage();
            const countryindex = countryArr.indexOf(country);
            countryArr.splice(countryindex, 1);
            localStorage.setItem('Country', JSON.stringify(countryArr));     
           }
    
}

export{saveToLocalStorage, getLocalStorage, removeFromLocalStorage, saveToRecentStorage, getRecentStorage }