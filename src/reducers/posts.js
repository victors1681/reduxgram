// a reducers takes in tow things

//1. the action (info about what happened)
//2. copy of current state

function posts(state = [], action){
    
    switch(action.type){
        case 'INCREMENT_LIKES':
        console.log('incrementing likes');
        const i = action.index;

        console.log('WHO IS STATE', state);
    
        return [
            ...state.slice(0,i), //before the one we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.splice(i+1), //after the one we are updating
        ]

        default:
        return state;
    }
}

export default posts;