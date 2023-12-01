import React, {Component} from "react"

class App extends Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }
        this.clicktHandler = this.clicktHandler.bind(this);
    }
    
    clicktHandler(){
        this.setState(prevState => {
            return{
                number: prevState.number +1
            }
        })
    }


    render(){
        return(
            <div className="container">
                <h1>{this.state.number}</h1>
                <button onClick={this.clicktHandler} className="btn btn-primary">Click Me!</button>
            </div>
        )
    }
}

export default App