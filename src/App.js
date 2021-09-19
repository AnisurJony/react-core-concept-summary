import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComment></LoadComment>
    </div>
  );
}

function LoadComment() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h3>Load Comment</h3>
      {comments.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)}
    </div>
  )
}

function Comment(props) {
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <h4>{props.tilte}</h4>
      <p>{props.body}</p>
    </div>
  )
}
function Counter(props) {
  const [count, setCount] = useState(0);
  const handlerIncrease = () => setCount(count + 1);
  const handlerDecrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
    </div>
  )
}



export default App;
