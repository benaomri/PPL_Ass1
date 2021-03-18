import * as R from "ramda";

const stringToArray = R.split("");


/* Question 1 */
export const countVowels=R.pipe(
    (str:string) =>stringToArray(str),
    (array:string[])=>array.filter((t)=>{
       if('aeiouAEIOU'.includes(t)) return  true;
       return false;}),
    (array :string[])=>array.length
) 



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
    return true;

};
console.log(countVowels("hEllo"))
console.log(runLengthEncoding("AAaaaabbbccc"))
