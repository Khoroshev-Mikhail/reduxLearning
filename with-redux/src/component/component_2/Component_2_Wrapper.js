import mapStateToProps from "../../store/mstp.js"
import mapDispatchToProps from "../../store/mdtp.js"
import { connect } from "react-redux"
import Component_2 from './Component_2'

const Component_2_Wrapper = connect(mapStateToProps('Component_2'), mapDispatchToProps('Component_2'))(Component_2)
export default Component_2_Wrapper