function mapStateToProps(component){
    switch(component){
        case "Component_1": {
            return function (state) {
                return {
                    value_1: state.value_1
                }
            }
        }
        case "Component_2" : {
            return function (state) {
                return {
                    value_2: state.value_2,
                    value_3: state.value_3
                }
            }
        }
    }
}
export default mapStateToProps