const string = "Привет! Как дела? У меня норм";

const vowelsList = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

const getVowels = stringToFilter => {
    let vowels = "";

    for (let i = 0; i < stringToFilter.length; i ++) {
        const currentLetter = stringToFilter[i].toLowerCase();
        //console.log(currentLetter);
        if (vowelsList.indexOf(currentLetter) !== -1) {
            vowels = vowels + currentLetter;
        }
    }

    return vowels;
};
console.log(getVowels(string));