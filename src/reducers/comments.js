
function postCommets(state=[], action)
{
    switch (action.type){
        case 'ADD_COMMENT':
            return[
                ...state,{
                user: action.author,
                text: action.comment
                }
            ];

        case 'REMOVE_COMMENT':
            console.log("removin a comment", action.postId, action.i);

            return [
                //from the start to the one we want to delete
                ...state.slice(0,action.i),
                //skip the comment we want to delete and add others
                ...state.slice(action.i + 1)

            ]

        default:
            return state;
    }
    return state;
}
function comments(state = [], action){

    if(typeof action.postId !== 'undefined'){
        return {
            //take the current state
            ...state,
            //overwrite the comment with a ne one ERN_SDININ: ["TEST", "COOl"]
            [action.postId]: postCommets(state[action.postId], action)  //<-- reducer composition

        }
    }

    return state;
}

export default comments;