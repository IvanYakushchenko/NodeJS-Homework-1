const input = process.argv[2];

try {
    const array = JSON.parse(input);

    function sumNumbers(arr) {
        let total = 0;

        for (const item of arr) {
            if (Array.isArray(item)) {
                total += sumNumbers(item);
            }
            else if (typeof item === 'number') {
                total += item;
            }
        }
        return total;
    }
    const result = sumNumbers(array);
    console.log("Sum:", result);
}
catch (error) {
    console.error(error);
}