import { connect } from "react-redux";
import Component_1 from "./Component_1";
import mapDispatchToProps from "../../store/mdtp";
import mapStateToProps from "../../store/mstp";

const Component_1_Wrapper = connect(mapStateToProps('Component_1'), mapDispatchToProps("Component_1"))(Component_1)
export default Component_1_Wrapper