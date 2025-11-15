export { capitalize, reverseString};

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