import logo from './logo.svg';


import './App.css';
import Header from './components/Header';


function App() {

const name = "Austine Gwa"
  return (
    <div className="App">
     
     <Header />
      <h1>Hello from react </h1>
      <h3>Mr, {name}</h3>
     
    </div>
  )
}

export default App;




