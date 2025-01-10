export interface todo {
    id:number,
    title:string,
    status: string,
    group:string[]
}

export interface todoSliceType{
    todo : todo[]
}

export interface todoSelector{
    todo : todoSliceType
}

export interface filteringTodo{
    toStart : todo[],
    inProgress: todo[],
    done: todo[]
}

export interface TodoItemProps {
    todos : todo[]
}