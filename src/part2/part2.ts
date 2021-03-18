import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (str:string) =>number = (str) => {
  
    const len= (stringToArray(str).filter((t:string) => 
            {if ('aeiou'.includes(t)) return true; })).length;
            console.log("len",len)
            if (len)  return len;
            return 0;
    
}

/* Question 2 */
export const runLengthEncoding: (str:string) => string = (str) => {
    const string = stringToArray(str),
      counter = [1],
      compString = string.reduce(function (
        accumulator,
        currentValue,
        currentIndex,
        array
      ) {

        if (currentValue === array[currentIndex + 1]) {
          //increment and move on
          counter[0]++;
        //   counter=counter+1;
          return accumulator;
        } else {
          //save letter and number
          accumulator += (currentValue + counter);
          counter[0]=1;
        //   counter = 1;
          return accumulator;
        }

      }, "");
  return  compString;
}

/* Question 3 */
export const isPaired:(str:string) =>boolean = (str)=>{
    //filter to stay with array with only parenthesis
    const soger=stringToArray(str).filter((t:string) => {if ('(){}[]'.includes(t)) return true; });
    if(soger.length %2 !==0)//check if is odd number of  parenthesis 
        return false;
    if((soger[0]===')')||(soger[0]==='}')||(soger[0]===']'))//check if the firsr parenthes is a closser
        return false;

    
    return !soger.reduce((uptoPrevChar, thisChar,currentIndex) => {
        
        if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
            return ++uptoPrevChar;
        }
           //check that the condition is mathematical right, if not ptoPrevChar=Number.MIN_SAFE_INTEGER
             if ((thisChar === ')')&&(soger[currentIndex-1] ==='{'||soger[currentIndex-1] ==='[') ||
                  (thisChar === '}')&&(soger[currentIndex-1] ==='('||soger[currentIndex-1] ==='[') ||
                  (thisChar === ']')&&(soger[currentIndex-1] ==='{'||soger[currentIndex-1] ==='(') ){
                      
                    return uptoPrevChar=Number.MIN_SAFE_INTEGER;
                  }
        else{
           
              return --uptoPrevChar;
        }
    }, 0);
}

console.log(countVowels("hello"))
console.log(runLengthEncoding("AAaaaabbbccc"))
console.log(isPaired("((abc))()[]{]"))
