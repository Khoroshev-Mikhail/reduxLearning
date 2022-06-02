import { bindActionCreators } from "redux";
import action_creator_1 from "./action_creator_1";

export default function mapDispatchToProps(component){
    switch(component){
        case 'Component_1': return function(dispatch){
            return {
                change_value_1 : bindActionCreators(action_creator_1, dispatch)
            }
        }
        default: return undefined
    }
}