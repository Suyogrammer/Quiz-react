import "../App.css";

function List({ option, quesNum, answers, savedAns }) {
  function clickHandler(id) {
    if (id == option[quesNum].correctAnswerID) {
      console.log("Correct");
      savedAns.concat(id);
      savedAns[quesNum] = 1;
    } else {
      savedAns[quesNum] = 0;
    }
  }

  return (
    <div>
      <ul>
        {answers.map((item) => (
          <li
            key={item.id}
            className="list"
            onClick={() => clickHandler(item.id)}
          >
            {item.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
