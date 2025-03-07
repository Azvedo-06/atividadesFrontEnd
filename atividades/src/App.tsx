import './App.css'
import Contador from './trilha02/Contador';
import Saudacao from './trilha02/Saudacao';
import ToDolist from './trilha02/ToDolist';
import ToggleVisibilidade from './trilha02/ToggleVisibilidade';

function App() {

  return (
    <div>
      <h2>01 Contador</h2>
      <Contador valor={1} />
      <h2>02 Saudaçâo</h2>
      <Saudacao nameInicial='adm' />
      <h2>03 Lista de Tarefas</h2>
      <ToDolist />
      <h2>04 Controle de Visibilidade</h2>
      <ToggleVisibilidade textInicial='adm' />
    </div>
  )
}

export default App
