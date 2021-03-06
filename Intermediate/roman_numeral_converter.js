// Convert the given number into a roman numeral.
//jshint esversion: 6
function convertToRoman(num) {
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = [
        'M',
        'CM',
        'D',
        'CD',
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I'
    ];

    let converted = '';
    for (i = 0; i <= decimal.length; i++) {
        while (decimal[i] <= num) {
            converted += roman[i];
            num -= decimal[i];
        }
    }

    return converted;
}

convertToRoman(501);
