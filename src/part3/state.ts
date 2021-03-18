export type State<S, A> = (initialState: S) => [S, A];

export const bind = <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) : State<S, B> =>{
      const y= state(state.arguments[0])
    return f(y[1]) ;

}
