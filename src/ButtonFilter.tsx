import {Filter} from "./TodoList"
import React, {MouseEvent} from "react"

type ButtonFilterPropsType = {
    filter: Filter
    changeFilter: (filter: Filter) => void
}

export const ButtonFilter: React.FC<ButtonFilterPropsType> = ({filter, changeFilter}) => {
    const onFilterHandler = (e: MouseEvent<HTMLButtonElement>) => {
        changeFilter(e.currentTarget.getAttribute('data-name') as Filter)
    }

    return (
        <button onClick={onFilterHandler} data-name={filter}>{filter}</button>
    )
}