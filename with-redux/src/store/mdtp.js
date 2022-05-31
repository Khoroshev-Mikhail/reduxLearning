import { bindActionCreators } from "redux";
import action_creator_1 from "./actionCreators/actionCreator_1";
import action_creator_2 from './actionCreators/actionCreator_2'
import action_creator_3 from './actionCreators/actionCreator_3'

function mapDispatchToProps(component){
    switch(component){
        case "Component_1" : return function(dispatch){
            return {
                change_value_1: bindActionCreators(action_creator_1, dispatch),
            }
        }
        case "Component_2" : return function(dispatch){
            return {
                change_value_2: bindActionCreators(action_creator_2, dispatch),
                change_value_3: bindActionCreators(action_creator_3, dispatch)
            }
        }
    }
}

export default mapDispatchToProps