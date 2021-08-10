function reverseString(s) {
    
    if(typeof s ==='number'){
        console.log("s.split is not a function");
        console.log(s);
    }
    if(typeof s ==='string'){
        const splitStrin = s.split("");
        const reverseStrin = splitStrin.reverse();
        const reverse = reverseStrin.join("");
        console.log(reverse);
    } 
}

//Note: To Reverse a string first split it and form a array. string.split(""); ** It indicates no gap
// Then reverse it reverse();
// Then join it .join("") **It indicates No Gap 