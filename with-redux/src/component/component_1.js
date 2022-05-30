import React from "react";

class Component_1 extends React.Component{
    handler(){
        this.props.change_value_1(!this.props.value_1)
    }
    render(){
        return (
            <>  
                <p>{this.props.value_1}sss</p>
                <input type={'button'} onClick={this.handler.bind(this)}></input>
            </>
        )
    }
}
export default Component_1