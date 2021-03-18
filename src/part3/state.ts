import { stat } from "node:fs";

export type State<S, A> = (initialState: S) => [S, A];

export const bind = <S,A,B>(state:State<S, A>,f:(x:A)=>State<S, B>) : State<S, B> => (initialState:S)=>{
    const [futureState,outcome] = state(initialState);
    const result : State<S, B> = f(outcome);
    return result(futureState)
}

