import React, {ChangeEvent} from "react"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TaskPropsType = {
    task: TaskType
    removeTasks: (taskId: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
}

export const Task: React.FC<TaskPropsType> = ({task, removeTasks, changeStatus}): JSX.Element => {

    const onRemoveHandler = () => removeTasks(task.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(task.id, e.currentTarget.checked)

    return (
        <li key={task.id} className={task.isDone ? "is-done" : ""}>
            <input type="checkbox" checked={task.isDone} onChange={onChangeHandler}/>
            <span>{task.title}</span>
            <button onClick={onRemoveHandler}>X</button>
        </li>
    )
}