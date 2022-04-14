import "./styles.css";
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import Month from "./Month";
import uuid from "uuidv4";

function Card() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  //Salvar na localStorage
  const LOCAL_STORAGE_KEY = "todoApp.todos";

  //Se houver conteúdo no local
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  //Setar no localStorage os valores de "todos" como uma string, e a key "TodoApp.todos"
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //Clicar no botão adicionar. Evitar que a página fique carregando quando add
  function handleClick(e) {
    e.preventDefault();
    const name = todoRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    todoRef.current.value = null;
  }

  //Clicar no checkbox
  function check(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  //Clicar para deletar
  function clickDelete(id) {
    setTodos((prevItems) => {
      return prevItems.filter((todo, index) => {
        return todo.id !== id;
      });
    });
  }

  return (
    <div className="card">
      <Month />
      <form className="input-group mb-3">
        <input
          className="form-control"
          ref={todoRef}
          type="text"
          placeholder="task..."
        />
        <button onClick={handleClick} className="btn btn-outline-secondary">
          Add
        </button>
      </form>
      <TodoList todos={todos} check={check} clickDelete={clickDelete} />
    </div>
  );
}

export default Card;

//Não pode retornar dois elementos no return. Para isso, retornar uma div e os elementos dentro
//Criar os componentes, e a estrutura dentro de cada componente
//Os dados inseridos no input serão guardados em variáveis na utilizando o useState hook, através do destructuring array
//imprimir cada um dos todos através do map
//Adicionar função de adicionar ao botão
//Utilizar o useRef pra mapear/guardar o que foi escrito no input
//Baixar pacote npm "uuid" pra gerar id aleatórias e atribuir a cada novo item da lista
//Utilizar o hook useEffect para guardar no localStorage. (Todas as vezes que o todos muda, chama o useEffect)
//Adicionar a função pra clicar na caixa de checkbox. Obs: No react, você nunca deve mudar diretamente o state. Deve criar uma cópia do que tem lá dentro, pra só então fazer alguma coisa
