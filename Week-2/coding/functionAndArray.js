function max(...numbers) {
    let max = 0;
    for (n of numbers) {
        max = n > max ? n : max;
    }
    return max;
}

const result1 = max(1, 2, 4, 5);
console.log(result1);

const result2 = max(5, 2, 7, 1, 6);
console.log(result2);
