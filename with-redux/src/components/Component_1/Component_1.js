import React from "react";
import './Component_1.css'
import dirt from './images/dirt.png'
import mole from './images/mole.png'

export default class Component_1 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            idsMoles: [1,2,3,4,5,6],
            whoIsVisible: false,
            isFirstClick: true,
            score: 0,
            maxScore: 3,
        }
    }
    click(){
        clearTimeout(this.crawlOutMoleTimeout)  
        clearTimeout(this.moleHideTimeOut)   
        this.setState(({score}) => {
            if(this.state.isFirstClick){          
                if(score + 1 < this.state.maxScore){
                    this.crawlOutMole()
                } 
                return { 
                    whoIsVisible: false, 
                    isFirstClick: false, 
                    score: (score + 1), 
                }
            }
        })
    }
    crawlOutMole(){
        this.crawlOutMoleTimeout = setTimeout(()=>{
            this.setState(() => {
                return {isFirstClick: true, whoIsVisible : Math.round(Math.random() * 5 + 1)}
            })
            this.moleHide()
        }, Math.random() * 1000 + 1000)
    }
    moleHide(){
        this.moleHideTimeOut = setTimeout(()=>{
            this.setState(() => {
                return { whoIsVisible: false}
            })
            this.crawlOutMole()
        }, Math.random() * 1000 + 700)
    }
    componentDidMount(){
        if(this.state.score <= this.state.maxScore){
            this.crawlOutMole()
        }
    }
    render(){
        return (
            <>
            <div className="score">
                <h1>{this.state.score  === this.state.maxScore ? "Congrats! U are winner!" : `Score: ${this.state.score} / ${this.state.maxScore}`}</h1>
            </div>
            <div className="glade">
                {this.state.idsMoles.map(id => {
                    return (
                    <div className="pile" key={id} >
                        <img src={dirt} className={'dirt'}/>
                        <img src={mole} className={`mole ${this.state.whoIsVisible !== id ? 'hidden' : ''}`} onClick={this.click.bind(this)}/>
                    </div>
                    )
                })}
            </div>
            </>
        )
    }
}