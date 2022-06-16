export default (state = {}, action) =>{
    switch(action.type){
        case 'createNumberCard':
            return {...state, createNumberCard: action.payload}
        default:
            return state;
    }
}