

// const meherState  = {
//     counter: 0,
// }

// export function Reducer(state = meherState, action){
//     switch(action.type){
//         case 'ADD_COUNTER':
//         let sCounter = state.counter + action.payload;
//         return {...state , counter: sCounter}

//         case 'REMOVE_COUNTER':
//         let yCounter = state.counter - action.payload;
//         return {...state , counter: yCounter}
        
//         default : 
//         return state
//     }

// }



const initialState={
    addTodo:""
}
export function Reducer(state = initialState , action){
    switch(action.type){
        case 'ADD_TODO':
let newArr = state.addTodo;

newArr.push(action.payload)
          
            return {...state , addTodo:action.payload}
            
            default :

            return state
    }
}
