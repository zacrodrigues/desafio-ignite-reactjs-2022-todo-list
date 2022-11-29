import { DeleteOutlined } from '@ant-design/icons';

import styles from './styles.module.css'

interface TaskProps {
  task: string;
  isCompleted: boolean;
  handleDeleteTask: (deleteTask: string) => void;
}

export function Task({ task, isCompleted, handleDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <p>{task}</p>
      <DeleteOutlined onClick={() => handleDeleteTask(task)} />
    </div>
  )
}