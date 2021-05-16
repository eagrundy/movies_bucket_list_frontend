import React, { Component } from 'react'

class NumberButton extends Component {
state = {
    count: 0
}

increaseNumber = () => {
    const newNumber = this.state.count + 1
    this.setState({
        count: newNumber
    })
}
    render() {
        return (
            <div>
                <button onClick={this.increaseNumber}> Counter: {this.state.count}</button>
            </div>
        )
    }
}

// input field and when you try to type on it the word that you type can only have the number of characters as the count
// input field needs to be a controlled form

// By Tuesday

export default(NumberButton)