const s = "javascriptloops"; 
function vowelsAndConsonants(s) {
    for(const item of s){
        if(item==='a'||item==='e'||item==='i'||item==='o'||item==='u'){
            console.log(item)
        }
    }
    for(const item1 of s){
        if(item1!='a'&&item1!='e'&&item1!='i'&&item1!='o'&&item1!='u'){
            console.log(item1)
        }
    }
 }

 vowelsAndConsonants(s);

 //Note: We can use more for loop inside a function and 
 //each for loop will result in different out put like the function 
 // above. First for loop will display the vowels and second for loop 
 // will display the consonant in the given string. 