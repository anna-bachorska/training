import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { TaskType } from "../App";

type CreateTaskType = {
  createTask: (task: string) => void;
}

export const TaskCreator = ({ createTask }: CreateTaskType) => {
  const [newTaskName, setNewTaskName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { ///czy tutaj jest dobrze bo tak znalazlam w google??
    e.preventDefault();
    createTask(newTaskName);
    console.log(newTaskName)
    localStorage.setItem("tasks", newTaskName as string);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
          <input
              type="text"
              value={newTaskName as string}
              placeholder="Enter a new task"
              onChange={(e) => setNewTaskName(e.target.value)}
              className='form-control'
          />
      </div>
      <button className='btn btn-primary btn-sm col-3'>
        <FontAwesomeIcon icon={faPlus} /> Save task
      </button>
    </form>
  );
};
