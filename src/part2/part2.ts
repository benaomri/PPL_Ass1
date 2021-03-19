import * as R from "ramda";

const stringToArray = R.split("");


/* Question 1 */
export const countVowels=R.pipe(
    (str:string) =>stringToArray(str),
     R.filter((t:string)=>{
        return 'aeiouAEIOU'.includes(t)}),
     R.length); 



/* Question 2 */
export const runLengthEncoding =R.pipe(
      (str:string)=>stringToArray(str),
      R.groupWith(R.equals),
      R.map((str)=>(str.length>=2) ? [str[0],str.length] : str[0]),
      R.join(""),
      (str:string)=>stringToArray(str),
      R.filter(str=>str!=","),
      R.join("")
      );

/* Question 3 */
export const isPaired:(str:string) =>boolean = (str)=>{
    return true;

};
console.log(countVowels("hEllo"))
console.log(runLengthEncoding("AAaaaabbbccc"))
