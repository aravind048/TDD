function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(`[${parts[0].slice(2)}]`);
        numbers = parts[1];
    }

    const numsArray = numbers.split(delimiter);
    return numsArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;
