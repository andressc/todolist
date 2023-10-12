import React, {useState} from 'react';
import './App.css';
import {Filter, TaskType, TodoList} from "./TodoList";

function App() {

    // const tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false }
    // ]
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]

    let [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState<Filter>("All")

    let initialTask = tasks

    if(filter === "Active") {
        initialTask = initialTask.filter(v => v.isDone)
    }

    if(filter === "Completed") {
        initialTask = initialTask.filter(v => !v.isDone)
    }

    const changeFilter = (filter: Filter) => {
        setFilter(filter)
    }

    return (
        <div className="App">
            <TodoList tasks={initialTask} title={"2131"} callback={changeFilter}/>
            <TodoList tasks={initialTask} title={"2131"} callback={changeFilter}/>
        </div>
    );
}

export default App;
