import React from "react";
import './Component_1.css'
import Mole from "./Mole";

const molesAmount = 2;
const maxScore = 3;

export default class Component_1 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            whoIsVisible: false,
            score: 0,
        }
        this.click = this.click.bind(this)
    }
    click(){  
        clearTimeout(this.crawlOutMoleTimeout)  
        this.setState(({score}) => {
            return { 
                whoIsVisible: false, 
                isFirstClick: false, 
                score: (score + 1), 
            }
        })
    }
    crawlOutMole(){
        this.crawlOutMoleTimeout = setTimeout(()=>{
            this.setState({
                isFirstClick: true,
                whoIsVisible : Math.floor(Math.random() * molesAmount)
            })
            this.crawlOutMole()
        }, Math.random() * 1000 + 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState.score, this.state.score,  maxScore)
        if (this.state.score !== prevState.score) {
            if(this.state.score < maxScore){
                this.crawlOutMole()
            } 
        }
    }
    componentDidMount(){
        this.crawlOutMole()
    }
    render(){
        return ( 
            <>
            <h1 className="score">{this.state.score  === maxScore ? "Congrats! U are winner!" : `Score: ${this.state.score} / ${maxScore}`}</h1>
            <div className="glade">
                {Array(molesAmount).fill().map((_, id) => (
                    <Mole 
                        id={id}
                        key={id} 
                        click={this.click} 
                        isVisible={this.state.whoIsVisible === id}
                    />
                ))}
            </div>
            </>
        )
    }
}