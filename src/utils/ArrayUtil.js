export const flatten = (array, key) => {
    return array.reduce((prev, item) => {
        prev.push(item);
        return prev.concat(item[key] ? flatten(item[key]) : []);
    }, []);
}

export const findOne = (array, key, value) => {
    for (let item of array) {
        if (item[key] == value) {
            return item;
        }
    }
}