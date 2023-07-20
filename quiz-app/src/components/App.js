import { useEffect, useReducer, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import Start from "./Start";
import Options from "./Options";
import ProgressBar from "./ProgressBar";

const initialState = {
  questions: [],
  status: "loading",
  name: "",
  index: 0,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "success":
      return {
        ...state,
        questions: action.payload,
        status: "success",
      };
    case "fail":
      return {
        ...state,
        questions: [],
        status: "error",
      };
    case "ready":
      return {
        ...state,
        status: "ready",
        name: action.payload,
      };
    case "correct":
      return {
        ...state,
        index: action.payload,
        score: state.score + 1,
      };
    case "incorrect":
      return {
        ...state,
        index: action.payload,
      };
    case "complete":
      return {
        ...state,
        status: "complete",
      };

    default:
      throw new Error("api call was not successful");
  }
}

function App() {
  const [{ questions, status, index, name, score }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [color, setColor] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/questions").then((res) => {
      res
        .json()
        .then((data) => dispatch({ type: "success", payload: data }))
        .catch((err) => dispatch({ type: "fail" }));
    });
  }, []);

  function handleAnswer(idx, correct) {
    setColor(`bg-gradient-to-r from-green-400 via-green-500 to-green-600`);
    setTimeout(() => {
      setColor("");
      if (idx + 1 === correct) {
        dispatch({
          type: "correct",
          payload: index < questions.length ? index + 1 : 0,
        });
      } else {
        dispatch({
          type: "incorrect",
          payload: index < questions.length ? index + 1 : 0,
        });
      }
      if (index + 1 === questions.length) {
        dispatch({ type: "complete" });
      }
     
    }, 2000);
    
  }

  return (
    <section className="App-header grid grid-cols-2 gap-8">
      <div className="">
        <img
          className="object-cover h-screen"
          src="/woman.jpg"
          alt="woman on her laptop"
        ></img>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/hand-drawn-essay-illustration_39879148.htm#query=woman%20computer&position=3&from_view=keyword&track=ais">
          Freepik
        </a>
      </div>
      <div className="">
        {status === "loading" && <Loading />}
        {status === "success" && (
          <Start
            count={questions.length}
            submit={(e) => {
              e.preventDefault();
              dispatch({ type: "ready", payload: e.target[0].value });
            }}
          />
        )}
        {status === "ready" && (
          <>
            <div>
              <ProgressBar index={index+1} len={questions.length}/>
              <Card
                customClass="text-black quiz-section card-bg text-2xl mb-8 font-bold"
                question={questions[index].question}
              />
              {questions[index].options.map((op, i) => (
                <Options
                  className={questions[index].correctAnswer === i + 1 && color}
                  answer={op}
                  onClick={() =>
                    handleAnswer(i, questions[index].correctAnswer)
                  }
                />
              ))}
            </div>
          </>
        )}

        {status === "complete" && (
          <Card customClass="start-section result text-2xl text-white" question={`Hi ${name}, you got ${score} out of ${questions.length} correct!`} />
        )}
      </div>
    </section>
  );
}

export default App;
