// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

const parse = (data) => {
    let value = 0;
    const result = [];

    [...data].forEach(command => {
        if (command === 'i') value++;
        if (command === 'd') value--;
        if (command === 's') value *= value;
        if (command === 'o') result.push(value);
    });

    return result;

};
