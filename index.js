let newArray = [1,2,3,4,5,6,7] ;
for (const item of newArray){
    if(item<3){
        
        continue;
    }
    console.log(item);
}