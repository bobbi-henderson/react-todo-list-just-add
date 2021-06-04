//imports the usestate hook from the react module
import { useState } from 'react'
//imports the header component from the header file
import Header from "./components/Header";
//imports the list component from the list file
import List from "./components/List"
//imports the addtodo component from the addtodo file
import AddTodo from "./components/AddTodo"

//declares the app function
function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
