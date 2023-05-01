import { TaskType } from "../App";
import { TaskRow } from "./TaskRow";

export type TaskTableType = {
  tasks: TaskType[],
  toggleTask: (task: TaskType) => void,
  showCompleted: boolean;
}

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }: TaskTableType) => {
  const taskTableRows = (doneValue: boolean) => {
    return tasks
      .filter((task: TaskType) => task.done === doneValue)
      .map((task: TaskType) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
