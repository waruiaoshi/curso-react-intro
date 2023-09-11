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

// custom hook, recibe el nombre del item donde guararemos localstorage y el valor inicial
function useLocalStorage(itemName, initialValue) {


  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    parsedItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify(initialValue));

  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  //función para guardar Items
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  //retorna el estado "item" y la función para actualizarlo y guardar en localstorage
  return [item, saveItem];

}




function App() {

  //agrego estados
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSerachValue] = React.useState('');
  //console.log(`Los usuarios buscan ${searchValue}`);


  // contabilizo los totales de las tareas y las completadas
  const totalTodos = todos.length;
  // "!!" convierte en boleano el resultado
  const completedTodos = todos.filter(todo => !!todo.completed).length;


  //Estados deribados para la búsqueda
  const searchedTodos = todos.filter(searched => (searched.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())));

  //console.log(searchedTodos);







  //función de tdos completados
  const completeTodo = (text) => {

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };


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
