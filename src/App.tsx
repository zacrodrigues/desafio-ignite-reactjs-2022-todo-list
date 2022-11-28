import { Header } from './components/Header'

import { PlusCircleOutlined } from '@ant-design/icons'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.addTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>
            Criar
            <PlusCircleOutlined />
          </button>
        </div>
      </main>
    </>
  )
}
