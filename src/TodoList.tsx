import React from "react";
import {Task} from "./Task";

type PropsType = {
    tasks: TaskType[]
    title: string
    callback: (filter: Filter) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type Filter = "All" | "Active" | "Completed"

export const TodoList: React.FC<PropsType> = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(task => <Task task={task} />)
                }
            </ul>
            <div>
                <button onClick={() => props.callback("All")}>All</button>
                <button onClick={() => props.callback("Active")}>Active</button>
                <button onClick={() => props.callback("Completed")}>Completed</button>
            </div>
        </div>
    )
}