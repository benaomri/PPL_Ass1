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
