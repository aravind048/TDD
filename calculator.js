function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const numsArray = numbers.split(",");
    return numsArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = add;
