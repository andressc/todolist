import React, {useState} from 'react';
import './App.css';
import {Filter, TaskType, TodoList} from "./TodoList";
import {v1} from "uuid"

function App(): JSX.Element {

    // const tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false }
    // ]
    // const tasks2 =  [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]

    let [tasks, setTasks] = useState<TaskType[]>([
        { id: v1(), title: "1HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState<Filter>("All")

    let initialTask: TaskType[] = tasks

    if(filter === "Active") {
        initialTask = initialTask.filter(v => v.isDone)
    }

    if(filter === "Completed") {
        initialTask = initialTask.filter(v => !v.isDone)
    }

    const addTask = (title: string): void => {
        const newTask: TaskType = { id: v1(), title: title, isDone: false }
        setTasks([...tasks, newTask])
    }

    const changeFilter = (filter: Filter): void => {
        setFilter(filter)
    }

    const removeTasks = (taskId: string): void => {
        const nextState: TaskType[] = tasks.filter(task => task.id !== taskId)
        setTasks(nextState)
    }

    return (
        <div className="App">
            <TodoList tasks={initialTask}
                      title={"ToDo List"}
                      changeFilter={changeFilter}
                      removeTasks={removeTasks}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
