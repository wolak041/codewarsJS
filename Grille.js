// https://www.codewars.com/kata/595b3f0ad26b2d817400002a

const decimalToBinary = (decimal, length) => {
    const binary = (+decimal).toString(2);
    return binary.length >= length ? binary.slice(-length) : binary.padStart(length, '0')
};

const grille = (message, code) => {
    const binary = decimalToBinary(code, message.length);
    return [...message].reduce((decryptedMessage, character, index) => {
        return decryptedMessage + (+binary.charAt(index) ? character : '');
    }, "")

};