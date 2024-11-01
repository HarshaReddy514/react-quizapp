import React, { Component } from 'react';
import { fetchQuestions } from '../service/QuizService';

class Quiz extends Component {
    state = {
        selectedValue: 'java',
    };


    setSelectedValue = (newValue) => {
        this.setState({ selectedValue: newValue });
    };

    handleStartTest = async () => {
        console.log('Selected value:', this.state.selectedValue); // Pass this to your function
        const response = await fetchQuestions(this.state.selectedValue);
        this.props.setQuestions(response);
        console.log(this.state.questions);
    };

    handleChange = (event) => {
        this.setSelectedValue(event.target.value);
    };

    render() {
        return (
            <div>
                <select value={this.state.selectedValue} onChange={this.handleChange}>
                    <option value="Java">Java</option>
                    <option value="Spring Boot">Spring Boot</option>
                    <option value="Microservices">Microservices</option>
                </select>
                <br></br>
                <br></br>
                <button onClick={this.handleStartTest}>Start Test</button>
            </div>
        )
    }
}

export default Quiz;