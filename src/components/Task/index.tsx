import { FaTrashAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa';

import styles from './styles.module.css'

interface TaskProps {
  task: string;
  isCompleted: boolean;
  handleDeleteTask: (taskToDelete: string) => void;
  handleCheckTask: (checkTask: string) => void;
}

export function Task({ task, isCompleted, handleDeleteTask, handleCheckTask }: TaskProps) {
  return (
    <div className={isCompleted ? `${styles.task}` : `${styles.task} ${styles.border}`}>
      {isCompleted
        ? <FaCheckCircle onClick={() => handleCheckTask(task)} className={styles.checkedIcon} />
        : <FaRegCircle onClick={() => handleCheckTask(task)} className={styles.uncheckedIcon} />
      }

      <p
        className={isCompleted ? styles.checkedTask : styles.uncheckedTask}
      >
        {task}
      </p>

      <FaTrashAlt
        className={styles.deleteIcon}
        onClick={() => handleDeleteTask(task)}
      />
    </div>
  )
}