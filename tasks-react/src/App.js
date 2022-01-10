//import logo from './logo.svg';
import './App.css';

function Toast(props) {
  return <p>Eu sou o {props.message}</p>;
}

function App() {
  return (
    <div className="app">
      <Toast message="Toast 1"/>
      <Toast message="Toast 2"/>
      <Toast message="Toast 3"/>
      <Toast message="Toast 4"/>
      <Toast message="Toast 5"/>
      <p>Hello World</p>
    </div>
  );
}

export default App;
