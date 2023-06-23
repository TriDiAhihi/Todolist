
import './App.css';
import Footer from './components/footer';
import Todo from './components/todo';

function App() {
  return (
    <div className='TodoModify'>
     <input type="text" placeholder="Enter your task here... " ></input>
    
      <Todo
       action="Clean up bedroom"
      />
       <Todo
       action="Buy some milk"
      />
       <Todo
       action="Joggin"
      />
       <Todo
       action="Learn React"
      />
       <Todo
       action="Doing Exercises"
      />
      <Footer />
    </div>
  
  );
}

export default App;
