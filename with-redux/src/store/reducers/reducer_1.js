import initialState from "../initialState";
import ACTION_1 from '../actions/action_1'

function value_1(state = initialState.value_1, action){
    switch (action.type){
        case ACTION_1: return action.value_1
        default: return state
    }
}

export default value_1