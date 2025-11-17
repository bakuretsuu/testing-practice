// index.js
export { capitalize, reverseString, calculator, caesarCipher};

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    let reverse = "";

    for(let i = string.length - 1; i >= 0; i--){
        reverse = reverse + string[i];
    }

    return reverse;
}

const calculator = {
    add(a, b) {
      return a + b;
    },
  
    subtract(a, b) {
      return a - b;
    },
  
    divide(a, b) {
      return a / b;
    },
  
    multiply(a, b) {
      return a * b;
    }
};

function caesarCipher(str, shift){
    const alphabetMap = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
    let result = "";
    

    for(let i = 0; i < str.length; i++){
        const char = str[i];
        const isUpper = char >= 'A' && char <= 'Z';

        const lowerChar = char.toLowerCase();       
        const indexChar = alphabetMap.indexOf(lowerChar);
        
        if(indexChar === -1){
            result += str[i];
            continue;
        }
        const cipherValue = (indexChar + shift) % 26; 
        const fixedCipher = cipherValue < 0 ? cipherValue + 26 : cipherValue;
        let shiftedValue = alphabetMap[fixedCipher];

        if(isUpper){
            shiftedValue = shiftedValue.toUpperCase();
        }
        result += shiftedValue;
    }

    return result;
}