import React from 'react'

import { useState } from 'react'

const TodoForm = () => {
    const[value,setValue] = useState ("");
    const[category,setCategory] = useState("");

    const handleSumit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        console.log(value, category);
        //adicionar todo
        //limpar os campos 
    };


  return <div className="todo-form">
    <h2>Criar Tarefa:</h2>
    <form onSubmit={handleSumit}>
        <input type="text" placeholder="Digite uma tarefa" onChange={(e) => setValue(e.target.value)} /> 
        <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button> 
    </form>
  </div>
}

export default TodoForm