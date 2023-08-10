import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from 'react';


// const defaultTodos = [
//   { text: 'Terminar curso de Drupal', completed: true },
//   { text: 'Terminar curso de React', completed: false },
//   { text: 'Buscar mentoría para desarrollo móvil', completed: false },
//   { text: 'Inscribirme a diplomado fullstack', completed: false },
//   { text: 'Trabajar con reactstates', completed: true },
// ];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    parsedTodos = [];
    localStorage.setItem('TODOS_V1', JSON.stringify(parsedTodos));

  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //agrego estados
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSerachValue] = React.useState('');
  //console.log(`Los usuarios buscan ${searchValue}`);


  // contabilizo los totales de las tareas y las completadas
  const totalTodos = parsedTodos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  //Estados deribados para la búsqueda
  const searchedTodos = todos.filter(searched => (searched.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())));

  //console.log(searchedTodos);


  //función para guardar TODOs
  const saveTodos = (newTodos) => {

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };



  //función de tdos completados
  const completeTodo = (text) => {

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  //función para eliminar las tareas
  // const deleteTodo = (text) => {

  //   const newTodos = [...todos];

  //   const todoIndex = newTodos.findIndex(
  //     (todo) => todo.text == text
  //   );
  //   newTodos.splice(todoIndex, 1);

  //   console.log(newTodos);
  //   setTodos(newTodos);
  // };


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };





  return (
    // <div className="App">
    <React.Fragment>
      <div className='wrapper'>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSerachValue={setSerachValue} />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              //para pasar parámetros hay que colocar la función dentro del arrow function.
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>

        <CreateTodoButton />

      </div>
    </React.Fragment >
  );
}





export default App;
