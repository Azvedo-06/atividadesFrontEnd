import { useState } from "react";

type ToDo = {
  name: string;
  done: boolean;
};

const ToDolist = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [input, setInput] = useState<string>("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addToDo = () => {
    const newToDo: ToDo = {
      name: input,
      done: false,
    };

    setToDos([newToDo, ...toDos]);
    setInput("");
  };

  return (
    <div>
      <div>Todo list</div>
      <input placeholder="Tarefa: " value={input} onChange={onChangeInput} />
      <button onClick={addToDo}>Adicionar</button>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDolist;