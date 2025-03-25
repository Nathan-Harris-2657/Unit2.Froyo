// Prompt User to type flavors they ordered
const userInputFlavors = prompt(
    "please enter your froyo order with (,) inbetween each flavor"
)


// Take users input and truns it in to array then to Object
const froyoArray = userInputFlavors.split(",")


// A loop is used to iterate through the array of flavors.
   




// froyoArray to object 
// [vanilla,vanilla,cherry,coffee,coffee]
// return should be an object with flavors as keys and count of flavors as values
/**
 * 
 * {
 *  "vanilla": 2,
 *  "cherry": 1,
 * }
 */
const countFlavors = () =>{
    const obj = {} 
    for(let i = 0; i < froyoArray.length; i++){
        const flavor = froyoArray[i]
        //does my object have the flavor vanilla
        if(obj[flavor]){
            //obj["vanilla"] = obj["vanilla"] + 1;
            obj[flavor]++;
        }else {
            //obj["vanilla"] = 1
            obj[flavor] = 1;
        }
    }
    return obj
}



// creating object with the fuction "creatObject"
const froyoObj = countFlavors()



console.table(Object.keys(froyoObj), Object.values(froyoObj) )