import React from "react";
import './Component_1.css'

export default class Component_1 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            whoIsVisible: 2,
            countSuccefulClick: 0,
        }
        this.arr = [1,2,3,4,5,6]
    }
    handler(e){
        const id = e.target.id
        this.setState(() => {
            return { whoIsVisible: false}
        })
        this.setState(({countSuccefulClick}) => {
            return { countSuccefulClick: (countSuccefulClick + 1)    }
        })
        if(this.state.countSuccefulClick > 2){
            alert('Congrats, U are winner!')
        } else{
            this.crawlOutMole.bind(this)()
        }
    }
    crawlOutMole(){
        this.setState((state) => {
            return {whoIsVisible: false}
        })
        setTimeout(()=> {
            this.setState((whoIsVisible) => {
                return {whoIsVisible : Math.round(Math.random() * 5 + 1)}
            })
        }, (Math.random() * 1000 + 1000))
    }
    
    render(){
        if(this.state.whoIsVisible){
            setTimeout(this.crawlOutMole.bind(this), (Math.random() * 1000 + 2000))
        }
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