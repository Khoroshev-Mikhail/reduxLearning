import React from "react";
import dirt from './images/dirt.png'
import mole from './images/mole.png'

export default class Mole extends React.Component{
    constructor(props){
        super(props)
        this.isClicked = false
    }

    isFirstClick = () => {
        if(this.isClicked){
            return;
        }
        this.props.click()
        this.isClicked = true
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isVisible !== nextProps.isVisible;
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate", this.props.id);
        if(!this.props.isVisible){
            console.log("!isVisible")
          this.isClicked = false
        }   
    }
    render(){
        console.log("render", this.props.id);


        // classnames
        return(
            <div className="pile">
                <img src={dirt} className={'dirt'}/>
                <img src={mole} className={`mole ${!this.props.isVisible && 'hidden'}`} onClick={this.isFirstClick}/>
            </div>
        )
    }
}