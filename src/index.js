module.exports = function zeros(expression) {
    let count2 = 0;
    let count5 = 0;
    const factorialsArray = expression.split('*');
    factorialsArray.forEach(factorial => {
        const number = parseInt(factorial, 10);
        if(factorial.indexOf("!!") === -1) {
            if(number >= 25) count5 += 1;
            if(number >= 75) count5 += 1;
            if(number >= 50) count5 += 1;
            if(number >= 100) count5 += 1;
            count5 += Math.floor(number/5);
            count2 += Math.floor(number/2);
            if(number >= 4) count2 += 1;
            if(number >= 8) count2 += 1;
            if(number >= 16) count2 += 1;
            if(number >= 32) count2 += 1;
            if(number >= 64) count2 += 1;
        }

        if((factorial.indexOf("!!") > -1) && (number % 2 !== 0)) {
            if(number >= 25) count5 += 1;
            if(number >= 75) count5 += 1;
            if(number >= 50) count5 += 1;
            if(number >= 100) count5 += 1;
            count5 += Math.floor(number/5);
        }
        if((factorial.indexOf("!!") > -1) && (number % 2 === 0)) {
            count2 += Math.floor(number/2);
            if(number >= 4) count2 += 1;
            if(number >= 8) count2 += 1;
            if(number >= 16) count2 += 1;
            if(number >= 32) count2 += 1;
            if(number >= 64) count2 += 1;
            count5 += Math.floor(number/10);
            if(number >= 50) count5 += 1;
            if(number >= 100) count5 += 1;
        }

    })

    return Math.min(count5, count2);

}
