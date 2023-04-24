export const TaskRow = ({ task, toggleTask }: any) => {
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
