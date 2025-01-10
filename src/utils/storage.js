/* global chrome */
// Saves user resume and AIKey to chrome storage

export const save = (key, data) => {
    if (isExtension) {
        try {
            // Saves data by a key to chrome local storage
            return chrome.storage.local.set( {[key] : data});
        } catch (error) {
            console.error("Error saving data");
            console.error(error);
        }
    } else {
        // Uses local storage instead of chrome storage in the even that isn't a chrome extension,par
        return Promise.resolve(localStorage.setItem(key, JSON.stringify(data)));
    }
};

export const load = (key) => {
    if (isExtension) {
        try {
            return chrome.storage.local.get(key).then((data) => data[key]);
        } catch (error) {
            console.error("Error loading data");
            console.error(error);
        }
    } else {
        return Promise.resolve(JSON.parse(localStorage.getItem(key)));
    }

}
// Checks if current enviroment is a chrome extension
const isExtension = () => {
    // Returns true if chrome storage is available, indicating a chrome extension
    return !!chrome?.storage;
}