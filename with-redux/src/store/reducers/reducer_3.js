import initialState from "../initialState";
import ACTION_3 from "../actions/action_3";

function value_3(state = initialState.value_3, action){
    switch (action.type){
        case ACTION_3: return action.value_3
        default: return state
    }
}

export default value_3