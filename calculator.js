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

    const numsArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    
    const negatives = numsArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numsArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
