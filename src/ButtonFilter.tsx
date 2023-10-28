import React from "react"

export type Filter = "All" | "Active" | "Completed"

type ButtonFilterPropsType = {
    filter: Filter
    filterState: Filter
    changeFilter: (filter: Filter) => void
}

export const ButtonFilter: React.FC<ButtonFilterPropsType> = ({filter, changeFilter, filterState}): JSX.Element => {
    const onFilterHandler = (): void => {
        changeFilter(filter)
    }

    return (
        <button onClick={onFilterHandler} className={filterState === filter ? "button-active" : ""}>{filter}</button>
    )
}