import React from "react";
import './Component_1.css'

export default class Component_1 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            whoIsVisible: 2,
        }
        this.arr = [1,2,3,4,5,6]
    }
    handler(e){
        const id = e.target.id
        console.log(id)
    }
    //Переделать с див на имг
    render(){
        return (
            <div className="glade">
                {this.arr.map(id => {
                    return (
                    <div className="pile">
                        <div id={id} key={id} className={`mole ${this.state.whoIsVisible !== id ? 'hidden' : ''}`} onClick={this.handler.bind(this)}></div>
                    </div>
                    )
                })}
            </div>
        )
    }
}