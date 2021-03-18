
import R = require("ramda");

import { Result, makeFailure, makeOk, bind, either,isOk, isFailure } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult =<T>(pred: (x: T) => boolean, a: T[]):Result<T> =>{
    try{
        const ans =findOrThrow(pred,a);
        return makeOk(ans);
    }
    catch (e){
        return makeFailure(e)

    } 
}  

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number>=> {
  const res=(findResult(((x:number) => {return x%2==0}),a))
  return bind(res,(x:number)=>{ return makeOk(x*x)})

}

export const returnSquaredIfFoundEven_v3 = (a: number[]): number|any => {
    
    const findResultNum = findResult((x:number) => {return x%2==0}, a)
    return either(findResultNum,() => 
    { if (isOk(findResultNum)) return findResultNum.value*findResultNum.value },()=>-1)
  


}
console.log(findResult((x:number) => {return x%2==0}, [1,2,4]));
console.log(returnSquaredIfFoundEven_v3([1,4,7]));
