export default function mapStateToProps(component){
    switch(component){
        case 'Component_1' : return function(state){
            return {
                value_1: state.value_1,
            }
        }
    }
}