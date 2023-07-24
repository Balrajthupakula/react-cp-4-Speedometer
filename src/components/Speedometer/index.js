// Write your code here

import {Component} from 'react'
import './index.css'



class Speedometer extends Component{
    state={
    count:0
}
    
    accelerateBtn=()=>{
        const {count}=this.state
        if(count<200){
            this.setState(prevState=>({count:prevState.count+10}))
        }       
    }
    brakeBtn=()=>{
        const {count}=this.state
        if(count>0){
            this.setState(prevState=>({count:prevState.count-10}))
        }
    }

    render(){
        const {count}=this.state
        return(
        <div className="container">
            <h1 className="heading">SPEEDOMETER</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png " alt="speedometer" className="image"/>
            <h2 className="speed-heading">Speed is {count}mph</h2>
            <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
            <div className="button-container">
                <button type="button" className="button button-accelerate" onClick={this.accelerateBtn}>Accelerate</button>
                <button type="button" className="button button-brake" onClick={this.brakeBtn}>Apply Brake</button>
            </div>
        </div>

        )
    }
}

export default Speedometer