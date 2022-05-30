import { connect } from "react-redux";
import Component_1 from './component_1'
import mapStateToProps from "../store/mstp"
import mapDispatchToProps from "../store/mdtp";

const Component_1_Wrapper = connect(mapStateToProps('Component_1'), mapDispatchToProps('Component_1'))(Component_1)
export default Component_1_Wrapper

