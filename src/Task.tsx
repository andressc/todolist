import {TaskType} from "./TodoList";
import React from "react";

type TaskPropsType = {
    task: TaskType
}

export const Task: React.FC<TaskPropsType> = (props: TaskPropsType) =>  {
    return (
        <li key={props.task.id}><input type="checkbox" checked={props.task.isDone}/>
            <span>{props.task.title}</span>
        </li>
    )
}