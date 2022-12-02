import { ChangeEvent, useState } from 'react'

import { Header } from './components/Header'
import { Task } from './components/Task'

import { FaTasks } from 'react-icons/fa'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './App.module.css'

interface taskListProps {
  task: string;
  isCompleted: boolean;
}

export function App() {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState<taskListProps[]>([]);

  const taskListCompleted = taskList.filter(task => task.isCompleted === true);

  function handleTaskCreate(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setNewTask(inputValue);
  }

  function handleAddNewTaskToList() {
    setTaskList([...taskList, { task: newTask, isCompleted: false }])
    setNewTask('')
  }

  function handleDeleteTask(deleteTask: string) {
    const deletedTask = taskList.filter(task => task.task !== deleteTask)
    setTaskList(deletedTask);
  }

  function handleCheckTask(checkTask: string) {
    const copyTaskList = [...taskList]
    const taskIndex = copyTaskList.findIndex(task => task.task === checkTask);
    copyTaskList[taskIndex].isCompleted = !copyTaskList[taskIndex].isCompleted
    setTaskList(copyTaskList)
  }

  return (
    <>
      <Header />
      <main>
        <div className={styles.addTask}>
          <input
            type="text"
            value={newTask}
            placeholder='Adicione uma nova tarefa'
            onChange={handleTaskCreate}
          />
          <button onClick={handleAddNewTaskToList}>
            Criar
            <AiOutlinePlusCircle />
          </button>
        </div>
        <div className={styles.infos}>
          <div>
            Tarefas criadas <span>{taskList.length}</span>
          </div>
          <div className={styles.countCompletedTasks}>
            Concluídas <span>{taskListCompleted.length} de {taskList.length}</span>
          </div>
        </div>
        {taskList.length > 0
          ? (
            taskList.map(task => {
              return (
                <Task
                  key={task.task}
                  task={task.task}
                  isCompleted={task.isCompleted}
                  handleDeleteTask={handleDeleteTask}
                  handleCheckTask={handleCheckTask}
                />
              )
            })
          )
          : (
            <>
              <hr />
              <div className={styles.taskListEmpty}>
                <FaTasks />
                <h4>Você ainda não tem tarefas cadastradas</h4>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          )
        }
      </main>
    </>
  )
}
