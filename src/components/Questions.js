import React, { Component } from 'react';
import { submitTest } from '../service/QuizService';

class Questions extends Component {
    state = {
        selectedOptions: {},
        score : 0,
        showQuestions : true
    };

    handleOptionSelect = (questionId, option) => {
        // Update selected option for a question
        this.setState((prevState) => ({
          selectedOptions: {
            ...prevState.selectedOptions,
            [questionId]: option
          }
        }));
    };

    handleSubmitTest = async (answers) => {

        const answersReq = Object.entries(answers).map(([key, value]) => ({
            id: parseInt(key), // Convert the key to an integer
            response: value
          }));

        const response = await submitTest(answersReq);
        this.setState({ score: response, showQuestions : false });
        console.log(this.state.score);
    };

    render() {
        return (
            <div>
                <h2>Score : {this.state.score}</h2>
                <h1>Questions</h1>
                {this.props.questions.map((question) => (
                    <div key={question.id} style={{ marginBottom: '20px' }}>
                    <h3>{question.questionTitle}</h3>
                    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                      {['option1', 'option2', 'option3', 'option4'].map((opt) => (
                        <button
                          key={opt}
                          style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor:
                              this.state.selectedOptions[question.id] === question[opt]
                                ? '#007BFF'
                                : '#f9f9f9',
                            color:
                              this.state.selectedOptions[question.id] === question[opt]
                                ? '#fff'
                                : '#000',
                            cursor: 'pointer'
                          }}
                          onClick={() => this.handleOptionSelect(question.id, question[opt])}
                        >
                          {question[opt]}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={() => this.handleSubmitTest(this.state.selectedOptions)}>Submit Test</button>
            </div>
        );
    }
}

export default Questions;