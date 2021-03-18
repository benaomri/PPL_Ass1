import { State, bind } from "./state";
import * as R from "ramda";

export type Stack = number[];

export const push = (x:number) :State<Stack,undefined>  => {
    return (s:Stack) : [Stack,undefined]=>{ 
        return [R.insertAll(0,[x],s),undefined]
    }
}
    

export const pop = (s:Stack) :[Stack,number] =>  {
    return [s.slice(1,s.length),s[0]]
}
export const stackManip =(s:Stack) :[Stack,undefined]=> {
    
    const newState : [Stack,number] = bind((stack :Stack)=>[stack,undefined],()=>()=>pop(s))(s)
    const afterpush1 : [Stack,undefined] = bind((stack:Stack)=>[stack,newState[1]*newState[1]],push)(newState[0])
    const afterPop : [Stack,number] = bind((stack :Stack)=>[stack,undefined],()=>()=>pop(afterpush1[0]))(afterpush1[0])
    const afterpush2 : [Stack,undefined] = bind((stack:Stack)=>[stack,newState[1]+afterPop[1]],push)(afterPop[0])
    return afterpush2;
}

console.log(stackManip([30, 10, 5]))
