import { FaTrashAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa';

import styles from './styles.module.css'

interface TaskProps {
  task: string;
  isCompleted: boolean;
  handleDeleteTask: (deleteTask: string) => void;
}

export function Task({ task, isCompleted, handleDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <FaRegCircle className={styles.unchekedIcon} />
      <p>{task}</p>
      <FaTrashAlt className={styles.deleteIcon} onClick={() => handleDeleteTask(task)} />
    </div>
  )
}