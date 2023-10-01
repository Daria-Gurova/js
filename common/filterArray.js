const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
    if (num%2 === 0) {
        return true;
    } else {
        return false;
    }
};

const filterArray = (array, isEven) => {
    const filteredArray = [];
    array.forEach(element => {
        if (isEven(element) === true) {
            filteredArray.push(element);
        }
    });
    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));