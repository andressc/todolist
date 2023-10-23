import {TaskType} from "./TodoList"
import React from "react"

type TaskPropsType = {
    task: TaskType
    removeTasks: (taskId: string) => void
}

export const Task: React.FC<TaskPropsType> = ({task, removeTasks}): JSX.Element => {
    return (
        <li key={task.id}><input type="checkbox" defaultChecked={task.isDone}/>
            <span>{task.title}</span>
            <button onClick={() => removeTasks(task.id)}>X</button>
        </li>
    )
}