import React, {ChangeEvent, DetailedHTMLProps, LiHTMLAttributes} from "react"
import {TaskType} from "../../types"
import styles from "./Task.module.css"

interface PropsType extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    task: TaskType
    removeTasks: (taskId: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
}

export const Task: React.FC<PropsType> = ({task, removeTasks, changeStatus, ...restProps}): JSX.Element => {

    const onRemoveHandler = () => removeTasks(task.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeStatus(task.id, e.currentTarget.checked)

    return (
        <li key={task.id} className={`${styles.task} ${task.isDone ? "is-done" : ""}`} {...restProps}>
            <input type="checkbox" checked={task.isDone} onChange={onChangeHandler}/>
            <span>{task.title}</span>
            <button onClick={onRemoveHandler}>X</button>
        </li>
    )
}