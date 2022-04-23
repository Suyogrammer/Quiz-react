import logo from "./logo.svg";
import "./App.css";
import multipleChoice from "./api/multipleChoice.json";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [option, setOption] = useState(multipleChoice.options);
  const [quesNum, setQuesNum] = useState(0);
  const [savedAns, setSavedAns] = useState([]);
  const [showList, setShowList] = useState(true);

  let score = 0;

  console.log(savedAns, "savedAns");

  let answers = multipleChoice.options[quesNum].answers;

  function handleNext() {
    if (quesNum < option.length - 1) {
      setQuesNum((prevNum) => prevNum + 1);
    } else {
      for (let i in savedAns) {
        if (savedAns[i] == 1) {
          score++;
        }
      }
      console.log(score, "score");
      setShowList(!showList);
    }
  }

  function handlePrev() {
    if (quesNum != 0) {
      setQuesNum((prevNum) => prevNum - 1);
      // setSavedAns(savedAns.concat());
    }
  }

  return (
    <div className="App">
      <h1 className="title">Welcome</h1>
      <h2 className="topic">
        {quesNum + 1} of {option.length}
      </h2>
      <h3 className="topic">{option[quesNum].question}</h3>
      <h3 className="topic">{option[quesNum].subQuestion}</h3>
      <div>
        {showList ? (
          <List
            option={option}
            quesNum={quesNum}
            answers={answers}
            savedAns={savedAns}
          />
        ) : (
          `Your Score : ${score} of ${option.length}`
        )}
      </div>
      <button className="btn" onClick={() => handlePrev()}>
        Previous
      </button>
      <button className="btn" onClick={() => handleNext()}>
        Next
      </button>{" "}
    </div>
  );
}

export default App;
