import { State, bind } from "./state";

export type Queue = number[];

export const enqueue = (x:number) :State<Queue,undefined>  => {
    return (q:Queue) : [Queue,undefined]=>{ 
        q[q.length]=x 
        return [q,undefined];}
}

export const dequeue = (q:Queue) :[Queue,number] =>  {
    return [q.slice(1,q.length),q[0]]
}
export const queueManip=(q:Queue) :[Queue,number]=> {
    
    const newState : [Queue,number] = bind((queue :Queue)=>[queue,undefined],()=>()=>dequeue(q))(q)
    const afterEnq1 : [Queue,undefined] = bind((queue:Queue)=>[queue,newState[1]*2],enqueue)(newState[0])
    const afterEnq2 : [Queue,undefined] = bind((queue:Queue)=>[queue,newState[1]/3],enqueue)(afterEnq1[0])
    const afterDeq : [Queue,number] = bind((queue :Queue)=>[queue,undefined],()=>()=>dequeue(afterEnq2[0]))(afterEnq2[0])
    return afterDeq;

}
