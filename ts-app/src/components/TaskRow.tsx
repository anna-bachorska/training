import { TaskType } from "../App";

type TaskRowType = {
  task: TaskType;
  toggleTask: (task : TaskType) => void; 
}

export const TaskRow = ({ task, toggleTask }: TaskRowType) => {
  return (
    <tr>
      <td className='d-flex justify-content-between'>
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task);
          }}
        />
      </td>
    </tr>
  );
};
