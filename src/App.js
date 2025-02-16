import logo from './logo.svg';
import './App.css';

let name = "Shravan7";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="Container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Distinctio aperiam assumenda
        sequi praesentium officia error suscipit, autem 
        blanditiis dolorem dignissimos laboriosam. Explicabo, 
        nostrum iusto! Laborum voluptates quibusdam vero nesciunt? Quas.</p>
    </div>
    </>
  );
}

export default App;
