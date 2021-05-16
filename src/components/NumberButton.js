import React, { Component } from 'react'

class NumberButton extends Component {
    state = {
        count: 0,
        inputField: "",
        neededChars: "",
        charsCount: "",
        authChars: ""
    }

    increaseNumber = () => {
        const newNumber = this.state.count + 1
        this.setState({
            count: newNumber
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            neededChars: this.state.count,
            inputField: ""
        })
    }

    authorizedChars = (e) => {
        const charsCount = e.target.value.length
        this.setState({
            inputField: e.target.value,
            charsCount: charsCount,
            authChars:
            // if
            this.state.neededChars - charsCount === 0
            // then
            ? this.state.inputField.length
            // else
            : ""
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.increaseNumber}>
                        Counter: {this.state.count}
                    </button>
                </form>
                <form>
                    <p>The word that you type can only have
                    <br />the number of characters (including spaces)
                    <br />as the number in the counter:</p>
                    <input
                        type="text"
                        value={this.state.inputField}
                        onChange={this.authorizedChars}
                        maxLength={this.state.authChars}
                        placeholder='Type your word here...'
                    />
                </form>
            </div>
        )
    }
}
// input field and when you try to type on it the word that you type can only have the number of characters as the count
// input field needs to be a controlled form

// By Tuesday May 18th

export default (NumberButton)