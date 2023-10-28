import React, {KeyboardEvent, ChangeEvent, useState} from "react"
import {Task, TaskType} from "./Task"
import {ButtonFilter, Filter} from "./ButtonFilter"

type PropsType = {
    id: string
    tasks: TaskType[]
    title: string
    changeFilter: (filter: Filter, todoListId: string) => void
    removeTasks: (taskId: string, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
    filter: Filter
}

export const TodoList: React.FC<PropsType> = ({
                                                  id,
                                                  tasks,
                                                  title,
                                                  changeFilter,
                                                  removeTasks,
                                                  addTask,
                                                  changeStatus,
                                                  filter,
                                                  removeTodoList
                                              }): JSX.Element => {

    let [inputText, setInputText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => setInputText(e.currentTarget.value)
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") onClickHandler()
    }

    const onClickHandler = (): void => {

        if (!inputText.trim()) return
        if (inputText.trim().length > 15) return

        addTask(inputText.trim(), id)
        setInputText("")
    }

    const titleText: boolean | JSX.Element = inputText.length > 15 &&
        <p style={{color: "red"}}>Your title is too long!</p>

    const disabledButton: boolean = !inputText.trim() || inputText.trim().length > 15 && true

    const removeTaskHandler = (taskId: string) => {
        removeTasks(taskId, id)
    }

    const changeStatusHandler = (taskId: string, isDone: boolean) => {
        changeStatus(taskId, isDone, id)
    }

    const taskList: JSX.Element[] = tasks.map(task => <Task key={task.id}
                                                            task={task} removeTasks={removeTaskHandler}
                                                            changeStatus={changeStatusHandler}
    />)

    const changeFilterHandler = (filter: Filter) => {
        changeFilter(filter, id)
    }

    const removeTodoListHandler = () => {
        removeTodoList(id)
    }

    return (
        <div>
            <h3>{title}<button onClick={removeTodoListHandler}>X</button></h3>
            <div>
                <input value={inputText} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                <button onClick={onClickHandler} disabled={disabledButton}>+</button>
                {titleText}
            </div>
            <ul>
                {taskList}
            </ul>
            <div>
                <ButtonFilter changeFilter={changeFilterHandler} filter="All" filterState={filter}/>
                <ButtonFilter changeFilter={changeFilterHandler} filter="Active" filterState={filter}/>
                <ButtonFilter changeFilter={changeFilterHandler} filter="Completed" filterState={filter}/>
            </div>
        </div>
    )
}