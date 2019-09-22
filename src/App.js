import React, {useState} from 'react';
import './App.css';
function App(props) {
  const idquestions = props.questions.map((question, index) => {
    return {...question, id: index};
  });
  const [state, setState] = useState({
    hidden: [],
  });
  return (
    <div className="App">
      {idquestions
        .filter((question, index) => !state.hidden.includes(index))
        .map((question, index) => {
          return (
            <Question
              number={question.id}
              key={index}
              name={question.question}
              choices={question.choices}
              image={question.image}
              onDivClick={key => setState({hidden: [...state.hidden, key]})}
            />
          );
        })}
    </div>
  );
}
const Question = props => {
  return (
    <div
      onClick={props.onDivClick.bind(this, props.number)}
      className="question">
      <h2>{props.number + '.  ' + props.name}</h2>
      {props.image && (
        <img
          alt={props.image}
          className="questionImage"
          src={'http://www2.snca.lu/scripts/lusitStpd/' + props.image}
        />
      )}

      {props.choices.map((choice, index) => {
        let className = 'choice';
        if (choice.substring(0, 1) === '1') {
          className += ' correctChoice';
        }
        return (
          <h3 key={index} className={className}>
            {choice.substring(2)}
          </h3>
        );
      })}
    </div>
  );
};
export default App;
