import React from 'react';
import Radiobutton from './components/Radiobutton';
import { Context } from './context/context';
import './style.scss';

function App() {
  const { questions } = React.useContext(Context);
  const [count, setCount] = React.useState(0);
  const [currentId, setCurrentId] = React.useState('p1');
  const [currentAnswer, setCurrentAnswer] = React.useState('');
  const [textButton, setTextButton] = React.useState('Próxima');
  const [isQuizFinished, setIsQuizFinished] = React.useState(false);

  const handleNextQuestion = () => {
    const currentNumber = parseInt(currentId.replace('p', ''));

    if (currentNumber === 3) {
      setTextButton('Finalizar!');
    }

    if (currentNumber === 4) {
      setIsQuizFinished(true);
    } else {
      setCurrentId(`p${currentNumber + 1}`);
    }

    if (questions[currentNumber - 1].answer === currentAnswer) {
      console.log(
        count + 1,
        questions[currentNumber - 1].answer,
        currentAnswer
      );
      setCount(count + 1);
    }
  };

  const handleAnswerAgain = () => {
    setCurrentId('p1');
    setIsQuizFinished(false);
    setCurrentAnswer(null);
    setCount(0);
    setTextButton('Próxima');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setCurrentAnswer(value);
  };

  React.useEffect(() => {
    handleAnswerAgain();
  }, []);

  return (
    <div className="content">
      <h1>[ 👩🏻‍💻 Quiz - React ]</h1>
      {isQuizFinished ? (
        <>
          <p>Quiz finalizado! 🎉</p>
          <p>Você acertou {count} de 4!</p>
        </>
      ) : (
        questions.map((question, index) => {
          if (currentId == question.id) {
            return (
              <div className="questions" key={question.id}>
                <h1>{question.question}</h1>
                {question.options.map((option) => (
                  <div key={index + option} className="question">
                    <Radiobutton
                      option={option}
                      setOption={setCurrentAnswer}
                      selectedOption={currentAnswer}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            );
          }
        })
      )}
      {!isQuizFinished ? (
        <button onClick={handleNextQuestion}>{textButton}</button>
      ) : (
        <button onClick={handleAnswerAgain}>Responder novamente</button>
      )}
    </div>
  );
}

export default App;
