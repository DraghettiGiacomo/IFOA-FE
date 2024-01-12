import {Component, React} from 'react'

class ButtonClass extends Component {

    constructor(props){ /* creiamo il costruttore ed inizializziamo il nostro stato */
        super(props)
        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            }
        })
    }

    render(){
        return (
            <button onClick={this.incrementCount}>
                class count is {this.state.count}
            </button>
        )
    }
}

export default ButtonClass