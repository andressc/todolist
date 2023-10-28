import React, {useState} from "react"
import "./App.css"
import {v1} from "uuid"
import {Filter} from "./ButtonFilter"
import {TaskType} from "./Task"
import {TodoList} from "./TodoList"

type TodoType = {
    id: string
    title: string
    filter: Filter,
}

function App(): JSX.Element {

    let todoList1: string = v1()
    let todoList2: string = v1()

    const [todoData, setTodoData] = useState<TodoType[]>([
        {
            id: todoList1,
            title: "todo 1",
            filter: "Active",
        },
        {
            id: todoList2,
            title: "todo 2",
            filter: "Completed",
        },
    ])

    const removeTodoList = (todoListId: string): void => {
        const todo: TodoType[] = todoData.filter(todo => todo.id !== todoListId)
        setTodoData(todo)

        delete tasks[todoListId]
        setTasks({...tasks})
    }

    let [tasks, setTasks] = useState({
        [todoList1]: [
            {id: v1(), title: "1HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false}
        ],
        [todoList2]: [
            {id: v1(), title: "book", isDone: false},
            {id: v1(), title: "milk", isDone: true},
        ]
    })

    const addTask = (title: string, todoListId: string): void => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks({
            ...tasks,
            [todoListId]: [...tasks[todoListId], newTask]
        })
    }

    const changeFilter = (filter: Filter, todoListId: string): void => {
        let todoList = todoData.find(todo => todo.id === todoListId)
        if (todoList) {
            todoList.filter = filter
            setTodoData([...todoData])
        }
    }

    const removeTask = (taskId: string, todoListId: string): void => {
        const nextState: TaskType[] = tasks[todoListId].filter(task => task.id !== taskId)

        setTasks({
            ...tasks,
            [todoListId]: [...tasks[todoListId] = nextState]
        })
    }


    const changeStatus = (taskId: string, isDone: boolean, todoListId: string): void => {
        let task: TaskType | undefined = tasks[todoListId].find(task => task.id === taskId)

        if (task) {
            task.isDone = isDone

            setTasks({
                ...tasks,
                [todoListId]: [...tasks[todoListId]]
            })
        }
    }

    const todoList: JSX.Element[] = todoData.map(todo => {

        let initialTask: TaskType[] = tasks[todo.id]

        if (todo.filter === "Active") {
            initialTask = initialTask.filter(v => !v.isDone)
        }

        if (todo.filter === "Completed") {
            initialTask = initialTask.filter(v => v.isDone)
        }

        return (
            <TodoList key={todo.id}
                      id={todo.id}
                      tasks={initialTask}
                      title={todo.title}
                      changeFilter={changeFilter}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={todo.filter}
                      removeTodoList={removeTodoList}
            />
        )
    })

    return (
        <div className="App">
            {todoList}
        </div>
    )
}

export default App
