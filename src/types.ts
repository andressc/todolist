export type Filter = "All" | "Active" | "Completed"

export type TodoType = {
    id: string
    title: string
    filter: Filter,
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}