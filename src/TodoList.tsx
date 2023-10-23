import React, {KeyboardEvent, ChangeEvent, useState} from "react"
import {Task} from "./Task"
import {ButtonFilter} from "./ButtonFilter"

type PropsType = {
    tasks: TaskType[]
    title: string
    changeFilter: (filter: Filter) => void
    removeTasks: (taskId: string) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type Filter = "All" | "Active" | "Completed"

export const TodoList: React.FC<PropsType> = ({tasks, title, changeFilter, removeTasks, addTask}): JSX.Element => {

    let [inputText, setInputText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => setInputText(e.currentTarget.value)
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickHandler()

    const onClickHandler = (): void => {
        if (inputText && inputText.length <= 15) {
            addTask(inputText)
            setInputText("")
        }
    }

    const titleText: boolean | JSX.Element = inputText.length > 15 && <p style={{color: "red"}}>Your title is too long!</p>

    const taskList: JSX.Element[] = tasks.map(task => <Task key={task.id} task={task} removeTasks={removeTasks}/>)

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={inputText} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                <button onClick={onClickHandler} disabled={!inputText || inputText.length > 15 && true}>+</button>
                {titleText}
            </div>
            <ul>
                {taskList}
            </ul>
            <div>
                <ButtonFilter changeFilter={changeFilter} filter="All"/>
                <ButtonFilter changeFilter={changeFilter} filter="Active"/>
                <ButtonFilter changeFilter={changeFilter} filter="Completed"/>
            </div>
        </div>
    )
}