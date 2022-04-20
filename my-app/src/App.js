import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";


function App() {
  const [text,setText] = useState("<DEFAULT TEXT>")
  // Show you can get stuff from the server
  useEffect(()=>{
    const response = fetch("http://localhost:5000/hello",{
      method:"GET",
      mode: "cors",
      headers: {
        'Content-Type': "application/json"
      },
    }).then(data =>{
      return data.json()
    }).then(data => {
      const {msg} = data
      setText(msg)
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
