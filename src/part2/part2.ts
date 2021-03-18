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
    let string = stringToArray(str),
      counter = 1,
      compString = string.reduce(function (
        accumulator,
        currentValue,
        currentIndex,
        array
      ) {

        if (currentValue === array[currentIndex + 1]) {
          //increment and move on
          counter++;
          return accumulator;
        } else {
          //save letter and number
          accumulator += (currentValue + counter);
          counter = 1;
          return accumulator;
        }

      }, "");
  return  compString;
}

/* Question 3 */
export const isPaired:(str:string) =>boolean = (str)=>{
    return true;

};
console.log(countVowels("hello"))
console.log(runLengthEncoding("AAaaaabbbccc"))
