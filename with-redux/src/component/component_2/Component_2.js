import React from "react";

class Component_2 extends React.Component{
    handler(){
        this.props.change_value_2(!this.props.value_2)
    }
    handler3(){
        this.props.change_value_3(!this.props.value_3)
    }
    render(){
        return(
            <>
                <p>{this.props.value_2 ? 'On' : 'Off'}</p>
                <input type={'button'} onClick={this.handler.bind(this)} value="button"></input>
                <p>{this.props.value_3 ? 'On' : 'Off'}</p>
                <input type={'button'} onClick={this.handler3.bind(this)} value="button"></input>
            </>
        )
    }
}

export default Component_2